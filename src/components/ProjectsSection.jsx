import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ReelCine",
    description: "Um site de filmes projetado para o usuário.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Native"],
    demoUrl: "https://phoenix7290.github.io/ReelCine/",
    githubUrl: "https://github.com/Phoenix7290/ReelCine",
  },
  {
    id: 2,
    title: "Baby Track",
    description:
      "Site interativado focado do cuidado de crianças.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Supabase", "i18n"],
    demoUrl: "https://phoenix7290.github.io/Baby-Track/signin",
    githubUrl: "https://github.com/Phoenix7290/Baby-Track",
  },
  {
    id: 3,
    title: "https://github.com/Phoenix7290/Elysium-Hotel",
    description:
      "Aplicação para cadastro de hóteis.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Json"],
    demoUrl: "https://phoenix7290.github.io/Elysium_Hotel/",
    githubUrl: "https://github.com/Phoenix7290/Elysium-Hotel",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Meus <span className="text-primary"> Projetos </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos meus projetos. Cada um foi feito com atenção especial para os detalhes, perfomance e experiência do usuário. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Phoenix7290"
          >
            Veja Meu Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
