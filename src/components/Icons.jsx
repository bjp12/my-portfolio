import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

function Icons() {
    return (
        <section id="contact">
            <h2>Get In Touch</h2>
            <div className="contact-links">
                <a href="mailto:bijaljpatel12@gmail.com"><BiLogoGmail /></a>
                <a href="https://linkedin.com/in/bijaljpatel" target="_blank"><BiLogoLinkedin /></a>
                <a href="https://github.com/bjp12" target="_blank"><BiLogoGithub /></a>
            </div>
        </section>
    )
}

export default Icons