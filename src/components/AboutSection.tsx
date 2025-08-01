import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About LLO
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      {/* Replace GraduationCap with Briefcase for a networking/business theme */}
                      <Briefcase className="w-5 h-5 text-primary" />{" "}
                      High-impact networking
                    </h3>
                    <div className="space-y-2">
                      {/* <p className="font-medium">BSc in Computer Science</p> */}
                      <p className="text-sm text-muted-foreground">
                        Connect with driven professionals across diverse industries, all in one dynamic space. 
                        Whether you're building a brand, launching a startup, or seeking partnerships, 
                        this is where real connections turn into meaningful opportunities.
                      </p>
                      {/* <p className="text-sm text-muted-foreground">
                        2023 - Present
                      </p> */}
                      {/* <p className="text-sm text-muted-foreground">
                        NACOS Treasurer (2024/2025)
                      </p> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      {/* Use a chat or conversation icon for "Insightful conversations" */}
                      <FileText className="w-5 h-5 text-primary" />
                      Insightful conversations
                    </h3>
                    <div className="space-y-4">
                      <div>
                        {/* <p className="font-medium">
                          Back-end Developement Intern
                        </p> */}
                        <p className="text-sm text-muted-foreground">
                          Engage in thought-provoking discussions that go beyond the surface. 
                          Hear fresh perspectives, exchange ideas, 
                          and gain clarity on challenges you didn’t even know you had.
                        </p>
                        {/* <p className="text-sm text-muted-foreground">
                          March 2025
                        </p> */}
                      </div>
                      {/* <div>
                        <p className="font-medium">Web Development</p>
                        <p className="text-sm text-muted-foreground">
                          Arit Developer Circle
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Backend Dev
                        </p>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" /> Mentorship & Learning
                    </h3>
                    <div className="space-y-4">
                      <div>
                        {/* <p className="font-medium">
                          Software Development Intern
                        </p> */}
                        <p className="text-sm text-muted-foreground">
                          Tap into the wisdom of seasoned leaders and peers who’ve walked the path before you. 
                          From micro-workshops to casual knowledge sharing, every moment is a chance to grow.
                        </p>
                        {/* <p className="text-sm text-muted-foreground">
                          Feb - May 2025
                        </p> */}
                      </div>
                      {/* <div>
                        <p className="font-medium">Student Intern</p>
                        <p className="text-sm text-muted-foreground">
                          Kibo School
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Python Programming
                        </p>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>


              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" /> Collaboration opportunities
                    </h3>
                    <div className="space-y-4">
                      <div>
                        {/* <p className="font-medium">
                          Software Development Intern
                        </p> */}
                        <p className="text-sm text-muted-foreground">
                          Brainstorm bold ideas, find teammates for passion projects, 
                          or co-create solutions to real-world problems. 
                          It's not just networking — it's groundwork for powerful partnerships.
                        </p>
                        {/* <p className="text-sm text-muted-foreground">
                          Feb - May 2025
                        </p> */}
                      </div>
                      {/* <div>
                        <p className="font-medium">Graphic Designer</p>
                        <p className="text-sm text-muted-foreground">
                          SLIIT Media Unit
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Freelance
                        </p>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
