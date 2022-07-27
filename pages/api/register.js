const registered = [];

class Member {
    constructor(email, name, grade) {
        this.name = name;
        this.email = email;
        this.grade = grade;
    }
}
class Team {
    constructor(school, event, members) {
        this.school = school;
        this.event = event;
        let Members = members.map(a => {
            return new Member(a.email, a.name, a.grade);
        })
        this.members = Members;
    }
}
const Handler = (req, res) => {
    const {
        school,
        event,
        members
    } = req.body;
    let team = new Team(school, event, members);
    if (registered.find(t => t.school = team.school && t.event === team.event)) {
        return res.status(400).json({
            error: "Team already registered"
        });
    }
    registered.push(team);
    return res.status(200).json({
        message: 'Team registered'
    });
}

export default Handler;