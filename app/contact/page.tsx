import React from 'react'
import Button from '@/components/ui/Button'

export default function ContactPage() {
    return (<main className="container-custom py-32 text-white"> <div className="max-w-4xl mx-auto"> 

        <Button href="/" variant="icon" className="mb-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-6 w-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <p className="mb-6">
            We would love to hear from you. Whether you have questions,
            feedback, suggestions, or encounter technical issues while using
            SkillMatch AI, please feel free to contact us.
        </p>

        <div className="space-y-8">
            <section>
                <h2 className="text-2xl font-semibold mb-2">
                    General Inquiries
                </h2>
                <p>support@skillmatch-ai.com</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">
                    Technical Support
                </h2>
                <p>
                    Contact us regarding system errors, recommendation issues,
                    submission problems, or technical difficulties.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">
                    Feedback & Suggestions
                </h2>
                <p>
                    We welcome feedback to improve recommendation accuracy,
                    user experience, and AI model performance.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">
                    About the Project
                </h2>
                <p>
                    SkillMatch AI utilizes machine learning and profile similarity
                    approaches to recommend career paths based on education,
                    specialization, skills, certifications, and CGPA.
                </p>
            </section>
        </div>
    </div>
    </main>

    )
}
