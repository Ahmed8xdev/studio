import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "QuantumLeap CRM",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    description: "A cutting-edge CRM platform designed for quantum computing startups.",
  },
  {
    title: "Stellar eCommerce",
    tech: ["React", "Node.js", "PostgreSQL"],
    description: "An interstellar-themed e-commerce site for futuristic products.",
  },
  {
    title: "AutomateAI",
    tech: ["Python", "Flask", "OpenAI API"],
    description: "An AI-powered automation engine for complex business workflows.",
  },
  {
    title: "BrandSphere",
    tech: ["Gatsby", "GraphQL", "Contentful"],
    description: "A headless CMS-driven branding platform for digital agencies.",
  },
  {
    title: "ConnectUX Mobile",
    tech: ["React Native", "Figma", "Firebase"],
    description: "A social networking app focused on connecting UX professionals.",
  },
  {
    title: "DataViz Pro",
    tech: ["D3.js", "React", "MongoDB"],
    description: "An advanced data visualization tool for enterprise-level analytics.",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Featured Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-2">
            A selection of projects that showcase my skills and passion.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="group flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ease-in-out border-border/50 hover:-translate-y-2 h-full">
               <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm pt-2">{project.description}</p>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
