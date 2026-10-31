import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Terminal, 
  Compass, 
  Layers, 
  CheckCircle2, 
  HeartHandshake, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  MoveHorizontal,
  Check
} from 'lucide-react';

interface FeatureCard {
  id: string;
  icon: React.ElementType;
  title: string;
  badge: string;
  desc: string;
  highlight: string;
  keyPoints: string[];
  gradient: string;
  iconColor: string;
  borderColor: string;
  accentColor: string;
}

const FEATURES: FeatureCard[] = [
  {
    id: 'trainers',
    icon: Award,
    title: 'Expert Trainers',
    badge: 'Industry Mentors',
    desc: 'Learn directly from seasoned IT professionals, tech architects, and senior developers with 10+ years of real industry production experience.',
    highlight: '10+ Years Avg Experience',
    keyPoints: ['Working Senior Developers', '1-on-1 Code Review & Mentorship', 'Live Architecture Insights'],
    gradient: 'from-rose-500/15 via-rose-500/5 to-orange-500/10',
    iconColor: 'text-[#E11D48]',
    borderColor: 'border-rose-200/90',
    accentColor: '#E11D48'
  },
  {
    id: 'projects',
    icon: Terminal,
    title: 'Real-Time Projects',
    badge: 'Production Code',
    desc: 'Build enterprise-grade web applications, microservices, mobile apps, and cloud pipelines mirroring real software company workflows.',
    highlight: '50+ Industry Repositories',
    keyPoints: ['Full Stack E-Commerce & SaaS', 'CI/CD & Docker Deployments', 'Industry Code Standards'],
    gradient: 'from-amber-500/15 via-amber-500/5 to-yellow-500/10',
    iconColor: 'text-[#D97706]',
    borderColor: 'border-amber-200/90',
    accentColor: '#D97706'
  },
  {
    id: 'placement',
    icon: Compass,
    title: 'Placement Guidance',
    badge: 'Career Assistance',
    desc: 'Structured resume curation, technical mock grilling, aptitude training, and direct recruitment access to our 1200+ IT hiring partners.',
    highlight: '1200+ Hiring Partners',
    keyPoints: ['ATS 90+ Resume Makeover', '1-on-1 Mock Interviews', 'Unlimited Drive Opportunities'],
    gradient: 'from-sky-500/15 via-sky-500/5 to-cyan-500/10',
    iconColor: 'text-[#0284C7]',
    borderColor: 'border-sky-200/90',
    accentColor: '#0284C7'
  },
  {
    id: 'practical',
    icon: Layers,
    title: '100% Practical Training',
    badge: 'Hands-on Labs',
    desc: 'No dry slides or rote memorization. Master modern software engineering through daily active coding, debugging, and live lab exercises.',
    highlight: 'Zero Rote Theory',
    keyPoints: ['Daily Coding Labs', 'Git/GitHub Version Control', 'Real Error Debugging Drills'],
    gradient: 'from-emerald-500/15 via-emerald-500/5 to-teal-500/10',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200/90',
    accentColor: '#059669'
  },
  {
    id: 'skills',
    icon: CheckCircle2,
    title: 'Job-Ready Skills',
    badge: '2026 Tech Stack',
    desc: 'Curriculum designed around modern recruiter expectations: REST APIs, Spring Boot, React, Django, Docker, AWS, and modern problem solving.',
    highlight: 'Current Market Demand',
    keyPoints: ['Full Stack Java & Python', 'AI/ML & Cloud Integration', 'DSA & Problem Solving'],
    gradient: 'from-purple-500/15 via-purple-500/5 to-pink-500/10',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200/90',
    accentColor: '#9333EA'
  },
  {
    id: 'support',
    icon: HeartHandshake,
    title: 'Lifetime Career Support',
    badge: 'Continuous Growth',
    desc: 'Continuous career advice, technology upgrade sessions, alumni networking, and job referrals even long after your course graduation.',
    highlight: 'Enduring Mentorship',
    keyPoints: ['Alumni Referral Network', 'Lifelong Upskilling Guidance', 'Career Switch Counseling'],
    gradient: 'from-rose-500/15 via-pink-500/5 to-purple-500/10',
    iconColor: 'text-rose-500',
    borderColor: 'border-rose-200/90',
    accentColor: '#E11D48'
  }
];

