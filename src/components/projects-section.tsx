import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "QuantumLeap CRM",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "dashboard interface"
  },
  {
    title: "Stellar eCommerce",
    tech: ["React", "Node.js", "PostgreSQL"],
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "ecommerce website"
  },
  {
    title: "AutomateAI",
    tech: ["Python", "Flask", "OpenAI API"],
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "robot technology"
  },
  {
    title: "BrandSphere",
    tech: ["Gatsby", "GraphQL", "Contentful"],
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "branding agency"
  },
  {
    title: "ConnectUX Mobile",
    tech: ["React Native", "Figma", "Firebase"],
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "mobile app"
  },
  {
    title: "DataViz Pro",
    tech: ["D3.js", "React", "MongoDB"],
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "data visualization"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Featured Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-2">
            A selection of projects that showcase my skills and passion.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{project.title}</CardTitle>
              </CardContent>
              <CardFooter className="p-6 pt-0">
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
