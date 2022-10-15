//event details, in form of a expandable items in a carousel
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
const InfoSection = () => {
    const info = [{
        name: 'Esprit decode',
        liveVideo: '/cover-coding.mp4',
        description: `This event tests participants\' abilities to program solutions to the presented problems using Python or JavaScript. The event will have three non-parallel
        rounds which will test participants\' algorithmic abilities. In addition, there will be a Data Structure round which will run parallel to the other rounds. 
        The top 3 teams will be given a certificate of appreciation. The participants of the first team will be given individual trophies`,
        venue: "Senior Computer Lab",
        timing: 'The event will last for approximately 3 hours, without accounting for breaks. The first round will last for 30 minutes. The second round will last for an hour. The third round will last for an hour and thirty minutes. You will be allowed to work on questions from the previous round(s) and the Data Structure during the second and third rounds',
        tps: 1,
        participants: 2

    },
    {
        name: 'Photography',
        liveVideo: '/cover-photography.mp4',
        description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        teams: 16,
        tps: 5,
        players: 2,
        venue: "Lorem Ipsum",
        timing: '10:00 AM - 12:00 PM',
    },
    {
        name: 'Gaming Events',
        liveVideo: '/valorant-cover.mp4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        teams: 16,
        tps: 5,
        players: 2,
        venue: "Lorem Ipsum",
        timing: '10:00 AM - 12:00 PM',
    },
    {
        name: 'Cryptic Hunt',
        liveVideo: '/cover-cryptic.mp4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        teams: 16,
        tps: 5,
        players: 2,
        venue: "Lorem Ipsum",
        timing: '10:00 AM - 12:00 PM',
    },
    {
        name: 'Quiz',
        liveVideo: '/cover-coding.mp4',
        description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        teams: 16,
        tps: 5,
        players: 2,
        venue: "Lorem Ipsum",
        timing: '10:00 AM - 12:00 PM',
    },
    {
        name: 'Presentation',
        liveVideo: '/cover-coding.mp4',
        description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        teams: 16,
        tps: 5,
        players: 2,
        venue: "Lorem Ipsum",
        timing: '10:00 AM - 12:00 PM',
    }

    ]
    return (<div className="info-section">
        <h2>
            Event Details
        </h2>
        <input name="checkbox" className="info-section-each-checkbox" id='-1' type="radio" />

        <div className="info-section-content">

            {info.map((a, index) => {
                return (<div className="info-section-e" key={index}>

                    <video autoPlay muted loop src={a.liveVideo} className="info-section-e-cover" />
                    <input name="checkbox" className="info-section-each-checkbox" id={index} type="radio" />
                    <div className="info-section-each-modal">
                        <div className="info-section-each-modal-container">
                            <div className='info-section-each-modal-content-container'>

                                {/* <video autoPlay muted loop src={a.liveVideo} className="info-section-each-modal-content-cover" /> */}
                                <div className="info-section-each-modal-content">
                                    <label htmlFor="-1"><CloseIcon className='info-section-each-modal-content-icon' /></label>
                                    <h2>
                                        {a.name}
                                    </h2>
                                    <div className="info-section-each-modal-content-outer">

                                    <div className="info-section-each-modal-content-inner">
                                        <h3>
                                            Rules
                                        </h3>

                                        <ul className="info-section-modal-description">

                                            {a.description.split('.').map((a, index) => {
                                                return <li key={index}>{a}</li>
                                            })}
                                        </ul>
                                        <h3>
                                            Timings
                                        </h3>
                                        <ul className="info-section-modal-description">
                                            {a.timing.split('.').map((a, index) => {
                                                return <li key={index}>{a}</li>
                                            })}
                                        </ul>

                                        <tr><th><h3>Venue: </h3></th><td>{a.venue}</td></tr>


                                        <div>

                                            <tr><th>Players Per Team</th><td>{a.participants}</td></tr>

                                        </div>
                                    </div>
                                    
                                    </div>
                                    <Link href={'/register/' + a.name.split(' ').map((a, index) => {
                                        console.log(a)
                                        if (index === 1) {
                                            return '-' + a
                                        }
                                        else {
                                            return a
                                        }
                                    }).join('').toLowerCase()}>
                                        <span className="info-section-each-modal-register">Register</span>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                    <label className="info-section-each" htmlFor={index}>
                        <h3>
                            {a.name}
                        </h3>
                        <p className="info-section-description">
                            {a.description}
                        </p>
                        <h4 className="info-section-each-label" >

                            Click to Learn More

                        </h4>
                    </label>
                </div>)
            })}
        </div>
    </div >)
}

export default InfoSection;