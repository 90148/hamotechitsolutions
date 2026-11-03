import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
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

export const PlacementSection: React.FC<PlacementSectionProps> = ({ onOpenModal }) => {
  const [activeStage, setActiveStage] = useState(0);
  const [mobileActiveStage, setMobileActiveStage] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Sync active stage as user scrolls through right-hand cards
  const handleCardsScroll = () => {
    if (!cardsContainerRef.current) return;
    const { scrollTop, clientHeight } = cardsContainerRef.current;
    if (clientHeight === 0) return;
    const currentIdx = Math.round(scrollTop / clientHeight);
    const clampedIdx = Math.max(0, Math.min(PLACEMENT_STAGES.length - 1, currentIdx));
    if (clampedIdx !== activeStage) {
      setActiveStage(clampedIdx);
    }
  };

  // Smoothly scroll the cards container to a specific stage
  const scrollToStage = (stageIdx: number) => {
    if (cardsContainerRef.current) {
      const cardHeight = cardsContainerRef.current.clientHeight;
      cardsContainerRef.current.scrollTo({
        top: stageIdx * cardHeight,
        behavior: 'smooth'
      });
    }
    setActiveStage(stageIdx);
  };

  const currentMobileStage = PLACEMENT_STAGES[mobileActiveStage];
  const MobileIcon = currentMobileStage.icon;

  return (
    <>
      {/* ============================================================ */}
      {/* MOBILE & TABLET VIEW (< lg): Fluid Interactive Cards         */}
      {/* ============================================================ */}
      <section id="placements-mobile" className="lg:hidden py-12 bg-gradient-to-b from-[#FFF1F2]/80 via-[#FDF2F8]/80 to-[#FFF7ED]/80 border-t border-rose-100 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-rose-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-xl mx-auto px-4 relative z-10 space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-rose-300 text-[#BE123C] text-[10px] font-black uppercase tracking-wider shadow-sm">
              <Target className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
              <span>CAREER TRANSFORMATION ROADMAP</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display leading-tight">
              FROM LEARNING TO <span className="text-gradient-red animate-slide-up">CAREER</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We prepare you end-to-end to excel in corporate IT recruitment drives. Tap the stages below to explore your path.
            </p>
          </div>

          {/* Mobile Stage Selector Tabs (6 Pills Grid) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {PLACEMENT_STAGES.map((s, sIdx) => {
              const isActive = mobileActiveStage === sIdx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setMobileActiveStage(sIdx)}
                  className={`py-2 px-1.5 sm:px-2 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    isActive
                      ? 'bg-gradient-to-r from-rose-500 to-[#E11D48] text-white shadow-md shadow-rose-500/25 scale-[1.02]'
                      : 'bg-white/85 text-slate-700 hover:bg-rose-50 border border-rose-200/70 shadow-xs'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-black ${isActive ? 'text-amber-200' : 'text-rose-600'}`}>
                    STAGE {s.stageNumber}
                  </span>
                  <span className="text-[11px] font-bold truncate max-w-[85px] leading-tight mt-0.5">
                    {s.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Mobile Stage Card */}
          <motion.div
            key={currentMobileStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-rose-200/90 shadow-2xl shadow-rose-900/10 p-5 sm:p-7 flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-rose-100/80 mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${currentMobileStage.color} text-white flex items-center justify-center shadow-md shadow-rose-500/20 shrink-0`}>
                    <MobileIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">
                      {currentMobileStage.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STAGE {currentMobileStage.stageNumber} OF 06
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black font-mono shadow-xs">
                  0{mobileActiveStage + 1}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display mb-2">
                {currentMobileStage.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                {currentMobileStage.desc}
              </p>

              {/* Features Checklist */}
              <div className="space-y-2 mb-4">
                {currentMobileStage.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-rose-50 via-orange-50/50 to-rose-50 border border-rose-200/80 flex items-center space-x-2 text-xs text-[#BE123C] font-semibold">
                <Sparkles className="w-4 h-4 text-[#E11D48] shrink-0 animate-pulse" />
                <span className="text-[11px] leading-snug">{currentMobileStage.highlight}</span>
              </div>
            </div>

            {/* Card Actions */}
            <div className="pt-4 mt-3 border-t border-rose-100 flex items-center justify-between">
              <div className="flex items-center space-x-1.5 text-xs text-emerald-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Support</span>
              </div>

              <div className="flex items-center space-x-2">
                {mobileActiveStage < PLACEMENT_STAGES.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setMobileActiveStage(prev => prev + 1)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-xl border border-rose-200 transition-colors cursor-pointer"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#E11D48] to-[#BE123C] px-3.5 py-1.5 rounded-xl shadow-md shadow-rose-600/25 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>Get Placed</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Action Buttons for Mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={onOpenModal}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/25 flex items-center justify-center space-x-2 active:scale-95 transition-transform cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>START YOUR CAREER WITH HAMOTECH</span>
            </button>

            <a
              href="tel:9884166198"
              className="w-full py-3 rounded-xl bg-white border border-rose-200 text-slate-700 hover:text-[#E11D48] text-xs font-bold shadow-xs flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Counselor: +91 98841 66198</span>
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* DESKTOP VIEW (>= lg): Compact Section & Scrolled Cards       */}
      {/* ============================================================ */}
      <section 
        id="placements" 
        className="hidden lg:block relative py-12 xl:py-16 bg-gradient-to-b from-[#FFF1F2]/80 via-[#FDF2F8]/80 to-[#FFF7ED]/80 border-t border-rose-100"
      >
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-rose-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            
            {/* ============================================================ */}
            {/* LEFT COLUMN: SECTION HEADINGS & PROGRESS TRACKER             */}
            {/* ============================================================ */}
            <div className="lg:col-span-5 space-y-2.5 text-left">
              
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-rose-300 text-[#BE123C] text-[10px] font-black uppercase tracking-wider shadow-xs">
                <Target className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
                <span>CAREER TRANSFORMATION ROADMAP</span>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] xl:text-3xl font-black text-slate-900 font-display leading-[1.15]">
                  FROM LEARNING TO <br />
                  <span className="text-gradient-red animate-slide-up">CAREER</span>
                </h2>
                <p className="mt-1 text-xs text-slate-600 leading-snug font-normal line-clamp-2">
                  We don&apos;t just teach technology — we prepare you end-to-end to excel in corporate IT recruitment drives. Scroll cards on the right to experience each stage.
                </p>
              </div>

              {/* Progress Bar Indicator */}
              <div className="bg-white/85 backdrop-blur-xs px-3 py-2 rounded-xl border border-rose-200/80 shadow-xs space-y-1">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                  <span className="text-[#E11D48] flex items-center space-x-1.5 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse shrink-0" />
                    <span className="truncate">Stage 0{activeStage + 1} of 0{PLACEMENT_STAGES.length}: {PLACEMENT_STAGES[activeStage].category}</span>
                  </span>
                  <span className="text-slate-400 font-mono text-[10px] shrink-0 ml-2">
                    {Math.round(((activeStage + 1) / PLACEMENT_STAGES.length) * 100)}%
                  </span>
                </div>
                
                <div className="w-full h-1.5 bg-rose-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#E11D48] to-[#F59E0B] rounded-full"
                    animate={{ width: `${((activeStage + 1) / PLACEMENT_STAGES.length) * 100}%` }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Clickable Stages List (Vertical 6 Stages) */}
              <div className="space-y-1 pt-0.5">
                {PLACEMENT_STAGES.map((s, sIdx) => {
                  const isActive = activeStage === sIdx;
                  const isPast = activeStage > sIdx;

                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => scrollToStage(sIdx)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-rose-500 to-[#E11D48] text-white shadow-md shadow-rose-500/20 scale-[1.01]'
                          : isPast
                          ? 'bg-rose-50/90 text-rose-800 hover:bg-rose-100/70 border border-rose-200/60'
                          : 'bg-white/80 text-slate-600 hover:bg-rose-50 hover:text-slate-900 border border-rose-100'
                      }`}
                    >
                      <div className="flex items-center space-x-2 min-w-0">
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] shrink-0 font-bold ${
                          isActive
                            ? 'bg-white text-[#E11D48]'
                            : isPast
                            ? 'bg-rose-200/70 text-rose-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {s.stageNumber}
                        </span>
                        <span className="truncate text-xs">{s.title}</span>
                      </div>

                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping shrink-0 ml-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-0.5">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#BE123C] text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md shadow-rose-600/20 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>START YOUR CAREER</span>
                </button>

                <a
                  href="tel:9884166198"
                  className="py-2 px-2.5 rounded-xl bg-white border border-rose-200 text-slate-700 hover:text-[#E11D48] text-[11px] font-bold shadow-xs transition-colors flex items-center space-x-1 shrink-0"
                >
                  <PhoneCall className="w-3 h-3 text-emerald-600" />
                  <span>+91 98841 66198</span>
                </a>
              </div>

              {/* Scroll Helper Hint */}
              <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-medium">
                <ChevronDown className="w-3.5 h-3.5 text-rose-500 animate-bounce" />
                <span>Scroll cards with wheel or click stages to explore</span>
              </div>

            </div>

            {/* ============================================================ */}
            {/* RIGHT COLUMN: SCROLLING CARDS CONTAINER (ONE BY ONE)         */}
            {/* ============================================================ */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              {/* Outer Shell matching left column height */}
              <div className="relative w-full max-w-xl">
                
                {/* Scroll-snapping Container for Cards */}
                <div 
                  ref={cardsContainerRef}
                  onScroll={handleCardsScroll}
                  className="h-[460px] xl:h-[480px] w-full overflow-y-auto snap-y snap-mandatory scroll-smooth rounded-3xl border-2 border-rose-200/90 shadow-2xl shadow-rose-900/10 bg-white/95 backdrop-blur-md relative no-scrollbar"
                >
                  {PLACEMENT_STAGES.map((stage, idx) => {
                    const Icon = stage.icon;

                    return (
                      <div 
                        key={stage.id}
                        className="h-[460px] xl:h-[480px] w-full snap-center snap-always p-5 sm:p-6 xl:p-7 flex flex-col justify-between"
                      >
                        {/* Card Header */}
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-rose-100/80 mb-3.5">
                            <div className="flex items-center space-x-3">
                              <div className={`w-11 h-11 xl:w-12 xl:h-12 rounded-2xl bg-gradient-to-br ${stage.color} text-white flex items-center justify-center shadow-md shadow-rose-500/20 shrink-0`}>
                                <Icon className="w-5 h-5 xl:w-6 xl:h-6" />
                              </div>
                              <div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 block">
                                  {stage.category}
                                </span>
                                <span className="text-xs font-mono font-bold text-slate-400">
                                  STAGE {stage.stageNumber} OF 0{PLACEMENT_STAGES.length}
                                </span>
                              </div>
                            </div>

                            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black font-mono shadow-xs">
                              0{idx + 1}
                            </span>
                          </div>

                          {/* Card Title & Desc */}
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-2">
                            {stage.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3.5">
                            {stage.desc}
                          </p>

                          {/* Features Checklist */}
                          <div className="space-y-2 mb-3.5">
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
                          <div className="p-2.5 rounded-xl bg-gradient-to-r from-rose-50 via-orange-50/50 to-rose-50 border border-rose-200/80 flex items-center space-x-2 text-xs text-[#BE123C] font-semibold">
                            <Sparkles className="w-4 h-4 text-[#E11D48] shrink-0 animate-pulse" />
                            <span className="line-clamp-1">{stage.highlight}</span>
                          </div>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="pt-3.5 mt-2 border-t border-rose-100 flex items-center justify-between">
                          <div className="flex items-center space-x-1.5 text-xs text-emerald-700 font-bold">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>100% Verified Support</span>
                          </div>

                          <div className="flex items-center space-x-2 pr-4">
                            {idx > 0 && (
                              <button
                                type="button"
                                onClick={() => scrollToStage(idx - 1)}
                                className="inline-flex items-center space-x-1 text-xs font-bold text-slate-600 hover:text-rose-600 bg-white hover:bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200 transition-colors cursor-pointer"
                              >
                                <span>Prev</span>
                              </button>
                            )}

                            {idx < PLACEMENT_STAGES.length - 1 ? (
                              <button
                                type="button"
                                onClick={() => scrollToStage(idx + 1)}
                                className="inline-flex items-center space-x-1 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3.5 py-1.5 rounded-xl border border-rose-200 transition-colors cursor-pointer"
                              >
                                <span>Stage 0{idx + 2}</span>
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
                    );
                  })}
                </div>

                {/* Vertical Stage Position Indicator Dots */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col space-y-1.5 z-20 pointer-events-auto">
                  {PLACEMENT_STAGES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => scrollToStage(dotIdx)}
                      className={`rounded-full transition-all cursor-pointer ${
                        activeStage === dotIdx
                          ? 'w-2 h-5 bg-[#E11D48] shadow-xs'
                          : 'w-2 h-2 bg-rose-200 hover:bg-rose-300'
                      }`}
                      aria-label={`Jump to stage 0${dotIdx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