export const WhyChooseUs: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [radius, setRadius] = useState(340);

  const cylinderRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);

  // Sync refs with state
  isPausedRef.current = isPaused;
  isDraggingRef.current = isDragging;

  // Responsive radius calculation for 3D cylinder
  const updateRadius = useCallback(() => {
    if (typeof window === 'undefined') return;
    const width = window.innerWidth;
    if (width < 640) {
      setRadius(230); // Mobile
    } else if (width < 1024) {
      setRadius(290); // Tablet
    } else {
      setRadius(345); // Desktop
    }
  }, []);

  useEffect(() => {
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [updateRadius]);

  // Continuous 3D rotation animation loop via requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const rotationSpeed = 9.5; // degrees per second for smooth, readable motion

    const animateLoop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isPausedRef.current && !isDraggingRef.current) {
        // Rotate right-to-left: rotation decreases so front cards travel right-to-left
        rotationRef.current = (rotationRef.current - rotationSpeed * delta) % 360;
        
        // Update DOM transform directly for buttery 60/120fps motion
        if (cylinderRef.current) {
          cylinderRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
        }

        // Calculate currently front-facing card (closest to 0 deg relative to viewer)
        const normalizedAngle = ((-rotationRef.current % 360) + 360) % 360;
        const activeIdx = Math.round(normalizedAngle / 60) % 6;
        setActiveCardIndex(activeIdx);
      }

      animationFrameId = requestAnimationFrame(animateLoop);
    };

    animationFrameId = requestAnimationFrame(animateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Update visual state when manually setting rotation
  const applyRotation = (newRot: number) => {
    rotationRef.current = newRot;
    setRotation(newRot);
    if (cylinderRef.current) {
      cylinderRef.current.style.transform = `rotateY(${newRot}deg)`;
    }
    const normalizedAngle = ((-newRot % 360) + 360) % 360;
    const activeIdx = Math.round(normalizedAngle / 60) % 6;
    setActiveCardIndex(activeIdx);
  };

  // Rotate to specific card index
  const rotateToIndex = (targetIdx: number) => {
    const targetAngle = -targetIdx * 60;
    // Find closest rotation angle
    const current = rotationRef.current;
    const diff = ((targetAngle - current) % 360 + 540) % 360 - 180;
    const finalRot = current + diff;
    applyRotation(finalRot);
  };

  const handlePrev = () => {
    applyRotation(rotationRef.current + 60);
  };

  const handleNext = () => {
    applyRotation(rotationRef.current - 60);
  };

  // Mouse & Touch Drag Handlers
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    isDraggingRef.current = true;
    dragStartX.current = clientX;
    dragStartRotation.current = rotationRef.current;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - dragStartX.current;
    // Drag sensitivity: 1px = ~0.3 degrees of rotation
    const newRotation = dragStartRotation.current + deltaX * 0.35;
    applyRotation(newRotation);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  return (
    <section 
      id="why-us" 
      className="py-12 md:py-16 bg-gradient-to-b from-[#FFF1F2]/80 via-[#FFF7ED]/80 to-[#FDF2F8]/80 relative overflow-hidden border-t border-rose-100 select-none"
    >
      {/* Ambient background light glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#D97706] text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
            <span>THE HAMOTECH ADVANTAGE • 3D CYLINDER SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
            WHY CHOOSE <span className="text-gradient-red animate-slide-up">HAMOTECH?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Continuous 3D revolving view of our core strengths. Hover over any card to pause and explore, or drag to rotate freely.
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* 3D CYLINDER CAROUSEL VIEWPORT                                */}
        {/* ============================================================ */}
        <div 
          className="relative w-full h-[490px] sm:h-[530px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging) setIsPaused(false);
          }}
          onMouseDown={(e) => handlePointerDown(e.clientX)}
          onMouseMove={(e) => handlePointerMove(e.clientX)}
          onMouseUp={handlePointerUp}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
          onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
          onTouchEnd={handlePointerUp}
        >
          {/* 3D Scene Perspective Box */}
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ 
              perspective: '1200px',
              perspectiveOrigin: '50% 50%'
            }}
          >
            {/* The Revolving Cylinder Ring */}
            <div
              ref={cylinderRef}
              className="relative w-[280px] sm:w-[320px] md:w-[330px] h-[380px] sm:h-[400px]"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation}deg)`,
                willChange: 'transform'
              }}
            >
              {FEATURES.map((item, idx) => {
                const angle = idx * 60; // 6 cards * 60 deg = 360 deg
                const isCurrent = activeCardIndex === idx;

                return (
                  <div
                    key={item.id}
                    onClick={() => rotateToIndex(idx)}
                    className="absolute inset-0 rounded-3xl p-5 sm:p-6 bg-white/95 backdrop-blur-md border-2 shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'visible',
                      borderColor: isCurrent ? item.accentColor : 'rgba(254, 205, 211, 0.8)',
                      boxShadow: isCurrent 
                        ? `0 20px 35px -10px ${item.accentColor}35, 0 0 15px -3px ${item.accentColor}25`
                        : '0 15px 25px -10px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    {/* Card Inner Content */}
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.borderColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                          <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                        </div>

                        <div className="flex items-center space-x-1.5">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                            0{idx + 1}
                          </span>
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
                          )}
                        </div>
                      </div>

                      {/* Badge & Title */}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
                        {item.badge}
                      </span>

                      <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display mb-2 group-hover:text-[#E11D48] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Key points checklist */}
                      <div className="space-y-1.5 pt-1">
                        {item.keyPoints.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-center space-x-2 text-[11px] text-slate-700 font-medium">
                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                              <Check className="w-2 h-2 stroke-[3]" />
                            </div>
                            <span className="truncate">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 border-t border-rose-100 flex items-center justify-between mt-2">
                      <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-slate-700 bg-rose-50/70 px-2.5 py-1 rounded-lg border border-rose-100">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>{item.highlight}</span>
                      </span>

                      <span className="text-[10px] font-semibold text-rose-600 group-hover:underline">
                        Focus ➔
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* HOLOGRAPHIC CYLINDER FLOOR / PEDESTAL PLATFORM              */}
          {/* ============================================================ */}
          <div className="absolute -bottom-6 w-72 sm:w-96 h-28 pointer-events-none flex items-center justify-center">
            {/* Outer blur glow */}
            <div className="w-full h-full bg-gradient-to-r from-rose-500/20 via-amber-400/25 to-rose-500/20 rounded-full blur-2xl" />
            
            {/* Concentric rotating 3D orbital rings */}
            <div 
              className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full border border-rose-300/40"
              style={{ transform: 'rotateX(75deg)' }}
            />
            <div 
              className="absolute w-44 sm:w-56 h-44 sm:h-56 rounded-full border border-amber-300/50"
              style={{ transform: 'rotateX(75deg)' }}
            />
          </div>

        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE CONTROLS TOOLBAR & PROGRESS DOTS                 */}
        {/* ============================================================ */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto px-4 py-3 bg-white/90 backdrop-blur-md rounded-2xl border border-rose-200/80 shadow-md">
          
          {/* Left: Play / Pause Auto-Rotation */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsPaused(prev => !prev)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-all border border-rose-200 shadow-xs cursor-pointer"
              title={isPaused ? 'Resume continuous cylinder rotation' : 'Pause rotation to inspect cards'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                  <span>Resume Spin</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                  <span>Pause Spin</span>
                </>
              )}
            </button>

            <span className="hidden sm:inline-flex items-center space-x-1 text-[11px] text-slate-400 font-medium">
              <MoveHorizontal className="w-3 h-3 text-slate-400" />
              <span>Drag or swipe</span>
            </span>
          </div>

          {/* Center: 6 Stage Navigation Dots */}
          <div className="flex items-center space-x-2">
            {FEATURES.map((feat, fIdx) => (
              <button
                key={feat.id}
                type="button"
                onClick={() => rotateToIndex(fIdx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeCardIndex === fIdx
                    ? 'w-6 h-2.5 bg-gradient-to-r from-[#E11D48] to-[#F59E0B] shadow-sm'
                    : 'w-2.5 h-2.5 bg-rose-200 hover:bg-rose-300'
                }`}
                title={`View ${feat.title}`}
              />
            ))}
          </div>

          {/* Right: Previous / Next Card Step Buttons */}
          <div className="flex items-center space-x-1.5">
            <button
              type="button"
              onClick={handlePrev}
              className="w-8 h-8 rounded-xl bg-white hover:bg-rose-50 border border-rose-200 text-slate-700 hover:text-[#E11D48] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              title="Previous Card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-8 h-8 rounded-xl bg-white hover:bg-rose-50 border border-rose-200 text-slate-700 hover:text-[#E11D48] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              title="Next Card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
