import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

const projects = [
  {
    id: 1,
    title: "Ecos do Silêncio",
    category: "Curta Metragem",
    image: "https://images.unsplash.com/photo-1604085422477-941199a4c0ae?q=80&w=2072&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    title: "Noites de Neon",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    title: "Essência Natural",
    category: "Documentário",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 4,
    title: "Pulso Urbano",
    category: "Videoclipe",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-1",
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 w-full bg-[#060608] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-4xl md:text-6xl font-serif text-white tracking-tight"
            >
              Trabalhos <span className="text-zinc-500 italic font-light">Em Destaque.</span>
            </motion.h2>
          </div>
          <motion.a 
            href="#all-work"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Ver Todos
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                delay: index * 0.1 
              }}
              whileHover={{ y: -5, scale: 0.98 }}
              className={`group relative overflow-hidden rounded-4xl bg-zinc-900 border border-white/5 ${project.colSpan} ${project.rowSpan} cursor-pointer`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                <div>
                  <p className="text-zinc-300 text-xs uppercase tracking-[0.2em] font-medium mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif text-white">
                    {project.title}
                  </h3>
                </div>
                
                {/* Hover Reveal Button */}
                <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
