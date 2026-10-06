import React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal, Compass, Layers, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Trainers',
      desc: 'Learn directly from seasoned IT professionals & senior architects with years of real software industry experience.',
      gradient: 'from-red-500/20 to-orange-500/20',
      iconColor: 'text-[#E50914]'
    },
    {
      icon: Terminal,
      title: 'Real-Time Projects',
      desc: 'Build enterprise-grade software applications, mobile apps, and cloud setups that mirror real company workflows.',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      iconColor: 'text-[#FFD21F]'
    },
    {
      icon: Compass,
      title: 'Placement Guidance',
      desc: 'Structured resume building, mock technical interviews, aptitude coaching, and direct employer networking.',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-[#00BFFF]'
    },
    {
      icon: Layers,
      title: '100% Practical Training',
      desc: 'No dry slides or rote memorization. Master software development through active hands-on coding exercises.',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400'
    },
    {
      icon: CheckCircle2,
      title: 'Job-Ready Skills',
      desc: 'Curriculum designed around 2026 industry demand: Git, REST APIs, Microservices, CI/CD, and modern frameworks.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: HeartHandshake,
      title: 'Lifetime Career Support',
      desc: 'Continuous career advice, skill updates, and project mentoring even after course graduation.',
      gradient: 'from-rose-500/20 to-red-500/20',
      iconColor: 'text-rose-400'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#0B1020] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#FFD21F]/40 text-[#FFD21F] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE HAMOTECH ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            WHY CHOOSE <span className="text-gradient-red">HAMOTECH?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            We provide everything you need to transition from a learner to a successful software engineering professional.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-[#050816] border border-slate-800/90 hover:border-slate-700 glass-card shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>

                <h3 className="text-lg font-black text-white font-display mb-2 group-hover:text-[#FFD21F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  FEATURE 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-[#E50914] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
