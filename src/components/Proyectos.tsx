import { BlurFade } from "./magicui/blur-fade"

type Project = {
  data: {
    title: string;
    description: string;
    className: string;
  },
  slug: string;
};


export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="bg-black py-20 px-16 max-sm:px-4 border-b">
      {/* <AlertDialog> */}
        <div className="container mx-auto">
          <BlurFade delay={0.25} inView>
            <h2 className="text-6xl font-black text-white tracking-tighter mb-12">
              My projects
            </h2>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <div className="grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-4 gap-4 ">
              {projects.map((project, index) => (
                <a href={`/project/${project.slug}`} className={`${project.data.className}`} key={index}>
                  <div
                    className={`border rounded-xl p-6 transition-transform hover:scale-[1.02] group cursor-pointer hover:border-blue-500 transition-colors`}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {project.data.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          {project.data.description}
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
                </a>
              ))}
            </div>
          </BlurFade>
        </div>
    </section>
  )
}