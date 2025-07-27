import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Links } from "@/data/links";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const payload = new URLSearchParams();
  payload.append("name", formData.name);
  payload.append("email", formData.email);
  payload.append("subject", formData.subject);
  payload.append("message", formData.message);

  try {
    const response = await fetch("https://getform.io/f/boloowea", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
    });

    if (!response.ok) throw new Error("Failed to send message");

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error: any) {
    toast({
      title: "Error",
      description: error.message || "Failed to send message",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-14 bg-background">
      <div className="section-container">
        <h2 className="section-heading">For Enquiries</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Want to sponsor the event? Fill up the form and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Fill up the form and I'll get back to you as soon as possible, Thank you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    <a href={`mailto:${Links.emailonly}`}>{Links.emailonly}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    <a href={`tel:${Links.phone}`}>{Links.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    {Links.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Connect with Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href={Links.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
                  className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={Links.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form
              className="space-y-6 bg-card p-6 rounded-lg shadow-sm border border-border"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="6c14b370-ac51-45bc-b933-1a3ed381b3d1"
              />
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Linkedin Local Ogun"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="LinkedinLocalOgun@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="For Sponsorship"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
