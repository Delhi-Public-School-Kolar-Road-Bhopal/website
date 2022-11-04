/* eslint-disable @next/next/no-img-element */
import React from 'react';

const organizers = [{
    name: 'Aadya Singh',
    core: true,
    designation: "Language Marshal",
    contactNumber: '+91 70002 36817',
    email: "",
    profile: 'Aadya is known for doing absolutely everything they can get their hands on, this is reflected in their portfolio. They’ve collaborated with multiple youth run non-profits to spread awareness as well as crowdfund. They’ve managed the social media page for a local renowned handicraft store. They are a published poet that’s always looking for an excuse to bring it up in a conversation.They are a self starter with the experience of organising multiple experiences.In their spare time you can find them snuggled in a corner with their cats reading Donna Tartt or some obscure contemporary poet. A sure way to get them to pay attention to you would be to start a debate on acrylic v. oil paint. They are the most approachable of the bunch(you are encouraged to reach out to them for absolutely anything you need or want). Their love for all things cheesy and sappy overwhelms their work.',

    image: ""
},
{
    name: 'Angad Singh Bains',
    core: true,
    designation: "Core Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
    name: 'Test name',
    designation: "Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
    name: 'Shreshth Verma',
    designation: "Core Organizer",

    profile: 'A perpetual student, an entrepreneur, and an Experienced Full Stack Developer with a demonstrated history of working in the industry. Skilled in HTML, Front-end Development, Cascading Style Sheets (CSS), MongoDB, Node.js, Express.js, React, and JavaScript. Currently pursuing a High School Diploma focused in PCM + IP from Delhi Public School, Kolar Road, Bhopal.Despite being in grade 12th, Shreshth has extensive work experience  as a full stack developer: he worked at a MNC for over an year and at a small business for nearly 4 months, as a MERN Stack + blockchain developer. Shreshth is the cyberdirector of the DPS Kolar student council and the president of the technoclub. He conceptualized the key idea behind the Extra Quadrata tech fest. ',
    core:true,
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"

}
    ,
{
    name: 'Angad Singh Bains',
    designation: "Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
    name: 'Angad Singh Bains',
    designation: "Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},

{
    name: 'Vyomesh Khare',
    designation: "Core Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
}
    ,
{
    name: 'Angad Singh Bains',
    designation: "Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
}
    ,
{
    name: 'Angad Singh Bains',
    designation: "Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
    name: 'Angad Singh Bains',
    designation: "Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
    name: 'Angad Singh Bains',
    designation: "Core Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
    name: 'Angad Singh Bains',
    designation: "Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
    name: 'Angad Singh Bains',
    designation: "Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
    name: 'Angad Singh Bains',
    designation: "Organizer",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: "https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
}
]
const About = () => {
    return (<div className="about">
        <div className="about-video">

            <h2 className="about-title">ABOUT <br /><br /> US</h2>
            <video autoPlay loop muted src='/cover.mp4' />
        </div>
        <div className='about-container'>


            <p className="about-description">
                “Technology like art is a soaring exercise of the human imagination.” To be steady with our motion of development, it is vital for the youth to grasp every facet of technology and innovation.
                DPS Kolar Road has taken an initiative to contribute to this field. Extraquadrata would be our very first annual tech meet up hosted by and for high schoolers which will be held on the 14th of November.
                Our competitions would test the participant’s creativity and logical thinking to response time and sheer skill for tech savvies and people who crave to be.
            </p>
            <h3 className="about-header">Core Organizers</h3>
            <div className='about-organizers'>
                {organizers.filter(a => a.core).map((organizer, index) => {

                    return (<div className='about-organizers-each' style={{ gridColumnStart: 'span 2' }} key={index}>
                        <div className='about-organizers-each-header'>

                            <p className='about-organizers-each-profile'>{organizer.profile}</p>
                            <div className='about-organizers-each-designation'>

                                <img className='about-organizers-each-image' src={organizer.image} alt={organizer.name + "picture"} />
                                <div>
                                    <h4 className='about-organizers-each-name'>{organizer.name}</h4>
                                    <p className='about-organizers-each-profile'>{organizer.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </div>

            <h3 className="about-header">Organizers</h3>
            <div className='about-organizers'>
                {organizers.filter(a => a.designation === "Organizer").map((organizer, index) => {

                    return (<div className='about-organizers-each' style={organizer.designation === "Core Organizer" ? { gridColumnStart: 'span 2' } : null} key={index}>

                        <div className='about-organizers-each-center'> <img className='about-organizers-each-image-center' src={organizer.image} alt={organizer.name + "picture"} />
                        </div>
                        <div className='about-organizers-each-header'>

                            <p className='about-organizers-each-profile'>{organizer.profile}</p>
                            <h4 className='about-organizers-each-name'>{organizer.name}</h4>

                            <p className='about-organizers-each-profile'>{organizer.designation}</p>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </div>)
}

export default About;