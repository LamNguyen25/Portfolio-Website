import React from 'react';
import '../assets/sass/style.scss';
import '../assets/sass/about.scss';

const About = () => {
    const skills = ['Java', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'React Native', 'HTML & (S)CSS', 'jQuery', 'Git'];

    return (
        <section id="about" className="wrapper sec-1" data-scroll-section>
            <div data-splitting className="title headline--ghost">About Me</div>
            <div className="inner">
                <div className="intro-bio">
                    <p>Hello! I'm Lam, a software engineer based in Los Angeles, CA. </p>
                    <p> I am a fast learner with a strong work ethic in a team or individual 
                        setting to drive product success and process efficiency!
                    </p>
                </div>
                <div className="skills">
                    <div>
                        <p>Here are a few technologies I've been working with recently:</p>
                    </div>
                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>

                </div>
            </div>
        </section>
    )

}

export default About;