import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Links } from "@/data/links";

const HeroSection = () => {
  return (
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

      <div className="section-container flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col max-w-xl space-y-6 text-center lg:text-left">
          <motion.h1
            className="text-4xl text-[#0459AC] md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Welcome to{" "}
            <span className="inline-flex items-center gap-2">
              Linked
              <img
                src="/linkedin-logo.png" // replace with your actual image path
                alt="LinkedIn"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
              />
            </span>
            <br />
             Local Ogun{" "}
            <motion.span
              className="highlight-text text-[#0459AC]"
              initial={{ backgroundSize: "0% 3px" }}
              animate={{ backgroundSize: "100% 3px" }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              2025
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Where Connections Spark Growth
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div className="flex flex-row items-center gap-4">
              {/* Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="touch-target"
              >
                <a href="#contact" aria-label="Go to contact section">
                  <Button className="min-w-[120px] py-3 text-base">
                    Register Now
                  </Button>
                </a>
              </motion.div>

              {/* Projects Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="touch-target"
              >
                <a href="#projects" aria-label="Go to projects section">
                  <Button
                    variant="outline"
                    className="min-w-[120px] py-3 text-base"
                  >
                    Become a Sponsor
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl"
              animate={{ rotate: [0, 6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative bg-codebg border border-gray-200 p-6 rounded-2xl shadow-sm"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              {/* <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="text-xs text-gray-500">developer.js</div>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="text-gray-500">{"// Software Development"}</div>
                <div>
                  <span className="text-pink-600">const</span>{" "}
                  <span className="text-blue-600">developer</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-orange-500">{"{"}</span>
                </div>
                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                >
                  <span className="text-purple-600">name</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-600">'Ibrahim Oloyede'</span>
                  <span className="text-gray-500">,</span>
                </motion.div>

                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.3 }}
                >
                  <span className="text-purple-600">skills</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-500">[</span>
                  <span className="text-green-600">'TypeScript & JavaScript'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">'Python'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">'MongoDB'</span>
                  <span className="text-orange-500">]</span>
                  <span className="text-gray-500">,</span>
                </motion.div>

                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.3 }}
                >
                  <span className="text-purple-600">focuses</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-500">[</span>
                  <span className="text-green-600">'Full-Stack'</span>
                  <span className="text-gray-500">,</span>{" "}
                  <span className="text-green-600">'Cloud Automation'</span>
                  <span className="text-orange-500">]</span>
                  <span className="text-gray-500">,</span>
                </motion.div>

                <motion.div
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0, duration: 0.3 }}
                >
                  <span className="text-purple-600">learning</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-green-600">'Always exploring'</span>
                </motion.div>

                <div>
                  <span className="text-orange-500">{"}"}</span>
                  <span className="text-gray-500">;</span>
                </div>
              </div> */}
              <img src="/imgs/llo.jpg" alt="My photo" width={500} height={300} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
