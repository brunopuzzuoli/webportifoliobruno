import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Award, Calendar, X } from "lucide-react";

const formations = [
  {
    title: "Curso Técnico Profissional de TI",
    institution: "ETEC Aristóteles Ferreira",
    period: "2023 - 2024",
    img: "images/certificado_etec.png",
    icon: GraduationCap,
  },
  {
    title: "Ensino Médio",
    institution: "Colégio Santa Cecília",
    period: "2021 - 2023",
    img: "images/santa_certi.png",
    icon: Award,
  },
  {
    title: "InovaCPS",
    institution: "Centro Paula Souza",
    period: "2024",
    img: "images/inovacps_certi.png",
    icon: Award,
  },
  {
    title: "GDG Santos",
    institution: "Google Developer Groups",
    period: "2023",
    img: "images/devfest_certi.png",
    icon: Award,
  },
    {
    title: "Do Código ao Cais",
    institution: "Universidade Católica de Santos",
    period: "2025",
    img: "images/cais_certi.png",
    icon: Award,
  },
];

const Formations = () => {
  const ref = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="formacoes" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-0">
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
            {"<formações>"}
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Minhas <span className="text-glow">Formações</span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto">
            Minha trajetória acadêmica e certificações na área de tecnologia.
          </p>
          <p className="text-white/50 max-w-2xl mx-auto">
            Clique nas imagens para abrir
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-65xl mx-auto">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(255,255,255,0.1)",
              }}
              className="tech-card glass rounded-xl p-2 group cursor-default shimmer"
            >
              {/* Linha com ícone + textos */}
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-lg bg-white/5 text-white/60 group-hover:bg-white group-hover:text-black transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <formation.icon className="w-6 h-6" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-white/40 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formation.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-glow transition-all">
                    {formation.title}
                  </h3>

                  <p className="text-white/60 font-medium text-sm mb-3">
                    {formation.institution}
                  </p>
                </div>
              </div>

              {/* Imagem clicável */}
              <div className="w-full flex justify-center mt-4">
                <img
                  src={formation.img}
                  alt={formation.title}
                  onClick={() => setSelectedImage(formation.img)}
                  className="max-w-[500px] w-full rounded-lg object-contain cursor-pointer transition-all duration-300 hover:opacity-80"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal da imagem */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              {/* Botão fechar */}
              <button
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-10 h-10" />
              </button>

              {/* Imagem ampliada */}
              <motion.img
                src={selectedImage}
                alt="Certificado"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <span className="font-mono text-white/40 text-sm">
            {"</formações>"}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Formations;