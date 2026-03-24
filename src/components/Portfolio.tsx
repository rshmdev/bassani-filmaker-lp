import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const projects = [
  {
    id: 1,
    title: "Ensaio Automotivo",
    category: "Performance e estética",
    image: img1,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    title: "Retrato",
    category: "Ensaios",
    image: img2,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    title: "Bastidores",
    image: img3,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    objectPosition: "object-[center_100%]",
  },
  {
    id: 4,
    title: "Direção de Fotografia",
    category: "Gravação da novela - Kwai",
    image: img4,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: 5,
    title: "Cobertura",
    category: "Eventos privados",
    image: img5,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 w-full bg-[#060608] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
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
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
                delay: index * 0.1
              }}
              className={`group relative overflow-hidden bg-zinc-900 rounded-3xl ${project.colSpan} ${project.rowSpan} cursor-pointer`}
            >
              {/* Image Asset */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={`w-full h-full object-cover ${project.objectPosition || 'object-center'} transform transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal`}
              />

              {/* Diffusion Shadow & Information Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {project.category && (
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2 font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif text-white">{project.title}</h3>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
