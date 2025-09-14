import { GraduationCap, Target, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              About <span className="hero-gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover my journey in technology and my passion for artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Personal info */}
            <div className="space-y-8">
              <div className="gradient-card p-8 rounded-2xl shadow-card hover-lift transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="gradient-primary p-3 rounded-xl text-primary-foreground">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold mb-3">Who I Am</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a passionate Computer Science student with a deep fascination for 
                      artificial intelligence and machine learning. I love turning complex 
                      problems into elegant solutions through code and innovative thinking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-card p-8 rounded-2xl shadow-card hover-lift transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="gradient-primary p-3 rounded-xl text-primary-foreground">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold mb-3">Education</h3>
                    <div className="space-y-2">
                      <p className="font-medium">B.Tech in Computer Science Engineering</p>
                      <p className="text-muted-foreground">Parul University</p>
                      <p className="text-sm text-muted-foreground">
                        Focusing on AI/ML, Data Structures, and Modern Software Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Goals and interests */}
            <div className="space-y-8">
              <div className="gradient-card p-8 rounded-2xl shadow-card hover-lift transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="gradient-primary p-3 rounded-xl text-primary-foreground">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold mb-3">Career Goals</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      My goal is to become a leading AI engineer, developing cutting-edge 
                      solutions that make a meaningful impact on society. I'm particularly 
                      interested in:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Natural Language Processing
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Computer Vision
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Automation & Robotics
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Full-stack Development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center space-x-4 bg-card p-6 rounded-2xl shadow-card">
                  <div className="text-center">
                    <div className="text-2xl font-bold hero-gradient-text">2+</div>
                    <div className="text-sm text-muted-foreground">Years Coding</div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold hero-gradient-text">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold hero-gradient-text">5+</div>
                    <div className="text-sm text-muted-foreground">Tech Stacks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;