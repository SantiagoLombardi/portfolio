'use client'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, } from 'lucide-react'
import { cn } from "@/lib/utils"
import { DotPattern } from "./magicui/dot-pattern"
import { BlurFade } from "./magicui/blur-fade"
import { WordRotate } from "./magicui/word-rotate"

export default function Portfolio() {


  return (
    <div className="h-[100dvh] bg-background text-foreground bg-black text-gray-100 transition-colors duration-300 border-b overflow-hidden">

      <section className="min-h-[calc(100vh-73px)] flex items-center">
        <DotPattern
          width={20}
          cx={5}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <BlurFade delay={0.25} >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                  Santiago
                  <br />
                  Lombardi
                </h1>
              </BlurFade>
              <BlurFade delay={0.5} >
                <div className="flex items-center">
                  <p className="text-xl md:text-2xl text-blue-500 inline mr-2">I´m a </p>
                  <WordRotate className="text-xl md:text-2xl text-blue-500 inline" words={[" Jr. Apps Developer", " Jr. Web Developer", " Jr. Web Designer"]} />
                </div>
              </BlurFade>
              <BlurFade delay={0.75} >
                <div className="flex space-x-4 pt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/santiagolombardi" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                      <span className="sr-only ">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://linkedin.com/in/santiagolombardi" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="mailto:SantiagoNicolasLombardi@gmail.com">
                      <Mail className="h-6 w-6" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </div>
              </BlurFade>
            </div>

            {/* <div className="relative aspect-square w-full max-w-2xl mx-auto lg:ml-auto">
              <img
              src="/placeholder.svg"
              alt="Santiago Lombardi"
              // fill
                className="object-cover grayscale contrast-125"
                // priority
              />
              </div> */}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
    </div>
  )
}