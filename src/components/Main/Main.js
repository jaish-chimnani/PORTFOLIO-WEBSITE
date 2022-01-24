import Header from "../Header/Header"
import Greeting from "../Greeting/Greeting"
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Achievements from "../Achievements/Achievements"
import Contact from "../Contact/Contact"
const Main=()=>{
    /* Storing user's device details in a variable*/
    let details = navigator.userAgent;
  
    /* Creating a regular expression 
    containing some mobile devices keywords 
    to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;

    /* Using test() method to search regexp in details
    it returns boolean value*/
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
        // document.write("You are using a Mobile Device");
        return (<h1>USE DESKTOP TO VIEW SITE</h1>)
    } else {
        // document.write("You are using Desktop");
    return (
        <div>


        <Header/>
        <Greeting/>
        <Skills/>
        <Education/>
        <Projects/>
        <Achievements/>
        <Contact/>
        </div>
    )
}
}

export default Main;