import { personalInfo } from '../data/portfolioData';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-gradient-to-br from-background/20 to-secondary/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-border overflow-hidden shadow-2xl">
            <img 
              src="images/profile.jpg" 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400?text=Profile+Image'; }}
            />
          </div>
        </motion.div>

        {/* Right Side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, 我是<span className="text-blue-500">{personalInfo.name}</span></h1>
          <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">{personalInfo.university} {personalInfo.department}</h2>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-8 text-foreground/70">
            <div className="flex items-center gap-2">
              <Phone size={18} /> {personalInfo.phone}
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} /> {personalInfo.email}
            </div>
          </div>

          <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            {personalInfo.description}
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#about" className="px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors">
              關於我
            </a>
            <a href="#projects" className="px-6 py-3 border border-border font-semibold rounded-lg hover:bg-secondary transition-colors">
              查看作品
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
