'use client'

import { BlurFade } from "./magicui/blur-fade"

export default function Education() {
  const institutes = [
    {
      name: 'Instituto Secundario Juan Pascual Pringles',
      degree: 'Bachelor in Communication Sciences',
      duration: '2017 - 2022',
      image: 'pringles'
    },
    {
      name: 'CoderHouse',
      degree: 'App Development',
      duration: '2022 - 2023',
      image: 'coderhouse'
    },
    {
      name: 'Universidad Nacional de Río Cuarto',
      degree: 'Bachelor in Computer Science',
      duration: '2023 - Currently coursing',
      image: 'unrc'
    }
  ]

  return (
    <section className="bg-black py-20 px-16 max-sm:px-4 border-b">
      <div className="container mx-auto">
        <BlurFade delay={0.25} inView>
          <h2 className="text-6xl text-white font-black tracking-tighter mb-12">
            My Education
          </h2>
        </BlurFade>
        <div className="max-w-6xl mx-auto">
          <ul className="mb-4 ml-4 divide-y  border-l">
            {institutes.map((institute, index) => (
              <li className="relative ml-10 py-4" key={institute.name}>
                <BlurFade delay={0.25 * index} inView>
                  <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                      <img src={`/img/${institute.image}.png`} alt={`${institute.image} logo`} className="aspect-square h-full w-full object-contain" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-start gap-1 py-2">
                    <h3 className="font-semibold leading-none text-white">{institute.name}</h3>
                    <h3 className="font-semibold text-2xl leading-none text-white">{institute.degree}</h3>
                    <time className="text-xs text-muted-foreground">{institute.duration}</time>
                  </div>
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}