import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return <h1 data-testid={"header"} title="Header" className="header">{title}</h1>
}
