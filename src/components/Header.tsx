import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
        ? 'py-4 bg-[#060608]/80 backdrop-blur-xl  shadow-2xl'
        : 'py-6 bg-linear-to-b from-[#060608]/95 via-[#060608]/70 to-transparent pt-8 pb-12'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="group flex items-center gap-2">
          {/* Subtle Logo Text */}
          <span className="font-serif text-2xl font-light tracking-widest text-white uppercase group-hover:text-zinc-400 transition-colors">
            Bassani
          </span>
          <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full group-hover:bg-white transition-colors"></span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Reel', href: '#reel' },
            { label: 'Portfólio', href: '#portfolio' },
            { label: 'Estúdio', href: '#estudio' },
            { label: 'Contato', href: '#contato' }
          ].map((item) => (
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
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="w-6 h-px bg-white"></span>
          <span className="w-4 h-px bg-white self-end"></span>
        </button>
      </div>
    </motion.header>
  );
}
