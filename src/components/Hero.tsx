import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Terminal, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "DEV & WEB Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating particles with glow */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              boxShadow: '0 0 10px rgba(255,255,255,0.8)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[100px]"
        animate={{ 
          scale: [1.3, 1, 1.3],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Rotating ring */}
      <motion.div
        className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[800px] h-[800px] border border-white/5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10 m-36">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Code decoration */}

          {/* Greeting with sparkle */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-5 h-5 text-white/60" />
            </motion.div>
            <p className="text-lg md:text-xl text-white/60">Olá, sou</p>
          </motion.div>

          {/* Name with glow effect */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 60px rgba(255,255,255,0.6)",
                  "0 0 20px rgba(255,255,255,0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Bruno Puzzuoli
            </motion.span>
            <br />
            <motion.span 
              className="text-white inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Souza
            </motion.span>
          </motion.h1>

          {/* Typing effect title */}
          <motion.div 
            className="h-12 mb-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="font-mono text-xl md:text-2xl text-white">
              {displayText}
              <motion.span 
                className="typing-cursor ml-1 text-white/80"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Sou Programador com foco em criar sites e aplicações{" "}
            <motion.span 
              className="text-white font-medium"
              whileHover={{ textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
            >
              modernas, rápidas e responsivas
            </motion.span>. 
            Gosto de transformar ideias em interfaces funcionais, sempre buscando um equilíbrio entre{" "}
            <span className="text-white/80">design</span>,{" "}
            <span className="text-white/80">performance</span> e{" "}
            <span className="text-white/80">código limpo</span>.
            Uso IAs com engenharia de prompt para otimizar a eficência ao programar.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Contate-me
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
          <div className="flex justify-center items-center">
            <img src="images/Group 2.png" alt="eu" />
          </div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        
      </motion.div>
    </section>
  );
};

export default Hero;
