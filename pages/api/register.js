import Registration from '../../models/registration';
import Team from '../../models/team';
import Member from '../../models/member';
import {
    checkRegistration,
    verifyEmail
} from '../../utils/emails';
import {
    v4 as uuid
} from 'uuid';
import Verify from '../../models/verify';
import connect from '../../utils/mongoDBConnector';

const Handler = async (req, res) => {
    const {
        school,
        event,
        teamName,
        members
    } = req.body;
    try {


        await connect();
        if (req.method === "POST") {

            switch (event) {
                case "Esprit Decode":
                    if (members.length !== 2) {
                        return res.status(400).json({
                            error: "Esprit Decode requires exactly 2 members"
                        })
                    }
                    break;
                case "Parabellum":
                    if (members.length !== 6) {
                        return res.status(400).json({
                            error: "Parabellum requires exactly 6 members"
                        })
                    }
                    break;
                case "Photo Perfecta":
                    if (members.length !== 1) {
                        return res.status(400).json({
                            error: "Photo Perfecta requires exactly 1 member"
                        })
                    }
                    break;
                case "Filmskaping":
                    if (members.length !== 2) {
                        return res.status(400).json({
                            error: "Filmskaping requires exactly 2 members"
                        })
                    }
                    break;
                case "Site Incroyable":
                    if (members.length !== 2) {
                        return res.status(400).json({
                            error: "Site Incroyable requires exactly 2 members"
                        })
                    }
                    break;
                case "Scio":
                    if (members.length !== 2) {
                        return res.status(400).json({
                            error: "Scio requires exactly 2 members"
                        })
                    }
                    break;
                default:
                    return res.status(400).json({
                        error: "Invalid event"
                    })
            }
            for (let i = 0; i < members.length; i++) {
                let exist = await Member.findOne({
                    email: members[i].email
                });
                if (exist) {
                    return res.status(400).json({
                        error: `${members[i].email} is already registered`
                    });
                }
            }
            let mems = [];

            for (let i = 0; i < members.length; i++) {
                let member = new Member(members[i]);
                let verify = new Verify({
                    code: uuid(),
                    member: member._id
                });
                await member.save();
                await verify.save();
                await verifyEmail(member, verify.code, event);
                mems = [...mems, member._id];
            }

            let team = new Team({
                name: req.body.teamName,
                school: school,
                members: mems
            });
            await team.save();
            console.log(team);
            let registration = new Registration({
                team: team._id,
                event: event
            });
            await registration.save();
            for (let i = 0; i < members.length; i++) {
                let member = await Member.findOne({
                    email: members[i].email
                });
                let verified = await Verify.findOne({
                    member: member._id
                });
                await checkRegistration(member, registration._id, event, verified.code);
            }
            return res.status(200).json({
                error: 'Team registered'
            });
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            error: "We can't process your request at the moment. Please try again later"
        });
    }

}

export default Handler;