
let projects=[
    {
        id:1,
        institucion:"Fundación Soy Luz de Vida",
        framework: "React, CSS, HTML y Javascript",
        añoFin:"2022",
        titulo:"Práctica con Organización social",
        pimage:"https://i.ibb.co/G20XLfY/Group-2.png",
        url: "https://ruthline.github.io/soyluzdevidaf/"
    },
    {
        id:2,
        institucion:"Colegio San Patricio",
        framework: "React, CSS, HTML y Javascript",
        añoFin:"2022",
        titulo:"Práctica Teorica",
        pimage:"https://i.ibb.co/KKcPznc/Group-171.png",
        url: "https://ruthline.github.io/steam-home/"
        

    },
    {
        id:3,
        institucion:"Forja",
        framework: " CSS, HTML y Javascript",
        añoFin:"2022",
        titulo:"Proyectos Kuepa (Ejercicios)",
        pimage:"https://i.ibb.co/DLCpxJ6/Logos-01-1-1.png",
        url: "https://ruthline.github.io/PROYECTO-FORJA/"
        
    },
    {
        id:4,
        institucion:"Animalandia",
        framework: "Boostrap",
        añoFin:"2022",
        titulo:"Proyectos Kuepa (Ejercicios)",
        pimage: "https://i.ibb.co/LdbccnJ/logo-removebg-preview.png",
        url: "https://ruthline.github.io/Animalandia-Bootstrap/"
    },
    {
        id:5,
        institucion:"Adoptino",
        framework: "Vuejs y Java",
        añoFin:"2021",
        titulo:"App móvil MinTic (Ejercicios)",
        pimage:"https://i.ibb.co/KbsNxQY/adoptino.png",
        url:"https://github.com/Ruthline/ADOPTINOG8E1.git"
    }
]

export function getAllStudy(){
    return projects;
}

export function getStudy(id){
    return projects.find((s)=> s.id===id);
}