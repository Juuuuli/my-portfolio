import { personalInfo, radarData } from '../data/portfolioData';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          我是誰
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/20 p-8 rounded-2xl border border-border"
          >
            <h3 className="text-xl font-bold mb-4">自傳</h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Radar Chart & Status */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="bg-secondary/20 p-8 rounded-2xl border border-border h-80 flex flex-col items-center">
              <h4 className="text-lg font-bold mb-4 w-full text-left">能力維度分析</h4>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#4b5563" />
                  <PolarAngleAxis dataKey="label" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }} />
                  <Radar name="能力" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Traits and Directions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/20 p-6 rounded-xl border border-border"
          >
            <h4 className="font-bold mb-3 flex items-center gap-2">📍 正在做什麼</h4>
            <ul className="list-disc list-inside text-foreground/80 space-y-1">
              {personalInfo.status.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-secondary/20 p-6 rounded-xl border border-border"
          >
            <h4 className="font-bold mb-3 flex items-center gap-2">✨ 個人特質</h4>
            <div className="flex flex-wrap gap-2">
              {personalInfo.traits.map((trait, idx) => (
                <span key={idx} className="bg-background px-3 py-1 rounded-full text-sm border border-border">
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/20 p-6 rounded-xl border border-border"
          >
            <h4 className="font-bold mb-3 flex items-center gap-2">🎯 發展方向</h4>
            <div className="flex flex-wrap gap-2">
              {personalInfo.directions.map((dir, idx) => (
                <span key={idx} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20">
                  {dir}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
