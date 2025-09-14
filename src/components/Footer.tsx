import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/shreydalal'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/shreydalal'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:shrey.dalal@example.com'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Name */}
          <div className="mb-6 md:mb-0">
            <button
              onClick={scrollToTop}
              className="font-poppins font-bold text-2xl hero-gradient-text hover-scale transition-smooth"
            >
              Shrey Dalal
            </button>
            <p className="text-muted-foreground mt-2">
              AI Engineer & Computer Science Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-xl transition-smooth hover-scale shadow-card"
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Shrey Dalal. Built with
            <Heart size={16} className="text-red-500" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;