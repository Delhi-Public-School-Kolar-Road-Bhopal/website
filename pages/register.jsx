
const Register = () => {
    return (
        <div className="register">
            <div className="register-header">
                <h1>Register</h1>
                <video src='cover.mp4' autoPlay={true} loop={true} muted={true} className="register-header-video" />
            </div>
            <div className="register-body">
                <form className="register-form">
                    <div className="register-input">
                        <p>School Name</p>
                        <input type="text" placeholder="School Name" />
                    </div>
                    <div className="register-input">
                        <p>Team Name</p>
                        <input type="text" placeholder="Team Name" />
                    </div>
                    <div className="register-input">
                        <p>Event</p>
                        <input type="text" placeholder="Select Event" />
                    </div>
                    <div className="register-input">
                        <p>Email</p>
                        <input type="email" placeholder="Email@website.com" />
                    </div>

                    <button className="register-button">Register</button>
                </form>

            </div>

        </div >
    )
}

export default Register;