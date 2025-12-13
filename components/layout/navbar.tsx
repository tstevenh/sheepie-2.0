"use client";

import Link from "next/link";
import siteData from "@/data/site.json";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-bold text-primary">
          {siteData.name}
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {siteData.nav.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button asChild size="sm">
            <Link href="/products">
              Shop Now
            </Link>
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-mr-2">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left border-b pb-4 mb-4">
                <SheetTitle className="font-display text-2xl font-bold text-primary">
                  {siteData.name}
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-4 py-4">
                {siteData.nav.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <div className="mt-8">
                <SheetClose asChild>
                  <Button asChild className="w-full h-12 text-base shadow-lg shadow-primary/20">
                    <Link href="/products">
                      Shop All Essentials
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}