import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-accent to-primary rounded-full blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            Hi, I'm{' '}
            <span className="hero-gradient-text">
              Shrey Dalal
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-inter font-medium text-muted-foreground mb-8">
            AI Engineer & Computer Science Student
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building intelligent systems and creating innovative solutions 
            through AI/ML, modern web technologies, and automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="#contact"
              className="gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover-lift shadow-glow transition-spring"
            >
              Get In Touch
            </a>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/shreydalal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-secondary transition-smooth hover-scale shadow-card"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/shreydalal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-secondary transition-smooth hover-scale shadow-card"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:shrey.dalal@example.com"
                className="p-3 rounded-full bg-card hover:bg-secondary transition-smooth hover-scale shadow-card"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium mb-2">Learn More</span>
            <ArrowDown 
              size={24} 
              className="group-hover:translate-y-1 transition-transform duration-300 animate-bounce"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;