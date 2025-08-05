"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg font-headline">AS</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="relative transition-colors hover:text-primary text-foreground/80 group">
                    {link.label}
                    <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out" />
                </Link>
            ))}
        </nav>

        <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[80vw]">
                        <div className="flex flex-col items-center justify-center h-full">
                            <nav className="flex flex-col items-center gap-10 text-center">
                                {navLinks.map((link, i) => (
                                     <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * i, ease: "easeInOut" }}
                                     >
                                        <Link 
                                            href={link.href} 
                                            className="text-2xl font-medium transition-colors hover:text-primary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                     </motion.div>
                                ))}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  )
}
