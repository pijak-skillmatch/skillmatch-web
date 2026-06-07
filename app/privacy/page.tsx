import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import Button from '@/components/ui/Button'

export default function PrivacyPage() {
    return (<main className="container-custom py-32 text-white"> <div className="max-w-4xl mx-auto space-y-8"> 

        <Button href="/" variant="icon" className="mb-8">
            <FiArrowLeft className="h-6 w-6" />
        </Button>

        <h1 className="text-4xl font-bold">Privacy Policy</h1> <p>Last Updated: June 2026</p>
        
        <p>
            Welcome to SkillMatch AI. SkillMatch AI is an AI-powered career
            recommendation platform developed as a Capstone Project under the
            theme AI for Smart Recommendation Systems.
        </p>

        <section>
            <h2 className="text-2xl font-semibold mb-3">
                1. Information We Collect
            </h2>

            <h3 className="font-semibold">Profile Information</h3>
            <ul className="list-disc ml-6">
                <li>Education Level</li>
                <li>Specialization</li>
                <li>Skills</li>
                <li>Certifications</li>
                <li>Academic Performance (CGPA)</li>
            </ul>

            <h3 className="font-semibold mt-4">Technical Information</h3>
            <ul className="list-disc ml-6">
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Usage logs and analytics</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">
                2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6">
                <li>Generate personalized career recommendations.</li>
                <li>Calculate career similarity and match scores.</li>
                <li>Improve recommendation quality.</li>
                <li>Research and evaluation purposes.</li>
                <li>Platform security and monitoring.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">3. AI Recommendation Process</h2>
            <p>
                Recommendations are generated using machine learning and profile
                similarity techniques based on education, specialization, skills,
                certifications, and CGPA.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Protection</h2>
            <p>
                We implement reasonable technical and organizational measures to
                protect user information.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-3">5. Contact Us</h2>
            <p>Email: support@skillmatch-ai.com</p>
        </section>
    </div>
    </main>

)
}
