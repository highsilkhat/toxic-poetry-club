import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Contact() {
    useDocumentTitle('Contact');
    return (
        <section className="home__content" role="region" aria-label="Contact">
            <h1>Contact</h1>
            <p>Just show up to the next meeting!</p>
        </section>
    )
}
