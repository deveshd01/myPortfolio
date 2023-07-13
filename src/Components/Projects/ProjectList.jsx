import React from 'react'

export default function ProjectList() {
    allProject = [
        {
            projectName : "Krushelligent: A sustainable App for Farmers",
            startDate: "sept 21",
            endDate: "Nov 21",
            description : ["Developed android app with features Plant leaf Disease detection and cure suggestion, Weather forecasting",
                            "Used CNN and Transfer learning on Resnet 152v2 model to Detect Plant disease from the Images of plant leaf"            
                          ],
            teckStackUsed : ["React Native", "Django", "PostgreSQL", "CNN", "Transfer Learning"],
            links: [{text:"Research Paper", url:"#"},{text:"Deployment_Link", url:"#"}]
        },
        {
            projectName : "22Krushelligent: A sustainable App for Farmers",
            startDate: "22sept 21",
            endDate: "22Nov 21",
            description : ["22Developed android app with features Plant leaf Disease detection and cure suggestion, Weather forecasting",
                            "22Used CNN and Transfer learning on Resnet 152v2 model to Detect Plant disease from the Images of plant leaf"            
                          ],
            teckStackUsed : ["22React Native", "22Django", "22PostgreSQL", "CNN", "Transfer Learning"],
            links: [{text:"22Research Paper", url:"#"},{text:"222Deployment_Link", url:"#"}]
        }
    ]
        
    
  return (
    <div>
      
    </div>
  )
}
