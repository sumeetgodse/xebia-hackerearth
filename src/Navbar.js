import React from 'react'
import { Link } from "react-router-dom"
import "./css/navbar.css"

export default function Navbar() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="blogs">Blogs</Link></li>
        </ul>
    )
}
