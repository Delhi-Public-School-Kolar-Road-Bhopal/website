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
        name: 'Foto Perfecta',
        liveVideo: '/cover-photography.mp4',
        description: `This is an online event.
        This is an individual event.
        The participants will have to submit their photographs online on the provided google form.
        Each participant will have to send 2 photographs; 1 photograph for each theme.
        Participants have to attach their raw image(if any) and unedited photograph for each of their entries else their submissions will not be considered.
        Participants need to provide the EXIF details along with each of their entries.
        Manipulation is not allowed, but basic post-processing such as exposure correction, contrast adjustments, and color enhancement is allowed.
        Removal of any object from the photograph is strictly prohibited.
        Participants have to upload their original work only.

        `,
        venue: "Online",
        timing: 'The participants will be given one week to submit their photographs. The last date for submission is 3rd November 2022.',
        tps: 2,
        participants: 1
    },
    {
        name: 'Parabellum',
        liveVideo: '/valorant-cover.mp4',
        description: `
        All matches will be held online.
        Playoffs will be Best of 1 and Semi-finals and Finals will be best of 3 and 5 respectively.
        By participating, players agree that their Riot account is visible to third parties.
        The OC will always have the final say on any matter. Contact an OC member to resolve any dispute.
        Having any form of conversation or mutual understanding that results in the predetermination of a match’s or a round’s result would lead to immediate disqualification.
        Players will be required to play using their registered riot id.
        It is advised that players take screenshots of game scores.
        only 3 timeouts will be allowed.1 before the half, 1 after the half and 1 in overtime.
        If a technical problem arises 10 min timeout will be given.
        Coaches will be allowed only if both teams have them
        `,
        venue: "Online",
        timing: "Flexible",
        tps: 1,
        participants: "6(5 players + 1 substitute)"
    },
    {
        name: 'Filmskaping',
        liveVideo: '/cover-cryptic.mp4',
        description: `Each Team can have up to 2 participants.
        If a team is caught Plagiarizing, it would be immediately disqualified.
        The topic will be provided on the Event date.
        The video should be uploaded to youtube with a Uniquely identifiable description which will be provided to each team before the submission date.
        The Video's length should not exceed 5 minutes.

        The top 3 teams will be given a certificate of appreciation. The participants of the first team will be given individual trophies`,
        venue: "Junior Computer Lab",
        timing: 'The event will last for approximately 3 hours, without accounting for breaks.',
        tps: 1,
        participants: 2
    },
    {
        name: 'Scio',
        liveVideo: '/cover-coding.mp4',
        description: `
        The quiz will be conducted in 2 rounds: A written preliminary and the main quiz. Rules for the above will be shared on the spot.
        The top 6 teams on the basis of preliminary marks would qualify for the main quiz.
        In case there is a tie, rules for the tie breaker would be announced on spot.
        The quizmaster’s decision would be final and binding.
        Participants to prepare current affairs and general awareness related to IT, history of companies and  their products.
        The top 3 teams will be given a certificate of appreciation. The participants of the first team will be given individual trophies`,
        venue: "Magnum Opus",
        timing: 'The event will last for approximately 3 hours',
        tps: 1,
        participants: 2
    },
    {
        name: 'Site Incroyable',
        liveVideo: '/cover-coding.mp4',
        description: `This event tests participants\' abilities to create fast, efficient, optimized, and glamorous website. The event will have just a single round.  The Participants will be given an additional 30 minutes to gather resources from the internet.
        The website could be made using REACT, Angular, Vue, or vanilla HTML + JS/TS + CSS.
        for using any additional frameworks or libraries, permission from the organizing team will be required.
        The topic of the event will be mentioned on the spot.
        The top 3 teams will be given a certificate of appreciation. The participants of the first team will be given individual trophies.
       
        `,
        venue: "Middle Computer Lab",
        timing: 'The event will last for approximately 4 hours.',
        tps: 1,
        participants: 2
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