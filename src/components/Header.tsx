import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setIsScrolled(latest > 50);
  });

  const navItems = [
    { label: 'Reel', href: '#reel' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Estúdio', href: '#estudio' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-out ${isScrolled
          ? 'py-4 bg-[#060608]/90 backdrop-blur-xl shadow-2xl'
          : 'py-6 bg-linear-to-b from-[#060608]/95 via-[#060608]/80 to-transparent pt-8 pb-12 '
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="group flex items-center gap-2">
            {/* Subtle Logo Text */}
            <span className="font-serif text-2xl font-light tracking-widest text-white uppercase group-hover:text-zinc-400 transition-colors relative z-[70]">
              Maria Eduarda
            </span>
            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full group-hover:bg-white transition-colors relative z-[70]"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wide text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Minimalist lines */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[70] relative"
          >
            <span className={`w-6 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>

            {/* The middle/bottom lines logic: */}
            {!isMobileMenuOpen && <span className="w-4 h-px bg-white self-end transition-all duration-300"></span>}

            {/* When open, cross the lines */}
            {isMobileMenuOpen && (
              <span className="w-6 h-px bg-white absolute top-2 left-2 -rotate-45 translate-y-[7px] transition-all duration-300"></span>
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-[#060608]/95 backdrop-blur-2xl flex flex-col items-center justify-center h-[100dvh]"
          >
            <nav className="flex flex-col items-center gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.5, type: "spring", stiffness: 100 }}
                  className="text-4xl font-serif text-white tracking-widest uppercase hover:text-zinc-500 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 text-zinc-500 text-xs tracking-[0.3em] font-medium"
            >
              FOTÓGRAFA & FILMAKER
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
