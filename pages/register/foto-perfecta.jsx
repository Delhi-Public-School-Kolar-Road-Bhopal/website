/* eslint-disable react/no-unescaped-entities */
import React from 'react';
const Register = () => {
    return (
        <div className="register">
            <div className="register-header">
                <h1>Register for Photo Perfecta</h1>
                <video src='/cover.mp4' autoPlay={true} loop={true} muted={true} className="register-header-video" />
            </div>
            <div className="register-body">
                <form className="register-form">
                    <div className="register-input">
                        <p>School Name</p>
                        <input type="text" placeholder="School Name" />
                    </div>


                    <div className="register-input">
                        <p>Participant's Name</p>
                        <input type="text" placeholder={`Participant's Name`} />
                    </div>
                    <div className="register-input">
                        <p>Participant's Email</p>
                        <input type="text" placeholder={`Participant's Email`} />
                    </div>
                    <div></div>
                    <button className="register-button">Register</button>
                </form>

            </div>

        </div >
    )
}

export default Register;