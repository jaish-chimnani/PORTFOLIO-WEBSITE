const greeting ={
    name:"Jaish Chimnani",
    title:"Hii Everyone I am Jaish",
    subtitle:"Every person has their own unique profile.\n"+
    "Here is a glimpse to mine.I'm a Full-stack Developer from Mathura,\nUttar Pradesh.\nI aim to make a difference through my creative solution.",
    resumeLink:""
};

const SocialMediaLinks={
    github:"/",
    linkedin:"/",
    gmail:"",
    facebook:"",


}

const skills={
    title:"My Skills",
    subtitle:"Crazy Developer who wants to explore new tech",
    skills:[
        "⭐ Develop highly interactive front-end/ User Interfaces for your web and mobile applications",
        "⭐ Progressive Web Applications ( PWA ) in normal and SPA Stacks ",
        "⭐ Integration of third party services such as Firebase/ AWS / Digital Ocean "
    ],
    softwareSkills: [
        {
          skillName: "html-5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          skillName: "sass",
          fontAwesomeClassname: "fab fa-sass"
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "fab fa-node"
        },
        {
          skillName: "swift",
          fontAwesomeClassname: "fab fa-swift"
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm"
        },
        {
          skillName: "sql-database",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "firebase",
          fontAwesomeClassname: "fas fa-fire"
        },
        {
          skillName: "python",
          fontAwesomeClassname: "fab fa-python"
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "fab fa-docker"
        }
      ]
}

const educationInfo={
  a:[1,2,3,4,5],
  schools:[
    {
      schoolName:"Kids Corner Happy Sr. Sec School",
      logo:require("../src/asset/kchsss.png"),
      subtitle:"Intermediate & High School",
      duration:"Aug 2016 - Mar 2019",
      subdes:[
        

          "High School: 8.6 CGPA",
          "intermediate: 78%"
        
      ]
    },
    {
      schoolName:"GLA University Mathura",
      logo:require("../src/asset/GLA.jpg"),
      subtitle:"Bachleor of Technology in Computer Science and Engineering",
      duration:"Aug 2019 - May 2023",
      subdes:[
        
          "CPI : 8.4"
        
      ]
    }
  ]
}
const num={
  arr:[1,2,4,5]
}

export {greeting,SocialMediaLinks,skills,educationInfo,num} ;