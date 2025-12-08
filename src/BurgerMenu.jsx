import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './BurgerMenu.css'

export default function BurgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            {/* Burger Menu Button */}
            <button
                className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Navigation Menu */}
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={handleMenuClick}>Home</Link></li>
                    <li><Link to="/about" onClick={handleMenuClick}>About</Link></li>
                    <li><Link to="/events" onClick={handleMenuClick}>Events</Link></li>
                    <li><Link to="/contact" onClick={handleMenuClick}>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}
