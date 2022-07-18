//a video-ish background with text using absolute positions and a linear-gradient that is half-transparent and half-translucent
//the text is centered and has a white font
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Header = (props) => {
    return (<div className="header">
        <video src={props.video.src} autoPlay={true} loop={true} muted={true} className="header-video" />
        <div className="header-content">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button className="header-link" onClick={()=>{
                window.scrollTo(0,950)
            }}><span>Learn More</span> <ArrowDownwardIcon className='header-link-icon' /></button>

        </div>
        <div className="header-background">

        </div>
        <div className='header-floater'>
            <div className='header-floater-1'/>
            <div className='header-floater-2'/>
            <div className='header-floater-3'/>
            <div className='header-floater-4'/>
            <div className='header-floater-5'/>
            <div className='header-floater-6'/>
            <div className='header-floater-7'/>
            <div className='header-floater-8'/>
            <div className='header-floater-9'/>
        </div>
    </div>)
}

export default Header;