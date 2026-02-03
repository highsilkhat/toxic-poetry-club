import React from 'react'

export default function Home() {
    return (
        <section className="home__content" role="region" aria-label="Hero">
            <h1>Toxic Poetry Club</h1>

            <h3><i>Seattle's premier poetry club for the unpublished</i></h3>

            <h2>Next Meeting:</h2>

            <h3>Sunday, March 1, 2025 @ 7 p.m.</h3>

            <h3>March's writing prompt: Frustration</h3>

            <p>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Teku+Tavern+Seattle+WA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Teku Tavern: 552 Denny Wy, Seattle (Belltown-ish)
                </a>
            </p>

        </section>
    )
}
