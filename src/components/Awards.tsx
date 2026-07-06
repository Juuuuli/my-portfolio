import React from 'react';
import { awards } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star } from 'lucide-react';

export default function Awards() {
  const getIcon = (badge: string) => {
    if (badge.includes("第一名") || badge.includes("優勝")) return <Trophy className="text-yellow-400" size={20} />;
    if (badge.includes("第二名") || badge.includes("第三名")) return <Medal className="text-blue-400" size={20} />;
    if (badge.includes("發表")) return <Star className="text-purple-400" size={20} />;
    return <Award className="text-emerald-400" size={20} />;
  };

  return (
    <section id="awards" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-20 text-center tracking-wider"
        >
          榮譽獎項
        </motion.h2>

        <div className="max-w-5xl mx-auto relative">
          {/* Center line for desktop, left line for mobile */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2" />

          {awards.map((award, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className={`mb-12 relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-card border border-border shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center transform -translate-x-1/2 z-10">
                  {getIcon(award.badge)}
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-14 text-left md:text-right' : 'md:pl-14 text-left'}`}>
                  <div className="bg-secondary/10 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:bg-secondary/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 group">
                    
                    <div className={`flex flex-wrap items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      <span className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">{award.year}</span>
                      <span className="text-xs px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-blue-200 font-medium tracking-wide">
                        {award.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground/90 leading-snug">{award.title}</h3>
                    
                    {award.desc && (
                      <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                        {award.desc}
                      </p>
                    )}
                    
                    {award.role && (
                      <div className={`inline-flex items-center gap-2 text-sm text-foreground/60 bg-background/60 px-3 py-1.5 rounded-lg border border-border/50`}>
                        ✨ {award.role}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
