import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { GitHub } from '@mui/icons-material';

const Footer = (props) => {
    return (<div className="footer">
        <div className="footer-container">
            <div className="footer-container-left">
                All Rights Reserved
                <br /> © DPS Kolar Technoclub 2022
            </div>
            <div className="footer-container-right">
                <h4>Find us on</h4>
                <div>
                    <a><FacebookIcon /></a>
                    <a><TwitterIcon /></a>
                    <a><InstagramIcon /></a>
                </div>
                <h4>Check out our codebase on <a href='https://github.com/Delhi-Public-School-Kolar-Road-Bhopal'><GitHub /></a></h4>

            </div>
        </div>

    </div>)
}

export default Footer;