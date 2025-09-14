import { Brain, Code, Database, Globe, Zap, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React", "Node.js", "FastAPI", "Flask", "HTML/CSS", "Tailwind"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Pinecone", "Redis", "Git", "Docker"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI Tools & Frameworks",
      icon: Zap,
      skills: ["LangChain", "Pinecone", "Hugging Face", "OpenAI", "RAG Systems", "Vector DBs"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Automation & DevOps",
      icon: Settings,
      skills: ["GitHub Actions", "CI/CD", "AWS", "Automation Scripts", "API Integration"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            My <span className="hero-gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent applications and modern web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="gradient-card p-6 rounded-2xl shadow-card hover-lift transition-spring"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-card p-8 rounded-2xl shadow-card max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient-text mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Programming Languages</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient-text mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Technologies & Frameworks</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Hours Learning Weekly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;