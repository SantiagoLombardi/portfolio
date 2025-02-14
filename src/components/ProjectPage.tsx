"use client"

import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ProjectPageProps {
  title: string
  technologies: string[]
  description: string
  image: string[]
}

export default function ProjectPage({
  title,
  technologies,
  description,
  image,
}: ProjectPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 ">
        {/* Back Button */}
        <a href="/#projects">
          <Button variant="link" className="text-white mb-6 pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            back
          </Button>
        </a>

        {/* Project Title */}
        <h1 className="text-5xl font-bold mb-4">{title}</h1>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-sm text-gray-400 mr-2">Made with:</span>
          {technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        {/* Project Description */}
        <p className="text-gray-300 mb-8 max-w-3xl">{description}</p>

        {/* Project Images */}
        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          <div className="lg:col-span-2">
            <img
              src="/placeholder.svg"
              // src={image[0] || "/placeholder.svg"}
              alt="Project main showcase"
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image[0])}
            />
          </div>
          <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                alt={`Project gallery caca`}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image[1])}
              />
              <img
                src="/placeholder.svg"
                alt={`Project gallery caca`}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image[2])}
              />
          </div>
        </div>

        {/* Related Projects */}
        {/* <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">See also</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProjects.map((project, index) => (
              <a key={index} href={project.href}>
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                  <CardContent className="p-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <p className="text-sm text-gray-300">{project.title}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div> */}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl w-full p-1">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Expanded project image"
              className="w-full h-full object-contain"
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

