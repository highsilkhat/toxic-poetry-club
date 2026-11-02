import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Home() {
    useDocumentTitle(); // Uses default title
    return (
        <section className="home__content" role="region" aria-label="Hero">
            <h1>Toxic Poetry Club</h1>

            <p className="home__subtitle"><i>Seattle's premier poetry club for the unpublished</i></p>

            <h2>Next Meeting:</h2>

            <p className="home__meeting-time">Sunday, December 6, 2026 @ 7 p.m.</p>

            <p className="home__writing-prompt">December's writing prompt: <strong>Sonnet (any versions)</strong></p>

            <address>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Teku+Tavern+Seattle+WA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Teku Tavern: 552 Denny Wy, Seattle (Belltown-ish)
                </a>
            </address>

        </section>
    )
}
