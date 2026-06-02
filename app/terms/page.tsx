import React from 'react'
import Button from '@/components/ui/Button'

export default function TermsPage() {
    return (<main className="container-custom py-32 text-white"> <div className="max-w-4xl mx-auto space-y-8"> 

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

        <h1 className="text-4xl font-bold">Terms and Conditions</h1> <p>Last Updated: June 2026</p>
        
        <section>
            <h2 className="text-2xl font-semibold mb-3">
                1. About SkillMatch AI
            </h2>
            <p>
                SkillMatch AI is an AI-powered career recommendation platform
                developed as a Capstone Project under the theme AI for Smart
                Recommendation Systems.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">
                2. Acceptance of Terms
            </h2>
            <p>
                By using SkillMatch AI, you acknowledge that you have read,
                understood, and agreed to these Terms and Conditions.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">
                3. User Responsibilities
            </h2>
            <ul className="list-disc ml-6">
                <li>Provide accurate information.</li>
                <li>Use the platform responsibly.</li>
                <li>Do not misuse the system.</li>
                <li>Respect intellectual property rights.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">
                4. AI Recommendation Disclaimer
            </h2>
            <p>
                Recommendations are informational only and do not constitute
                professional career counseling.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">
                5. Educational Project Notice
            </h2>
            <p>
                SkillMatch AI is developed as a Capstone Project for educational
                and research purposes.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p>Email: support@skillmatch-ai.com</p>
        </section>
    </div>
    </main>

)
}
