import { Award, Calendar, ExternalLink, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Research Intern",
      company: "Tech Innovation Lab",
      location: "Remote",
      period: "Jun 2024 - Present",
      description: [
        "Developed machine learning models for natural language processing tasks",
        "Implemented RAG systems using LangChain and vector databases",
        "Collaborated on research papers for AI conference submissions"
      ],
      type: "experience"
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Vadodara, India",
      period: "Jan 2024 - May 2024",
      description: [
        "Built responsive web applications using React and Node.js",
        "Implemented automated testing and CI/CD pipelines",
        "Optimized database queries resulting in 40% performance improvement"
      ],
      type: "experience"
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      location: "Global",
      period: "2023 - Present",
      description: [
        "Contributed to popular Python and JavaScript libraries",
        "Maintained documentation and resolved community issues",
        "Mentored new contributors in open source best practices"
      ],
      type: "experience"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "https://aws.amazon.com/certification/",
      type: "certification"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2024",
      link: "https://www.tensorflow.org/certificate",
      type: "certification"
    },
    {
      title: "GitHub Student Developer Pack",
      issuer: "GitHub Education",
      date: "2023",
      link: "https://education.github.com/pack",
      type: "benefit"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera (Stanford)",
      date: "2023",
      link: "https://coursera.org/specializations/machine-learning",
      type: "certification"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Experience & <span className="hero-gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through internships, projects, and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-poppins font-semibold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                <Calendar size={16} className="text-primary-foreground" />
              </div>
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary/20 last:border-l-transparent"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  
                  <div className="gradient-card p-6 rounded-xl shadow-card hover-lift transition-smooth">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="text-muted-foreground text-sm space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h3 className="text-2xl font-poppins font-semibold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                <Award size={16} className="text-primary-foreground" />
              </div>
              Certifications & Benefits
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="gradient-card p-6 rounded-xl shadow-card hover-lift transition-smooth group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Issued by {cert.issuer} • {cert.date}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          cert.type === 'certification' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {cert.type === 'certification' ? 'Certificate' : 'Student Pack'}
                        </span>
                      </div>
                    </div>
                    
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth group-hover:scale-110"
                      aria-label="View certificate"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center gradient-card p-6 rounded-xl shadow-card">
                <div className="text-2xl font-bold hero-gradient-text mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center gradient-card p-6 rounded-xl shadow-card">
                <div className="text-2xl font-bold hero-gradient-text mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;