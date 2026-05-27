import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Send,
  Mail,
  Github,
  Linkedin,
  CheckCircle,
  Sparkles,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const LIMIT = 3;
  const TIME_WINDOW = 10 * 60 * 1000;

  const now = Date.now();

  const storedData =
    localStorage.getItem("email_limit");

  let emailData = storedData
    ? JSON.parse(storedData)
    : {
        count: 0,
        firstRequest: now,
      };

  if (now - emailData.firstRequest > TIME_WINDOW) {
    emailData = {
      count: 0,
      firstRequest: now,
    };
  }

  if (emailData.count >= LIMIT) {
    toast({
      title: "Limite atingido",
      description:
        "Você já enviou muitas mensagens. Tente novamente mais tarde.",
      variant: "destructive",
    });

    return;
  }

  setIsSubmitting(true);

  const form = e.currentTarget;

  try {
    await emailjs.sendForm(
      "service_3cow5ni",
      "template_gn8j3o9",
      form,
      "uf4Cyu6hGG0JV4zrr"
    );

    emailData.count += 1;

    localStorage.setItem(
      "email_limit",
      JSON.stringify(emailData)
    );

    toast({
      title: "Mensagem enviada!",
      description:
        "Obrigado pelo contato. Responderei em breve!",
    });

    form.reset();
  } catch (error) {
    console.error(error);

    toast({
      title: "Erro ao enviar",
      description:
        "Não foi possível enviar a mensagem.",
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};

  return (
    <section
      id="contato"
      className="py-24 relative"
      ref={ref}
    >
      {/* Background glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[150px]"
        animate={{ opacity: [0.02, 0.08, 0.02] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="font-mono text-white/40 text-sm mb-4 block"
            animate={
              isInView
                ? { opacity: [0.4, 0.8, 0.4] }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
          >
            {"<contato>"}
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Interessado?{" "}
            <span className="text-glow">
              Me mande um Email
            </span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <motion.div
                className="flex items-center gap-2 mb-4"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-5 h-5 text-white/60" />

                <h3 className="text-2xl font-bold text-white">
                  Vamos trabalhar juntos?
                </h3>
              </motion.div>

              <p className="text-white/50 leading-relaxed">
                Estou sempre aberto a novas oportunidades e
                projetos interessantes.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "brunop.s@hotmail.com.br",
                  href: "mailto:brunop.s@hotmail.com.br",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "@brunopuzzuoli",
                  href: "https://github.com/brunopuzzuoli",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Bruno Puzzuoli",
                  href:
                    "https://br.linkedin.com/in/bruno-puzzuoli-a06456375",
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : {}
                  }
                  transition={{
                    delay: 0.3 + index * 0.1,
                  }}
                  whileHover={{
                    x: 10,
                    boxShadow:
                      "0 0 30px rgba(255,255,255,0.1)",
                  }}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-white/20 transition-all group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 group-hover:bg-white group-hover:text-black transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <contact.icon className="w-5 h-5" />
                  </motion.div>

                  <div>
                    <p className="text-sm text-white/40">
                      {contact.label}
                    </p>

                    <p className="font-medium text-white">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="lg:col-span-3"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-6 border border-white/5 hover:border-white/10 transition-all"
              whileHover={{
                boxShadow:
                  "0 0 40px rgba(255,255,255,0.05)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Formulário de Contato
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <label className="text-sm font-medium text-white/50">
                    Nome
                  </label>

                  <Input
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/30"
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <label className="text-sm font-medium text-white/50">
                    Email
                  </label>

                  <Input
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/30"
                  />
                </motion.div>
              </div>

              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.01 }}
              >
                <label className="text-sm font-medium text-white/50">
                  Mensagem
                </label>

                <Textarea
                  name="message"
                  placeholder="Digite aqui sua mensagem..."
                  rows={5}
                  required
                  className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/30 resize-none"
                />
              </motion.div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </motion.div>

                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </motion.form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className="text-center mt-12"
        >
          <span className="font-mono text-white/40 text-sm">
            {"</contato>"}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;