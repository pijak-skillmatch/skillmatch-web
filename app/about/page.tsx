import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassPanel from '@/components/ui/GlassPanel'

import MissionSection from '@/components/about/MissionSection'
import TeamSection from '@/components/about/TeamSection'
import TechStack from '@/components/about/TechStack'

import { teamMembers } from '@/lib/mockData'

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main className="relative overflow-hidden pt-28">
                {/* Background */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.10),transparent_70%)] blur-3xl" />

                    <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,156,255,0.10),transparent_70%)] blur-3xl" />
                </div>

                {/* HERO */}
                <section className="pb-24 md:pb-32">
                    <div className="container-custom">
                        <div className="mx-auto max-w-4xl text-center">
                            <div
                                className="
                  inline-flex items-center gap-2

                  rounded-full
                  border border-white/10
                  bg-white/5

                  px-4 py-2

                  text-xs font-semibold uppercase
                  tracking-[0.18em]
                  text-slate-300
                "
                            >
                                About SkillMatch AI
                            </div>

                            <h1
                                className="
                  mt-6

                  text-[clamp(3rem,7vw,5.8rem)]
                  font-bold
                  leading-[0.95]

                  tracking-tight
                  text-white
                "
                            >
                                Building smarter{' '}

                                <GradientText>
                                    career discovery
                                </GradientText>{' '}

                                for the future.
                            </h1>

                            <p
                                className="
                  mx-auto mt-8 max-w-3xl

                  text-lg leading-8
                  text-slate-400

                  md:text-xl
                "
                            >
                                SkillMatch AI is an AI-powered career recommendation platform
                                designed to help students and professionals understand
                                their strengths, explore opportunities, and make more
                                confident career decisions.
                            </p>

                            <div className="mt-10 flex justify-center">
                                <Button href="/analysis">
                                    Try AI Analysis
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MISSION */}
                <MissionSection />
                <TeamSection />
                <TechStack />
            </main>

            <Footer />
        </>
    )
}