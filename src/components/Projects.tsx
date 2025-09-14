import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Chat Assistant",
      description: "A sophisticated conversational AI built with LangChain and OpenAI API, featuring context-aware responses and document querying capabilities.",
      techStack: ["Python", "LangChain", "OpenAI API", "FastAPI", "React"],
      githubUrl: "https://github.com/shreydalal/ai-chat-assistant",
      liveUrl: "https://ai-chat-demo.vercel.app",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Smart Automation Suite",
      description: "An intelligent automation platform that streamlines repetitive tasks using machine learning algorithms and API integrations.",
      techStack: ["Python", "Flask", "MongoDB", "Celery", "Docker"],
      githubUrl: "https://github.com/shreydalal/automation-suite",
      liveUrl: "",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Vector Database RAG System",
      description: "A Retrieval-Augmented Generation system using Pinecone for semantic search and document analysis with real-time query processing.",
      techStack: ["Python", "Pinecone", "LangChain", "Streamlit", "OpenAI"],
      githubUrl: "https://github.com/shreydalal/rag-system",
      liveUrl: "https://rag-demo.streamlit.app",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Modern Portfolio Website",
      description: "A responsive, animated portfolio built with React and TypeScript, featuring smooth transitions and modern design principles.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/shreydalal/portfolio",
      liveUrl: "https://shreydalal.dev",
      image: "/api/placeholder/400/250"
    },
    {
      title: "ML Model Deployment Pipeline",
      description: "End-to-end machine learning pipeline with automated model training, validation, and deployment using CI/CD practices.",
      techStack: ["Python", "MLflow", "Docker", "AWS", "GitHub Actions"],
      githubUrl: "https://github.com/shreydalal/ml-pipeline",
      liveUrl: "",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Real-time Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing real-time data streams with advanced filtering and export capabilities.",
      techStack: ["React", "D3.js", "Node.js", "WebSocket", "MongoDB"],
      githubUrl: "https://github.com/shreydalal/analytics-dashboard",
      liveUrl: "https://analytics-demo.herokuapp.com",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Featured <span className="hero-gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI, web development, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="gradient-card rounded-2xl overflow-hidden shadow-card hover-lift transition-spring group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-poppins font-bold text-primary/30">
                    {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/shreydalal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover-lift shadow-glow transition-spring"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;