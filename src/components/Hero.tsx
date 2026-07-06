import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { GraduationCap, Phone, Mail, Building } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.name;

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200); 
    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section id="top" className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-transparent relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
        
        {/* Left Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center relative"
        >
          {/* Animated Glow Behind Image */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[80px] opacity-30 animate-pulse" />
          
          {/* Profile Picture */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] border-4 border-white/20 overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.3)] backdrop-blur-sm rounded-3xl"
          >
            <img 
              src="images/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right Side: Text & Actions */}
        <div className="flex-1 text-center md:text-left">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {typedText}
            </span>
            <span className="animate-pulse font-light text-foreground/50">|</span>
          </h1>

          {/* Personal Information Info Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 text-foreground/80 mb-10 max-w-md mx-auto md:mx-0 bg-secondary/10 p-6 rounded-2xl border border-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <Building size={20} />
              </div>
              <span className="text-lg">{personalInfo.university}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <GraduationCap size={20} />
              </div>
              <span className="text-lg">{personalInfo.department}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                <Phone size={20} />
              </div>
              <span className="text-lg">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400">
                <Mail size={20} />
              </div>
              <span className="text-lg">{personalInfo.email}</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              觀看作品
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 rounded-full bg-secondary/30 hover:bg-secondary/50 border border-border text-foreground font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-1 w-full sm:w-auto text-center backdrop-blur-md"
            >
              關於我
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
