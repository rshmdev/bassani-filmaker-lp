import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

export function Contact() {
  return (
    <section id="contato" className="relative py-32 w-full bg-[#060608] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-4">
            Vamos <span className="text-zinc-500 italic font-light">Conversar.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto">
            Pronto para tirar sua ideia do papel? Me conte um pouco sobre o seu projeto para criarmos algo incrível.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Seu Nome</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Como prefere ser chamado?" 
                className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-zinc-700 font-sans"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">E-mail</label>
              <input 
                type="email" 
                id="email" 
                placeholder="seu@email.com" 
                className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-zinc-700 font-sans"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Sua Mensagem</label>
            <textarea 
              id="message" 
              rows={4}
              placeholder="Detalhe o escopo, prazo e o que você imaginou..." 
              className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-zinc-700 font-sans resize-none"
            ></textarea>
          </div>

          <div className="pt-8 flex justify-end">
            <button 
              type="button" 
              className="group relative liquid-glass px-10 py-5 rounded-full flex items-center gap-4 overflow-hidden transition-all duration-300 hover:bg-white/10 active:-translate-y-px active:scale-[0.98] cursor-pointer"
            >
              <span className="relative z-10 text-white font-medium tracking-widest uppercase text-xs">Enviar Mensagem</span>
              <ArrowRight className="relative z-10 text-white w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
