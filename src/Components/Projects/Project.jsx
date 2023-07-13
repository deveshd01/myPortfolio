import React from 'react'

export default function Project(p) {
    
    return (
        <div>
            <div>
                <h3>{p.project.projectName}</h3>
                <span>{p.project.startDate} - {p.project.endDate}</span>
            </div>
            <ul>
                {p.project.description.map((item, i) => {
                    return <li key={i}> {item} </li>
                })}
            </ul>
            teckStackUsed: {p.project.teckStackUsed.map((tech, i2) => { return <span key={i2}>{tech}, </span> })}
           <ul style={{ listStyleType: "none", display: "flex" }}>
                {p.project.links.map((link, ii) => (
                    <li key={ii}>
                        <a href={link.url}> {link.text} </a>
                    </li>
                ))}
            </ul> 
        </div>
    )
}
