import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="w-5 h-5 text-white" />
            </motion.div>
            <span className="font-bold text-white text-glow">Bruno Puzzuoli</span>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm text-white/30 font-mono">
              v2.0.0
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
