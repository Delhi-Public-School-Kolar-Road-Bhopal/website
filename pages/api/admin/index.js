import admins from '../../../models/admins';
import connect from '../../../utils/mongoDBConnector';
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    try {
        await connect();

        if (req.method === "POST") {
            const {
                email,
                password
            } = req.body;
            const admin = await admins.findOne({
                email: email
            });
            if (!admin) {
                return res.status(400).json({
                    error: "Incorrect Credentials"
                });
            }

            let comparison = bcrypt.compareSync(password, admin.password);
            if (!comparison) {
                return res.status(401).json({
                    error: "Incorrect Credentials"
                });
            }
            const token = await jwt.sign({
                user: admin._id
            }, process.env.JWT_SECRET, {
                expiresIn: '60d'
            });
            return res.status(200).json({
                message: "Login successful",
                token
            });
        } else {
            return res.status(404).end();
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            error: "We can't process your request at the moment. Please try again later"
        });
    }
}


export default handler;