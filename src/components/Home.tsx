import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Links } from "@/data/links";

const Home = () => {
  return (
    <div
      className="h-screen bg-[url('/public/imgs/hero.jpg')] bg-cover bg-center flex items-center justify-center"
    >
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-70"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </section>
    </div>
  );
};

export default Home;
