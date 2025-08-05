import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Signature = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      className="h-8 w-auto text-foreground"
      fill="currentColor"
    >
      <text x="10" y="35" fontFamily="Canela, serif" fontSize="24" fontWeight="bold">
        Ahmed Sanad
      </text>
    </svg>
  );

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col items-center justify-center">
        <Separator className="mb-8 bg-border/50" />
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2">
            <Signature />
            <p className="text-sm text-muted-foreground mt-2">
            &copy; {currentYear} Ahmed Sanad. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
