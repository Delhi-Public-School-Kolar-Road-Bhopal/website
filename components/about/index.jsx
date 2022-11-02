/* eslint-disable @next/next/no-img-element */
import React from 'react';

const organizers = [{
    name: 'Anirudh Nagrajan',
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
    name: 'Shreshth Verma',
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
                {organizers.filter(a => a.designation === "Core Organizer").map((organizer, index) => {

                    return (<div className='about-organizers-each' style={organizer.designation === "Core Organizer" ? { gridColumnStart: 'span 2' } : null} key={index}>

                        <img className='about-organizers-each-image' src={organizer.image} alt={organizer.name + "picture"} />
                        <div className='about-organizers-each-header'>

                            <p className='about-organizers-each-profile'>{organizer.profile}</p>
                            <h4 className='about-organizers-each-name'>{organizer.name}</h4>

                            <p className='about-organizers-each-profile'>{organizer.designation}</p>
                        </div>
                    </div>)
                })}
            </div>

            <h3 className="about-header">Organizers</h3>
            <div className='about-organizers'>
                {organizers.filter(a => a.designation === "Organizer").map((organizer, index) => {

                    return (<div className='about-organizers-each' style={organizer.designation === "Core Organizer" ? { gridColumnStart: 'span 2' } : null} key={index}>

                        <img className='about-organizers-each-image' src={organizer.image} alt={organizer.name + "picture"} />
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