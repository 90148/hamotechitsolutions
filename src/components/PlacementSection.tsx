import React, { useRef, useState } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValueEvent, 
  MotionValue 
} from 'framer-motion';
import { 
  Target, 
  FileText, 
  Brain, 
  Code2, 
  Users, 
  MessageSquare, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown,
  PhoneCall,
  Check
} from 'lucide-react';

interface PlacementSectionProps {
  onOpenModal: () => void;
}

interface PlacementStage {
  id: string;
  stageNumber: string;
  title: string;
  category: string;
  desc: string;
  icon: React.ElementType;
  features: string[];
  highlight: string;
  color: string;
}

const PLACEMENT_STAGES: PlacementStage[] = [
  {
    id: 'resume',
    stageNumber: '01',
    title: 'ATS Resume Building',
    category: 'Profile Engineering',
    desc: 'Crafting ATS-compliant software developer resumes highlighting verified GitHub repositories, production tech stacks, and live project architectures.',
    icon: FileText,
    features: [
      'ATS Score 90+ Keyword Optimization',
      'GitHub & Live Project Portfolio Links',
      'System Architecture & Metric Bullets',
      '1-on-1 Review with Senior Tech Leads'
    ],
    highlight: 'Passes 100% of MNC automated screening parsers',
    color: 'from-rose-500 to-[#E11D48]'
  },
  {
    id: 'aptitude',
    stageNumber: '02',
    title: 'Aptitude & Analytical Mastery',
    category: 'Screening Rounds',
    desc: 'Intensive coaching on quantitative ability, logical reasoning, and data interpretation required by top recruiters like TCS, Infosys, Cognizant, and product firms.',
    icon: Brain,
    features: [
      'Quantitative Aptitude & Speed Math Shortcuts',
      'Logical Puzzles & Pattern Deductions',
      'Verbal & Technical Reading Comprehension',
      'Timed Mock Online Assessment Tests'
    ],
    highlight: 'Guaranteed confidence in Day-1 corporate screening exams',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'coding',
    stageNumber: '03',
    title: 'DSA & Coding Practice',
    category: 'Technical Grilling',
    desc: 'Daily hands-on Data Structures & Algorithms problem solving on LeetCode/HackerRank style platforms to develop clean, optimal logic under timed conditions.',
    icon: Code2,
    features: [
      'Arrays, HashMaps, Two-Pointers & Recursion',
      'Trees, Graphs & Dynamic Programming',
      'Time & Space Complexity (Big-O) Mastery',
      'Clean Modular Coding & System Design Basics'
    ],
    highlight: 'Solve 150+ standard industry coding challenge patterns',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'mock',
    stageNumber: '04',
    title: '1-on-1 Mock Technical Interviews',
    category: 'Real Simulation',
    desc: 'Rigorous technical grilling sessions conducted by working senior architects from tier-1 MNCs, replicating authentic corporate interview loops.',
    icon: Users,
    features: [
      'Real-Time Live Whiteboard Coding',
      'Deep Architecture & Code Review Grilling',
      'Behavioral Questions using the STAR Method',
      'Detailed Post-Interview Strength & Gap Scorecard'
    ],
    highlight: 'Experience 3 to 5 realistic rounds before facing real recruiters',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'hr',
    stageNumber: '05',
    title: 'HR & Corporate Soft Skills',
    category: 'Culture & Confidence',
    desc: 'Coaching on executive communication, group discussions, business email etiquette, and assertive salary presentation so you speak with corporate maturity.',
    icon: MessageSquare,
    features: [
      'Self-Introduction & Elevator Pitch Polish',
      'Salary Negotiation & Offer Evaluation Tactics',
      'Corporate Workplace Etiquette & Mindset',
      'Body Language & Confident Video Call Presence'
    ],
    highlight: 'Turn technical interviews into confirmed job offers',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'placement',
    stageNumber: '06',
    title: 'Direct Placement Drives',
    category: 'Job Offers & Onboarding',
    desc: 'Direct recruitment scheduling with our network of 1200+ IT hiring partners, startups, and MNCs until you hold your signed offer letter.',
    icon: Award,
    features: [
      'Exclusive Campus & Corporate Drive Access',
      'Multiple Interview Opportunities Guaranteed',
      'Offer Letter Evaluation & Tech Role Verification',
      'Post-Placement Guidance for Initial 90 Days'
    ],
    highlight: 'Highest package ₹18 LPA with average ₹5.2 LPA starting salary',
    color: 'from-rose-600 via-orange-500 to-amber-500'
  }
];

