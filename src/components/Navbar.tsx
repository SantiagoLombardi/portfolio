import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from 'lucide-react'

const styles = {
  a: "text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.remove('light')
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //     document.documentElement.classList.add('light')
  //   }
  // }, [isDarkMode])

  return (
    <header className="sticky top-0 z-50 bg-black/80  backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="default" >
              Santiago
              {/* {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />} */}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden " onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="text-white hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="text-white hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-500 transition-colors">Contact</a>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-background/80 dark:bg-zinc-900/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <a href="#about" className="text-white hover:text-blue-500 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#skills" className="text-white hover:text-blue-500 transition-colors" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="text-white hover:text-blue-500 transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="text-white hover:text-blue-500 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </header>
  );
};

export default Navbar;
