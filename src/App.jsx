import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import Home from './Home'
import About from './About'
import Events from './Events'
import Contact from './Contact'
import './index.css'
import './App.css'

export default function App() {
    return (
        <Router>
            <main className="home">
                <div className="home__overlay" />
                <BurgerMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    )
}