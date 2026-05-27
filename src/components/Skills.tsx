import { motion } from "framer-motion";

const skills = [
  { name: "HTML", image: "/images/html.png" },
  { name: "CSS", image: "/images/css.png" },
  { name: "Python", image: "/images/py.png" },
  { name: "C", image: "/images/c.png" },
  { name: "C#", image: "/images/csharp.png" },
  { name: "MySQL", image: "/images/sql.png" },
  { name: "React", image: "/images/react.png" },
  { name: "GitHub", image: "/images/Git.png" },
  { name: "Unity", image: "/images/unity.png" },
];

export function Skills() {
  return (
    <section className="py-24 relative">
      {/* Divisor top */}
      <div className="w-full h-12 bg-[#1f1f1f] mb-16" />

      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Conhecimento <span className="text-glow">técnico</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-4"
            >
              {/* Card */}
              <div
                className="w-36 h-36 md:w-40 md:h-40 rounded-full flex items-center justify-center  border border-white/10 bg-gradient-to-br bg-[#101010] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] ">
                <img src={skill.image} alt={skill.name} className="h-20 w-auto object-contain"/>
              </div>

              {/* Label */}
              <span className="text-white/70 text-lg font-medium group-hover:text-white transition">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divisor bottom */}
      <div className="w-full h-12 bg-[#1f1f1f] mt-24" />
    </section>
  );
}

export default Skills;
