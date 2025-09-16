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

                <p>552 Denny Wy, Seattle (Belltown-ish)</p>

                <h2>Next Meeting:</h2>

                <h2>Sunday, October 5, 2025 @ 7 p.m.</h2>
            </section>
        </main>
    )
}