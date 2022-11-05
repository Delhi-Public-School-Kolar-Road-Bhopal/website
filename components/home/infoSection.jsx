//event details, in form of a expandable items in a carousel
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
const InfoSection = () => {
    const info = [{
        name: 'Esprit decode',
        liveVideo: '/cover-coding.mp4',
        description: `Participants will be allowed to refer to documentation; however, copying code would be strictly prohibited.
        The students are allowed to use JS/python; No additional libraries, modules, or frameworks will be allowed.
        There will be 4 levels—Round #1, Round #2, Round #3, and the data structure round. the data structure round will run parallel to the other rounds.
        The questions in the first round will carry 10 scores each, the ones in the second round and the data structures round will carry 20 scores each, and the ones in the third round will carry 30 scores each. There will be an opportunity to gain bonus scores.
        Awards and separate certificates of recognition will be given to participants who’d be ranked #1, #2, and #3, as well as participants with outstanding programming knowledge who, for some reason, couldn’t be allocated any of the aforementioned ranks
        `,
        venue: "Senior Computer Lab",
        timing: 'The event will last for approximately 3 hours, without accounting for breaks. The first round will last for 30 minutes. The second round will last for an hour. The third round will last for an hour and thirty minutes. You will be allowed to work on questions from the previous round(s) and the Data Structure during the second and third rounds',
        tps: 1,
        participants: 2

    },
    {
        name: 'Photo Perfecta',
        liveVideo: '/cover-photography.mp4',
        description: `
        This is an online event.
        This is an individual event.
        The participants have to submit their photographs online on the provided google form.
        The theme will be provided on 13th november. The photograph has to be clicked between 13-15 November.
        The last date and time for submission is 15th november 2022, 23:59:59.
        Each participant has to send 2 photographs; 1 photograph for each theme.
        Participants have to attach their raw image(if any).
        Participants need to provide the Exif(Exchangeable Image File Format) details along with each of their entries.
        Any type of Manipulation is not allowed however basic post-processing will be considered.
        Participants have to upload their original work
        `,
        venue: "Online",
        timing: 'The participants will be given one week to submit their photographs. The last date for submission is 3rd November 2022',
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
        The OC will always have the final say on any matter. Contact an OC member to resolve any disputes.
        Having any form of conversation or mutual understanding that results in the predetermination of a match’s result would lead to immediate disqualification.
        Players are required to play using their registered Riot Id.
        It is advised that players take screenshots of game scores.
        Only 3 timeouts are allowed—1 before the half, 1 after the half and in overtime.
        If a technical problem arises 10min timeout will be given.
        Coaches are not allowed
        `,
        venue: "Online",
        timing: "As per the Brackets",
        tps: 1,
        participants: "6(5 players + 1 substitute)"
    },
    {
        name: 'Filmskaping',
        liveVideo: '/cover-cryptic.mp4',
        description: `Each Team should comprise of 2 members.
        If a team is caught Plagiarizing, it would be immediately disqualified.
        The topic will be provided on the spot.
        The video should be uploaded to a specific youtube channel with a Uniquely identifiable description which will be provided to each team .
        The Video's length should not exceed 5 minutes.
        Participants have to record the video in our school.
        Participants will be given 1 hour to record the video.
        1hr 30min will be given for editing the video.
        A tour of the school will be provided`,
        venue: "School Premises and Middle Computer Lab",
        timing: 'The event will last for approximately 2 hours and 30 minutes, without accounting for breaks',
        tps: 1,
        participants: 2
    },
    {
        name: 'Scio',
        liveVideo: '/cover-coding.mp4',
        description: `
        The quiz will be conducted in 2 parts: A written preliminary and the main quiz.
        The top 6 teams on the basis of preliminary marks would qualify for the main quiz.
        The quizmaster’s decision would be final and binding.
        Participants to prepare current affairs and general awareness related to IT, history of companies, and  their products
        `,
        venue: "Magnum Opus",
        timing: 'The event will last for approximately 3 hours',
        tps: 1,
        participants: 2
    },
    {
        name: 'Site Incroyable',
        liveVideo: '/cover-coding.mp4',
        description: `Participants will be allowed to refer to documentation but copying code is strictly prohibited.
        The Participants will be given an additional 30 minutes to gather resources from the internet.
        The website could be made using REACT, Angular, Vue, or vanilla HTML + JS/TS + CSS.
        For using any additional frameworks or libraries, permission from the organizing team will be required.
        The topic of the event will be Declared on the spot
        `,
        venue: "Middle Computer Lab",
        timing: 'The event will last for approximately 3 hours',
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