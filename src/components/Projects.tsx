import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Map, Users, Briefcase, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TuriSantos",
    description: "Um site que tem como objetivo aprimorar o aproveitamento dos pontos turísticos e de interesse na cidade de Santos.",
    icon: Map,
    image: "/images/turi_tela_inicio.png",
    github: "https://github.com/brunopuzzuoli/TuriSantos",
  },
  {
    title: "InovaRede",
    description: "Plataforma para compartilhar projetos e permitir que outros colaborem e participem de iniciativas inovadoras.",
    icon: Users,
    image: "/images/inova_projects.png",
    github: "https://github.com/AdrianoBarrosDev/InovaRede",
  },
  {
    title: "WebPortfolio",
    description: "Portfólio pessoal desenvolvido para showcasing de habilidades e projetos profissionais.",
    icon: Briefcase,
    image: "/images/portifolio-pessoal.png",
    github: "",
  },
    {
    title: "Portfolio planos de saúde",
    description: "Portfólio para Corretora de plano de saúde, apresentando os planos de saúde oferecidos e contato.",
    icon: Briefcase,
    image: "/images/port-plano-saude.png",
    github: "https://github.com/wportbr/marina-s-health-plans",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24 relative" ref={ref}>
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[600px] h-[600px] bg-white/3 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="font-mono text-white/40 text-sm mb-4 block"
            animate={isInView ? { opacity: [0.4, 0.8, 0.4] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {"<projetos>"}
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meus <span className="text-glow">Projetos</span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6x2 mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <motion.div
                className="glass rounded-2xl p-6 flex flex-col overflow-hidden
                           transition-all duration-500 border border-white/5
                           hover:border-white/20 min-h-[420px]"
                whileHover={{
                  y: -8,
                  boxShadow: "0 0 60px rgba(255,255,255,0.15)",
                }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 shimmer" />

                {/* Icon */}
                <motion.div
                  className="relative mb-6 w-14 h-14 rounded-xl bg-white/10  flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <project.icon className="w-7 h-7" />
                </motion.div>

                {/* Content */}
                <div className="relative flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-bold text-xl text-white group-hover:text-glow transition-all">
                      {project.title}
                    </h3>

                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-white/60" />
                    </motion.div>
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Project Image */}
                <div className="relative mt-3 rounded-xl border border-white/5">
                  <img src={project.image} alt={project.title} className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Actions */}
                <div className="relative flex gap-3 mt-4">
                <Button asChild variant="outline" size="sm" className="flex-1 group/btn">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                    </motion.div>
                    Código
                  </a>
                </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <span className="font-mono text-white/40 text-sm">
            {"</projetos>"}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;