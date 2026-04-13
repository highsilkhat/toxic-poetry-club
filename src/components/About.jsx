import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function About() {
    useDocumentTitle('About Us');
    return (
        <section className="home__content" role="region" aria-label="About">
            <h1>About Us</h1>

            <p>
                We aspire to be constructively toxic—dissolving those barriers of institution,
                of limits, the things that would hold us back from speaking the truths of the universe—
                all while rejecting hate speech, racism, misogyny, transphobia and those tools used
                by oppressors everywhere out of fear of their own smallness.
            </p>

        </section>
    )
}
