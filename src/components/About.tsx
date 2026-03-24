import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="estudio" className="relative py-32 w-full bg-[#060608] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-6">
                A Filosofia da <br />
                <span className="text-zinc-500 italic font-light">Luz & Sombra.</span>
              </h2>
              
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-[65ch]">
                <p>
                  Eu não apenas aponto uma câmera; eu engenho a atmosfera. Cada enquadramento é uma interação meticulosamente desenhada entre espaço negativo, textura e ressonância emocional.
                </p>
                <p>
                  Com uma vasta experiência tanto com fotografia impressa tradicional como em cinema digital moderno, a minha abordagem foca estritamente na narrativa. O equipamento serve à história, e não o oposto. Meu estúdio opera com a crença de que o verdadeiro luxo mora na simplicidade visual.
                </p>
              </div>
            </motion.div>

            {/* Stats/Metrics (Cockpit Style) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-white/5"
            >
              <div>
                <p className="text-3xl font-mono text-white mb-2 tracking-tighter">12+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Anos Ativo</p>
              </div>
              <div>
                <p className="text-3xl font-mono text-white mb-2 tracking-tighter">140</p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Projetos</p>
              </div>
              <div>
                <p className="text-3xl font-mono text-white mb-2 tracking-tighter">8</p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Prêmios</p>
              </div>
            </motion.div>
          </div>

          {/* Visual Asset */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative aspect-4/5 w-full rounded-4xl overflow-hidden bg-zinc-900 border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1968&auto=format&fit=crop" 
              alt="Diretor no set"
              className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
            />
            {/* Liquid Glass Overlay Element */}
            <div className="absolute bottom-8 left-8 right-8 liquid-glass p-6 rounded-3xl flex items-center justify-between">
              <div>
                <p className="text-white font-mono text-sm">ARRI Alexa Mini LF</p>
                <p className="text-zinc-400 text-xs">Câmera Principal</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
