import { motion } from 'framer-motion';
import img0 from '../assets/0.jpg';

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
                Direção visual em <br />
                <span className="text-zinc-500 italic font-light">fotografia e vídeo.</span>
              </h2>
              
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-[65ch]">
                <p>
                  Atuo como fotógrafa e filmaker, com experiência na produção de conteúdos visuais para diferentes segmentos. Desenvolvo projetos que aliam qualidade estética, planejamento e atenção aos detalhes, sempre buscando atender às necessidades e objetivos de cada cliente com profissionalismo e consistência.
                </p>
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
              src={img0} 
              alt="Fotógrafa em ação"
              className="w-full h-full object-cover opacity-80"
            />
            
            {/* Darker Gradient to guarantee text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
            
            {/* Custom Dark Glass Overlay Element */}
            <div className="absolute bottom-8 left-8 right-8 bg-[#060608]/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex items-center justify-between shadow-2xl">
              <div>
                <p className="text-white font-mono text-sm tracking-wide">Sony Alpha A6400</p>
                <p className="text-zinc-400 text-xs mt-1">Câmera Principal</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
