import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combine, Megaphone, Bot, PenTool } from "lucide-react";

const services = [
  {
    icon: <Combine className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "System Architecture",
    description: "Designing scalable and robust systems to power modern applications.",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Brand Strategy",
    description: "Crafting compelling brand identities that resonate with target audiences.",
  },
  {
    icon: <Bot className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "Automation",
    description: "Implementing automated workflows to improve efficiency and productivity.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces for exceptional experiences.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">What I Do</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-2">
            I specialize in turning complex problems into elegant, scalable solutions.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="group text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 border-0 bg-card h-full">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
