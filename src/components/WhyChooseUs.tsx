import React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal, Compass, Layers, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Trainers',
      desc: 'Learn directly from seasoned IT professionals & senior architects with years of real software industry experience.',
      gradient: 'from-rose-500/15 to-orange-500/15',
      iconColor: 'text-[#E11D48]',
      borderColor: 'border-rose-200'
    },
    {
      icon: Terminal,
      title: 'Real-Time Projects',
      desc: 'Build enterprise-grade software applications, mobile apps, and cloud setups that mirror real company workflows.',
      gradient: 'from-amber-500/15 to-yellow-500/15',
      iconColor: 'text-[#D97706]',
      borderColor: 'border-amber-200'
    },
    {
      icon: Compass,
      title: 'Placement Guidance',
      desc: 'Structured resume building, mock technical interviews, aptitude coaching, and direct employer networking.',
      gradient: 'from-sky-500/15 to-cyan-500/15',
      iconColor: 'text-[#0284C7]',
      borderColor: 'border-sky-200'
    },
    {
      icon: Layers,
      title: '100% Practical Training',
      desc: 'No dry slides or rote memorization. Master software development through active hands-on coding exercises.',
      gradient: 'from-emerald-500/15 to-teal-500/15',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200'
    },
    {
      icon: CheckCircle2,
      title: 'Job-Ready Skills',
      desc: 'Curriculum designed around 2026 industry demand: Git, REST APIs, Microservices, CI/CD, and modern frameworks.',
      gradient: 'from-purple-500/15 to-pink-500/15',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      icon: HeartHandshake,
      title: 'Lifetime Career Support',
      desc: 'Continuous career advice, skill updates, and project mentoring even after course graduation.',
      gradient: 'from-rose-500/15 to-pink-500/15',
      iconColor: 'text-rose-500',
      borderColor: 'border-rose-200'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-gradient-to-b from-[#FFF1F2]/70 via-[#FFF7ED]/70 to-[#FDF2F8]/70 relative overflow-hidden border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-300 text-[#D97706] text-xs font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>THE HAMOTECH ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
            WHY CHOOSE <span className="text-gradient-red">HAMOTECH?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
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
              className="p-6 rounded-2xl bg-white/95 border border-rose-200/90 hover:border-rose-300 glass-card shadow-lg shadow-rose-900/5 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>

                <h3 className="text-lg font-black text-slate-900 font-display mb-2 group-hover:text-[#E11D48] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  FEATURE 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-rose-200 group-hover:bg-[#E11D48] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
