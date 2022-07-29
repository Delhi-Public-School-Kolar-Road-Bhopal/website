
const Register = () => {
    return (
        <div className="register">
            <div className="register-header">
                <h1>Leave us a message!</h1>
                <video src='cover.mp4' autoPlay={true} loop={true} muted={true} className="register-header-video" />
            </div>
            <div className="register-body">
                <form className="register-form">
                    <div className="register-input">
                        <p>Name</p>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="register-input">
                        <p>Email</p>
                        <input type="email" placeholder="Email@website.com" />
                    </div>
                    <div style={{ gridColumnStart: 'span 2' }} className="register-input">
                        <p>Message</p>
                        <div className="register-input-textarea">

                            <textarea placeholder="message..." />

                        </div>
                    </div>


                    <button className="register-button">Send</button>
                </form>

            </div>

        </div >
    )
}

export default Register;