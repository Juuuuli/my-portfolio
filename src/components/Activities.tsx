import { motion } from 'framer-motion';

export default function Activities() {
  // Quick fix for extensions since some are .jpg and some are .JPG
  // activity1.jpg, activity2.JPG, activity3.jpg, activity4.JPG, activity5.jpg, activity6.jpg, activity7.jpg, activity8.JPG, activity9.JPG, activity10.jpg, activity11.jpg, activity12.JPG, activity13.JPG, activity14.JPG, activity15.JPG
  // Just let the browser load them, if it fails, maybe case insensitive on windows, but github pages is case sensitive!
  // I will just use the correct names from artifact list
  const correctImages = [
    "activity1.jpg", "activity2.JPG", "activity3.jpg", "activity4.JPG", "activity5.jpg",
    "activity6.jpg", "activity7.jpg", "activity8.JPG", "activity9.JPG", "activity10.jpg",
    "activity11.jpg", "activity12.JPG", "activity13.JPG", "activity14.JPG", "activity15.JPG"
  ];

  return (
    <section id="activities" className="py-20 bg-transparent overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center"
        >
          活動花絮
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-4 px-2 cursor-pointer"
          animate={{ x: [0, -100 * correctImages.length] }}
          transition={{ 
            ease: "linear", 
            duration: 40, 
            repeat: Infinity 
          }}
          style={{ width: "max-content" }}
        >
          {/* Double the images for seamless looping */}
          {[...correctImages, ...correctImages].map((img, index) => (
            <div 
              key={index} 
              className="relative w-64 h-48 md:w-80 md:h-60 rounded-xl overflow-hidden flex-shrink-0 border border-border shadow-md hover:scale-105 transition-transform"
            >
              <img 
                src={`images/Activity/${img}`} 
                alt={`Activity ${index}`} 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400?text=Image+Not+Found' }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
