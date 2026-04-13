import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Events() {
    useDocumentTitle('Events');
    return (
        <section className="home__content" role="region" aria-label="Events">
            <h1>Events</h1>

            <article>
                <h2>When</h2>
                <p>First Sunday of the month (usually) at 7 p.m.</p>
            </article>

            <article>
                <h2>Where</h2>
                <address>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Teku+Tavern+Seattle+WA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Teku Tavern: 552 Denny Wy, Seattle (Belltown-ish)
                    </a>
                </address>
            </article>

        </section>
    )
}
