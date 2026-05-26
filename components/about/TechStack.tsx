import SectionHeader from '@/components/ui/SectionHeader'

const techStack = [
    'Next.js',
    'React',
    'Tailwind CSS',
    'TensorFlow',
    'Python',
    'Machine Learning',
    'TypeScript',
    'Node.js',
]

export default function TechStack() {
    return (
        <section className="pb-24 md:pb-32">
            <div className="container-custom">
                <SectionHeader
                    badge="Technology"
                    title="Powered by modern"
                    gradient="AI technologies"
                    description="
            Built using scalable frameworks, machine learning,
            and modern frontend engineering practices.
          "
                />

                <div className="mt-14 flex flex-wrap justify-center gap-4">
                    {techStack.map((tech) => (
                        <div
                            key={tech}

                            className="
                rounded-full

                border border-white/10
                bg-white/5

                px-5 py-3

                text-sm font-medium
                text-slate-300

                backdrop-blur-md

                transition-all duration-300

                hover:border-white/20
                hover:bg-white/10
              "
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}