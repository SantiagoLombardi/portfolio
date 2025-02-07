import { Github, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:gap-12">
          {/* Name and Links Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Santiago Lombardi
            </h2>
            <div className="space-y-4">
              <a 
                href="https://github.com/SantiagoLombardi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              >
                <Github className="h-5 w-5" />
                <span className="text-lg">@SantiagoLombardi</span>
                <div className="h-px bg-zinc-700 flex-1" />
              </a>
              <a 
                href="mailto:Contacto@SantiagoLombardi.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5" />
                <span className="text-lg">Contacto@SantiagoLombardi.com</span>
                <div className="h-px bg-zinc-700 flex-1" />
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex items-center justify-between pt-8 border-t border-zinc-800">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">From Argentina to the World</span>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}