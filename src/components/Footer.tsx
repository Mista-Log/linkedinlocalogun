import { Github, Linkedin, Mail } from "lucide-react";
import { Links } from "@/data/links";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 shadow-lg"
      style={{
      backgroundColor: "var(--footer-background)",
      boxShadow: "0 15px 20px 0 rgba(105, 105, 105, 0.5)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
        <span className="text-2xl font-bold text-primary">Linkedin Local Ogun</span>
        <p className="mt-2 text-muted-foreground max-w-md">
          Where Connections Spark Growth.
        </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
        <div className="flex space-x-4 mb-4">
          <a
          href={Links.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-primary transition-colors"
          >
            {/* X logo SVG */}
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
            d="M17.53 3H21.5L14.42 10.59L22.75 21H16.18L11.07 14.62L5.36 21H1.38L8.86 12.94L1 3H7.73L12.37 9.01L17.53 3ZM16.36 19.13H18.18L7.48 4.77H5.54L16.36 19.13Z"
            fill="currentColor"
            />
            </svg>
          </a>
          <a
          href={Links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-primary transition-colors"
          >
          <Linkedin size={20} />
          </a>
          <a
          href={Links.email}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="text-gray-400 hover:text-primary transition-colors"
          >
          <Mail size={20} />
          </a>
        </div>
        <div className="text-gray-400 text-sm text-right">
          <p>
          © {currentYear} LLO | Let's build the future 
          </p>
        </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
