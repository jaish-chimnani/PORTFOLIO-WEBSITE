import emoji from "react-easy-emoji";

const greeting ={
    name:"Jaish Chimnani",
    title:"Hi Everyone , I'm Jaish",
    subtitle: emoji(
        "A FullStack Developer having an experience of building web applications with Javascript , NodeJS , ReactJS and some other cool libraries and frameworks."
    ), resumeLink:"",displayGreeting:true
};

const socialMeadiaLinks= {
    github: "",
    facebook:"k",
    linkedin:"",
    gmail:"",
    display:true
};

const skillsSection={
    title:"My Skills",
    text:"Notice the use of %PUBLIC_URL% in the tags above.It will be",
    skills:[
    emogi("Notice the use of %PUBLIC_URL% in the tags above.It will be"),
    emoji("Notice the use of %PUBLIC_URL% in the tags above.It will be"),
    emoji("Notice the use of %PUBLIC_URL% in the tags above.It will be")
    ],
    softwareSection:[
        {
            skillName:"HTML-5",
            skillIcon:"fab fa-html5"
        },
        {
            skillName:"CSS-3",
            skillIcon:"fab fa-css5-alt"
        },
        {
            skillName:"sass",
            skillIcon:"fab fa-sass"
        },
        {
            skillName:"JavaScript",
            skillIcon:"fab fa-js"
        },
        {
            skillName:"ReactJS",
            skillIcon:"fab fa-react"
        },
        {
            skillName:"NodeJS",
            skillIcon:"fab fa-node"
        },
        {
            skillName:"sql-Database",
            skillIcon:"fas fa-database"
        },
        {
            skillName:"firebase",
            skillIcon:"fas fa-fire"
        }
        
    ],
    display:true
};

const educationInfo={
    display:true,
    schools:[
        {
            schoolName:"Kids Corner Happy Sr. Sec. School",
            logo:require(""),
            subHeader:"",
            duration:"",
            desc:"",
            descBullets:[
                "",
                ""
            ]
            
        },
        {
                    schoolName:"",
                    logo:require(""),
                    subHeader:"",
                    duration:"",
                    desc:"",
                    descBullets:[
                        "",
                        ""
                    ]
                    
                }

    ]
}


export {greeting};