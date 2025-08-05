import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Ahmed's vision for system architecture transformed our platform, making it scalable and incredibly efficient. A true professional.",
    name: "Jane Doe",
    title: "CEO, TechCorp",
  },
  {
    quote: "The brand strategy developed by Ahmed gave us a clear path forward. Our market presence has never been stronger.",
    name: "John Smith",
    title: "Marketing Director, Innovate Ltd.",
  },
  {
    quote: "Working with Ahmed on our UI/UX was a game-changer. His intuitive designs have significantly improved user engagement.",
    name: "Samantha Lee",
    title: "Product Manager, Solutions Inc.",
  },
];

const AvatarPlaceholder = ({ name }: { name: string }) => (
    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
        <span className="text-2xl font-bold text-primary font-headline">{name.charAt(0)}</span>
    </div>
)

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">What My Clients Say</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg mt-2">
            Testimonials from people I've had the pleasure to work with.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="flex flex-col items-center text-center p-8 space-y-6">
                      <p className="text-xl italic font-serif text-foreground/80">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="flex flex-col items-center gap-2 mt-4">
                        <AvatarPlaceholder name={testimonial.name} />
                        <div>
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
