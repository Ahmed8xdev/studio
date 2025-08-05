
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Signature = () => {
    return (
        <div className="font-headline text-3xl font-bold text-foreground">
            Ahmed Sanad
        </div>
    );
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <Separator className="mb-8 bg-border/50" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center">
            <div className="flex-1 flex justify-center md:justify-start">
                 <Signature />
            </div>
          
            <div className="flex items-center justify-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com/sanad-io" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5 transition-transform hover:scale-110" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/ahmed-mohamed-sa-605045204/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 transition-transform hover:scale-110" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://instagram.com/sanad.io" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5 transition-transform hover:scale-110" />
                    </Link>
                </Button>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
                <p className="text-sm text-muted-foreground">
                    &copy; {currentYear} Ahmed Sanad. All rights reserved.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
