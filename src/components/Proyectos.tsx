export default function ProjectsSection() {
  const projects = [
    {
      title: "Jobs",
      description: "Web app made with React and Firebase",
      color: "bg-[#6B7AC4]",
      className: "col-span-1 row-span-1"
    },
    {
      title: "Jobs Mobile",
      description: "Mobile app made with React Native and Firebase",
      color: "bg-[#3B4374]",
      className: "col-span-2 row-span-1"
    },
    {
      title: "Nuevas Bases",
      description: "Landing page made with Astro, React, and Tailwind",
      color: "bg-[#D4B863]",
      className: "col-span-2 row-span-1 md:col-span-1"
    },
    {
      title: "Bases de datos",
      description: "Web app made with React, Firebase and Tailwind",
      color: "bg-[#9F7AEA]",
      className: "col-span-2 row-span-1"
    },
    {
      title: "Mesa Libre",
      description: "Multiplatform app made with React Native using geolocalization services and Firebase",
      color: "bg-[#C05D5D]",
      className: "col-span-2 row-span-1"
    }
  ]

  return (
    <section className="bg-gray-800 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-6xl font-black tracking-tighter mb-12">
          My projects
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.className} ${project.color} rounded-3xl p-6 transition-transform hover:scale-[1.02] group cursor-pointer`}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center text-sm text-white">
                    View project 
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}