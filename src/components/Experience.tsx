import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ChevronRight, Zap } from "lucide-react";

const experiences = [
  {
    title: "Curso Técnico de TI",
    company: "ETEC Aristóteles Ferreira",
    period: "2023 - 2024",
    description: "Curso técnico profissionalizante de 1 ano e meio sobre Tecnologia da Informação, envolvendo:",
    points: [
      "Desenvolvimento de Sistemas",
      "Estrutura de Banco de Dados",
      "Manutenção de Software e de Hardware",
    ],
  },
   {
  title: "Cursando Bacharelado em Ciência da Computação",
  company: "Universidade Católica de Santos (UNISANTOS)",
  period: "2025 - Atual",
  description: "Graduação focada em fundamentos da computação, desenvolvimento de software e tecnologias modernas, envolvendo:",
  points: [
    "Programação e Desenvolvimento de Sistemas",
    "Estrutura de Dados e Algoritmos",
    "Banco de Dados e Engenharia de Software",
    "Redes de Computadores e Segurança da Informação",
    "Inteligência Artificial",
  ],
},
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
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
            {"<experiência>"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Minha <span className="text-glow">Experiência</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Minha jornada profissional e formação técnica
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line with glow */}
              <motion.div 
                className="absolute left-8 top-20 bottom-0 w-px"
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
                  boxShadow: '0 0 10px rgba(255,255,255,0.2)'
                }}
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <div className="flex gap-6">
                {/* Timeline dot with pulse */}
                <motion.div
                  className="relative z-10 w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.3)",
                      "0 0 40px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Briefcase className="w-7 h-7" />
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="flex-1 glass rounded-2xl p-6 mb-8 border border-white/5 hover:border-white/20 transition-all"
                  whileHover={{ 
                    x: 10,
                    boxShadow: "0 0 40px rgba(255,255,255,0.1)"
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-white/60 font-medium">{exp.company}</p>
                    </div>
                    <motion.span 
                      className="px-4 py-1.5 text-sm font-mono rounded-full bg-white/10 text-white/80 border border-white/20"
                      whileHover={{ 
                        backgroundColor: "rgba(255,255,255,0.2)",
                        boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                      }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>

                  <p className="text-white/50 mb-4">{exp.description}</p>

                  <ul className="space-y-3">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={point}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + pointIndex * 0.1 }}
                        className="flex items-center gap-3 text-white/60 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 180 }}
                          className="text-white/40 group-hover:text-white transition-colors"
                        >
                          <Zap className="w-4 h-4" />
                        </motion.div>
                        <span className="group-hover:text-white transition-colors">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <span className="font-mono text-white/40 text-sm">{"</experiência>"}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
