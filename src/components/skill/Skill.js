
let skills=[
    {
        id:1,
        frame:"Figma",
        pimage:"https://i.ibb.co/tMLN5pF/f.png"
    },
    {
        id:2,
        frame:"git",
        pimage:"https://i.ibb.co/xhfqd01/git.png"
        

    },
    {
        id:3,
        frame:"React",
        pimage:"https://i.ibb.co/YbrnYZQ/react.png"
    },
    {
        id:4,
        frame:"JavaScript",
        pimage:"https://i.ibb.co/sVsVbRP/js.png"
    },
    {
        id:5,
        frame:"HTML",
        pimage:"https://i.ibb.co/ccLjRDb/Html.png"
    },
    {
        id:6,
        frame:"CSS",
        pimage:"https://i.ibb.co/Tt6HML1/css-2.png"
    },
    {
        id:7,
        frame:"Boostrap",
        pimage: "https://i.ibb.co/p2HsdZV/b.png"
    }
]

export function getAllStudy(){
    return skills;
}

export function getStudy(id){
    return skills.find((s)=> s.id===id);
}