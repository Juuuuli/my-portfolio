import React from 'react';
import { skills } from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          一點長才
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-full h-72 group"
              style={{ perspective: "1000px" }}
            >
              {/* Inner wrapper for 3D flip */}
              <div className="w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-md rounded-2xl cursor-pointer">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-background p-6 rounded-2xl border border-border [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">{skill.category}</h3>
                  <p className="text-sm text-foreground/60">{skill.techs}</p>
                  <p className="mt-8 text-xs text-foreground/40 bg-secondary/50 px-3 py-1 rounded-full">Hover to flip ↺</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-card p-6 rounded-2xl border border-blue-500/30 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-bold">熟練度</span>
                      <span className="text-blue-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold mb-2 text-foreground border-b border-border pb-1">相關專案</h4>
                    <ul className="space-y-1">
                      {skill.projects.map((proj, idx) => (
                        <li key={idx} className="text-xs text-foreground/70 flex items-start gap-1.5 leading-snug">
                          <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span> 
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
