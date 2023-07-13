import React from 'react'
import Project from './Project';

export default function ExperienceList() {
    let allExperience = [
        {
            companyName: "Software Developer Intern",
            jobRole: " Pratiti Technologies",
            duration: "5 Months",
            project: {
                projectName: "Krushelligent: A sustainable App for Farmers",
                description: ["Developed android app with features Plant leaf Disease detection and cure suggestion, Weather forecasting",
                    "Used CNN and Transfer learning on Resnet 152v2 model to Detect Plant disease from the Images of plant leaf"
                ],
                teckStackUsed: ["React Native", "Django", "PostgreSQL", "CNN", "Transfer Learning"],
                links: [{ text: "Research Paper", url: "#" }, { text: "Deployment_Link", url: "#" }]
            }
        }
    ];


    return (
        <div>
            {allExperience.map((E, index) => {
                return (
                    <>
                        <h1>{E.jobRole} | {E.companyName} </h1>
                        <p>{E.duration}</p>
                        <Project project={E.project} key={index} />
                    </>
                )
            })}

        </div>
    )
}
