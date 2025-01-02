'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, } from 'lucide-react'

export default function Portfolio() {


  return (
    <div className="min-h-screen bg-background text-foreground bg-gray-900 text-gray-100 transition-colors duration-300">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-73px)] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                Santiago
                <br />
                Lombardi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Jr. Apps Developer
              </p>
              <div className="flex space-x-4 pt-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/santiagolombardi" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/santiagolombardi" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:santiago@example.com">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-2xl mx-auto lg:ml-auto">
              <img
                src="/placeholder.svg"
                alt="Santiago Lombardi"
                // fill
                className="object-cover grayscale contrast-125"
                // priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
    </div>
  )
}