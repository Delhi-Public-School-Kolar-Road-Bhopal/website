/* eslint-disable react/no-unescaped-entities */
import React from 'react';
const Register = () => {
    return (
        <div className="register">
            <div className="register-header">
                <h1>Register for Parabellum</h1>
                <video src='/cover.mp4' autoPlay={true} loop={true} muted={true} className="register-header-video" />
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
                    {[1, 2, 3, 4, 5, 6].map(a => {
                        return (<>
                            <div className="register-input">
                                <p>Player {a}'s Name</p>
                                <input type="text" placeholder={`Player ${a}'s Name`} />
                            </div>
                            <div className="register-input">
                                <p>Player {a}'s Email</p>
                                <input type="text" placeholder={`Player ${a}'s Email`} />
                            </div>
                        </>)

                    })}
              

                    <button className="register-button">Register</button>
                </form>

            </div>

        </div >
    )
}

export default Register;