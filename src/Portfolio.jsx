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
const majorProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("../src/asset/GLA.jpg"),
      projectName: "Tune-in",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "/"
        }
        
      ]
    },
    {
      image: require("../src/asset/GLA.jpg"),
      projectName: "hgsdhu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },{
      image: require("../src/asset/GLA.jpg"),
      projectName: "hgsdhu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },{
      image: require("../src/asset/GLA.jpg"),
      projectName: "hgsdhu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },{
      image: require("../src/asset/GLA.jpg"),
      projectName: "hgsdhu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "View Project",
          url: "http://nextu.se/"
        }
      ]
    },{
      image: require("../src/asset/GLA.jpg"),
      projectName: "hgsdhu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ]
};

const achievementSection={
  title:"Achievements & Certifications",
  subtitle:"",
  certificates:[
    {title:"Java Programming Masterclass",
    subtitle:"a 80 hr course on Java language",
    image:require("./asset/java_course.jpg"),
    footerLink:[
      {
        name:"view Certificate",
        url:"https://www.udemy.com/certificate/UC-d7f93a2e-ceb7-447e-bf2c-42ff50362f1f/"
      }
    ]

    },
    {title:"Web development bootcamp",
    subtitle:"a 80 hr course on Java language",
    image:require("./asset/angela-web.jpg"),
    footerLink:[
      {
        name:"view Certificate",
        url:"https://www.udemy.com/certificate/UC-fa506617-74a1-4935-a49e-e25425fc28a9/"
      }
    ]

    },
    {title:"Java Programming Masterclass",
    subtitle:"a 80 hr course on Java language",
    image:require("./asset/angela-web.jpg"),
    footerLink:[
      {
        name:"view Certificate",
        url:"/"
      }
    ]

    }
  ]
}


export {greeting,SocialMediaLinks,skills,educationInfo,majorProjects,achievementSection} ;