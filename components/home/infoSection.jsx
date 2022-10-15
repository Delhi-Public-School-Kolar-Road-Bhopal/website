//event details, in form of a expandable items in a carousel
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
const InfoSection = () => {
    const info = [{
        name: 'Programming Events',
        liveVideo: '/cover-coding.mp4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        teams: 16,
        tps: 5,
        players: 2,
        venue: "Lorem Ipsum",
        timing: '10:00 AM - 12:00 PM',

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
                                    <h3>
                                        {a.name}
                                    </h3>

                                    <p className="info-section-modal-description">
                                        {a.description}
                                    </p>
                                    <table>
                                        <tbody>
                                            <tr><th>Teams Per School</th> <td>{a.tps}</td></tr>

                                            <tr><th>Players Per Team</th><td>{a.players}</td></tr>
                                            <tr><th>Total Teams</th><td>{a.teams}</td> </tr>
                                            <tr><th>Timing</th><td>{a.timing}</td></tr>
                                            <tr><th>Venue</th><td>{a.venue}</td></tr>

                                        </tbody>

                                    </table>
                                    <Link href='/register'>
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