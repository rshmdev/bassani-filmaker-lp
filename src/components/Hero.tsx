import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Play } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // Check viewport on mount and resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedMetadata = () => {
        setDuration(videoRef.current?.duration || 0);
      };
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      if (videoRef.current.readyState >= 1) {
        handleLoadedMetadata();
      }
      return () => videoRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, []);

  // Control auto-play based on device (Play ONCE on mobile, static scrub on desktop)
  useEffect(() => {
    if (videoRef.current) {
      if (!isDesktop) {
        videoRef.current.loop = false; // Só toca uma vez
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isDesktop]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isDesktop && videoRef.current && duration > 0) {
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = latest * duration;
        }
      });
    }
  });

  return (
    <section ref={containerRef} className="relative md:h-[300vh] min-h-dvh w-full bg-[#060608]">
      {/* Sticky Container */}
      <div className="md:sticky relative top-0 min-h-dvh w-full overflow-hidden flex items-center justify-start pt-20" id="reel">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-[#060608]">
          <div className="absolute inset-0 bg-linear-to-r from-[#060608] via-[#060608]/40 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#060608] via-transparent to-transparent z-10"></div>
          
          <video 
            ref={videoRef}
            src="/hero_bg.mp4" 
            className="w-full h-full object-cover opacity-100"
            muted 
            playsInline 
            preload="auto"
          />
          
          {/* Film grain effect (Desktop only to save GPU on Mobile) */}
          <div className="hidden md:block absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-10 mix-blend-overlay z-20 pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-20 -mt-10">
          <div className="max-w-3xl">
            {/* Staggered text reveal */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1, 
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                }
              }}
              className="flex flex-col gap-6"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-px bg-zinc-500"></div>
                <p className="text-zinc-400 tracking-[0.2em] text-xs uppercase font-medium">Diretor de Fotografia</p>
              </motion.div>

              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
                }}
                className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-serif text-white tracking-tighter"
              >
                Capturando <br />
                o <span className="text-zinc-500 italic font-light hover:text-white transition-colors duration-700">Movimento.</span>
              </motion.h1>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="text-zinc-400 text-lg max-w-md leading-relaxed mt-4"
              >
                Transformando luz pura em substância narrativa. Especializado em filmes comerciais, documentários e narrativas visuais curtas.
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                }}
                className="mt-8 flex items-center gap-6"
              >
                <button className="group relative liquid-glass px-8 py-4 rounded-full flex items-center gap-3 overflow-hidden transition-all duration-300 hover:bg-white/10 active:scale-95">
                  <span className="relative z-10 text-white font-medium tracking-wide text-sm">Assistir Showreel</span>
                  <Play weight="fill" className="relative z-10 text-white w-4 h-4" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </button>
                
                <a href="#portfolio" className="text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-colors relative group">
                  Ver Trabalhos
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-20 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Role para animar</span>
          <div className="w-px h-12 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 w-full h-1/2 bg-linear-to-b from-transparent via-zinc-400 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
