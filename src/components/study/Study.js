
let studies=[
    {
        id:1,
        añoFin:"2022",
        carrera:"Digitación y procesamiento de datos con énfasis en Desarrollo Frontend",
        tipo:"Técnico",
        instituto:"Kuepa Edutech S.A.S"
    },
    {
        id:2,
        añoFin:"2021",
        carrera:"Aplicaciones Móviles",
        tipo:"Diplomado",
        instituto:"Universidad Tecnológica de Pereira (Mintic)"
        

    },
    {
        id:3,
        añoFin:"2021",
        carrera:"Arquitectura de Computo",
        tipo:"Curso",
        instituto:"Servicio Nacional de Aprendizaje"
        
    },
    {
        id:4,
        añoFin:"2020",
        carrera:"Excel Básico",
        tipo:"Curso",
        instituto:"Servicio Nacional de Aprendizaje"
    },
    {
        id:5,
        añoFin:"2020",
        carrera:"Desarrollo web con php",
        tipo:"Curso",
        instituto:"Servicio Nacional de Aprendizaje"
    }
]

export function getAllStudy(){
    return studies;
}

export function getStudy(id){
    return studies.find((s)=> s.id===id);
}