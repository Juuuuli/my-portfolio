import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FileText } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex justify-between items-start sticky top-0 bg-card z-10">
              <div>
                <h2 className="text-2xl font-bold mb-3 pr-8">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, idx: number) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-secondary rounded-full transition-colors absolute top-6 right-6"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2">專案核心</h3>
                <p className="text-foreground/80 leading-relaxed">{project.core}</p>
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">技術亮點</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((item: string, idx: number) => {
                      const parts = item.split('：');
                      if (parts.length > 1) {
                        return (
                          <li key={idx} className="flex gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span><strong>{parts[0]}：</strong>{parts.slice(1).join('：')}</span>
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className="flex gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {project.images && project.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">畫面展示</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.images.map((img: any, idx: number) => (
                      <div key={idx} className="rounded-lg overflow-hidden border border-border bg-secondary/10">
                        <img src={img.src} alt={img.caption} className="w-full h-auto object-cover" />
                        {img.caption && <div className="p-2 text-center text-sm text-foreground/60">{img.caption}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {project.links && project.links.length > 0 && (
              <div className="p-6 border-t border-border bg-secondary/10 flex flex-wrap gap-4 sticky bottom-0">
                {project.links.map((link: any, idx: number) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:border-blue-500 transition-colors text-sm font-medium"
                  >
                    {link.url.includes('.pdf') ? <FileText size={16} /> : <ExternalLink size={16} />}
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