// Sub-component for individual stacking card
const StackingCard: React.FC<{
  stage: PlacementStage;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onOpenModal: () => void;
  onScrollToNext?: () => void;
}> = ({ stage, index, total, progress, onOpenModal, onScrollToNext }) => {
  const Icon = stage.icon;

  // Calculate slice points for this card
  // total = 6. Each card gets ~ 1/6 slice
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  // Transform values for stacking effect
  const y = useTransform(
    progress,
    [
      Math.max(0, start - 0.12),
      start,
      end,
      Math.min(1, end + 0.12)
    ],
    [
      index === 0 ? 0 : 90, // slides up from 90px below
      0,                   // sits in place at center
      0,                   // stays at center during its active range
      -18                  // slightly lifts up when next card arrives
    ]
  );

  const scale = useTransform(
    progress,
    [start, end, Math.min(1, end + 0.12)],
    [1, 1, 0.94] // scales slightly down to sit as a stacked layer
  );

  const opacity = useTransform(
    progress,
    [
      Math.max(0, start - 0.1),
      start,
      end,
      Math.min(1, end + 0.12)
    ],
    [
      index === 0 ? 1 : 0, // card 0 starts visible; others fade in
      1,
      1,
      0.35 // fades into background as next card sits in front
    ]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 10
      }}
      className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto"
    >
      <div className="w-full max-w-xl bg-white/95 backdrop-blur-md rounded-3xl border-2 border-rose-200/90 shadow-2xl shadow-rose-900/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-rose-300">
        
        {/* Card Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-rose-100/80 mb-5">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stage.color} text-white flex items-center justify-center shadow-md shadow-rose-500/20`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 block">
                  {stage.category}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  STAGE {stage.stageNumber} OF 0{total}
                </span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black font-mono shadow-xs">
              0{index + 1}
            </span>
          </div>

          {/* Card Title & Desc */}
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-3">
            {stage.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
            {stage.desc}
          </p>

          {/* Features Checklist */}
          <div className="space-y-2.5 mb-5">
            {stage.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-700 font-medium">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Highlight Badge */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-rose-50 via-orange-50/50 to-rose-50 border border-rose-200/80 flex items-center space-x-2 text-xs text-[#BE123C] font-semibold">
            <Sparkles className="w-4 h-4 text-[#E11D48] shrink-0 animate-pulse" />
            <span className="line-clamp-1">{stage.highlight}</span>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-5 mt-4 border-t border-rose-100 flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-xs text-emerald-700 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Verified Support</span>
          </div>

          <div className="flex items-center space-x-2">
            {index < total - 1 ? (
              <button
                type="button"
                onClick={onScrollToNext}
                className="inline-flex items-center space-x-1 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-xl border border-rose-200 transition-colors cursor-pointer"
              >
                <span>Stage 0{index + 2}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#E11D48] to-[#BE123C] px-4 py-2 rounded-xl shadow-md shadow-rose-600/25 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Get Placed</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              </button>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export const PlacementSection: React.FC<PlacementSectionProps> = ({ onOpenModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  // Scroll tracking across the sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Keep active stage in sync with user scrolling
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(
      PLACEMENT_STAGES.length - 1,
      Math.max(0, Math.floor(latest * PLACEMENT_STAGES.length))
    );
    setActiveStage(idx);
  });

  // Jump to specific stage
  const scrollToStage = (stageIdx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalDistance = containerRef.current.scrollHeight - window.innerHeight;
    const targetY = scrollTop + (stageIdx / (PLACEMENT_STAGES.length - 1)) * totalDistance;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef} 
      id="placements" 
      className="relative h-[380vh] bg-gradient-to-b from-[#FFF1F2]/80 via-[#FDF2F8]/80 to-[#FFF7ED]/80 border-t border-rose-100"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* STICKY VIEWPORT CONTAINER: Locks on screen while user scrolls through cards */}
      <div className="sticky top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ============================================================ */}
            {/* LEFT COLUMN: STICKY SECTION HEADINGS & PROGRESS TRACKER      */}
            {/* ============================================================ */}
            <div className="lg:col-span-5 space-y-5 text-left">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#BE123C] text-xs font-black uppercase tracking-wider shadow-sm">
                <Target className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
                <span>CAREER TRANSFORMATION ROADMAP</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display leading-[1.14]">
                  FROM LEARNING TO <br />
                  <span className="text-gradient-red animate-slide-up">CAREER</span>
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We don&apos;t just teach technology — we prepare you end-to-end to excel in corporate IT recruitment drives. Scroll down to experience each stage of your preparation.
                </p>
              </div>

              {/* Progress Bar Indicator */}
              <div className="bg-white/80 p-4 rounded-2xl border border-rose-200/80 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="text-[#E11D48]">
                    Active: Stage 0{activeStage + 1} of 0{PLACEMENT_STAGES.length}
                  </span>
                  <span className="text-slate-400 font-mono">
                    {Math.round(((activeStage + 1) / PLACEMENT_STAGES.length) * 100)}% Complete
                  </span>
                </div>
                
                <div className="w-full h-2 bg-rose-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#E11D48] to-[#F59E0B] rounded-full"
                    animate={{ width: `${((activeStage + 1) / PLACEMENT_STAGES.length) * 100}%` }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Clickable Stages List */}
              <div className="hidden sm:grid grid-cols-2 lg:grid-cols-1 gap-2 pt-1">
                {PLACEMENT_STAGES.map((s, sIdx) => {
                  const isActive = activeStage === sIdx;
                  const isPast = activeStage > sIdx;

                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => scrollToStage(sIdx)}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-rose-500 to-[#E11D48] text-white shadow-md shadow-rose-500/20 scale-[1.02]'
                          : isPast
                          ? 'bg-rose-50 text-rose-800 hover:bg-rose-100/70 border border-rose-200/50'
                          : 'bg-white/70 text-slate-600 hover:bg-rose-50 hover:text-slate-900 border border-rose-100'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-[10px] ${
                          isActive
                            ? 'bg-white text-[#E11D48] font-black'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {s.stageNumber}
                        </span>
                        <span className="truncate">{s.title}</span>
                      </div>

                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping mr-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/25 hover:shadow-xl transition-all cursor-pointer flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>START YOUR CAREER</span>
                </button>

                <a
                  href="tel:9884166198"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-3 rounded-xl bg-white border border-rose-200 text-slate-700 hover:text-[#E11D48] text-xs font-bold shadow-xs transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>+91 98841 66198</span>
                </a>
              </div>

              {/* Scroll Helper Hint */}
              <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-medium pt-1">
                <ChevronDown className="w-4 h-4 text-rose-500 animate-bounce" />
                <span>Scroll down to advance cards one by one</span>
              </div>

            </div>

            {/* ============================================================ */}
            {/* RIGHT COLUMN: SCROLLING CARDS CONTAINER (ONE BY ONE)         */}
            {/* ============================================================ */}
            <div className="lg:col-span-7 relative h-[480px] sm:h-[520px] w-full flex items-center justify-center">
              
              {/* Decorative Background Frame */}
              <div className="absolute inset-x-2 sm:inset-x-6 inset-y-4 rounded-3xl bg-gradient-to-br from-rose-200/30 to-orange-200/20 blur-xl pointer-events-none" />

              {/* Render All 6 Stacking Cards with Motion Values */}
              {PLACEMENT_STAGES.map((stage, idx) => (
                <StackingCard
                  key={stage.id}
                  stage={stage}
                  index={idx}
                  total={PLACEMENT_STAGES.length}
                  progress={scrollYProgress}
                  onOpenModal={onOpenModal}
                  onScrollToNext={() => scrollToStage(idx + 1)}
                />
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
