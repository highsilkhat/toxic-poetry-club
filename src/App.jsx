import React from 'react'
import './index.css'

export default function App() {
    return (
        <main className="home">
            <div className="home__overlay" />
            <section className="home__content" role="region" aria-label="Hero">
                <h1>Toxic Poetry Club</h1>
                <p>Are you the Emily Dickinson of the Notes App?</p>

                <p>Do you read or write poetry?</p>

                <p>Do you want to hang out with people who do and possibly do so while drinking a beverage?</p>

                <p>Poetry Meetup @ Teku Tavern</p>

                <p>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=552+Denny+Way+Seattle+WA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        552 Denny Wy, Seattle (Belltown-ish)
                    </a>
                </p>
                <h2>Next Meeting:</h2>

                <h2>Sunday, December 7, 2025 @ 7 p.m.</h2>

                <h3>December's writing prompt: Infamy</h3>
            </section>
        </main>
    )
}