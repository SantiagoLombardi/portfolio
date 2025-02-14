import { Badge } from "./ui/badge";
import { MoveLeft } from 'lucide-react';

export default function Project() {

  return (
    <div className="h-[100dvh]  bg-black text-gray-100 transition-colors duration-300 border-b">
      <div className="max-w-4xl pt-8 mx-auto">
        <MoveLeft/>
        <p> breadcrum</p>
        <h1 className="text-5xl font-bold my-4">Project Name</h1>
        <div className="flex space-x-2">
          <p>Made with:</p>
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Astro</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Shadcn</Badge>
          <Badge>Motion</Badge>
        </div>
      </div>
    </div>
  )
}