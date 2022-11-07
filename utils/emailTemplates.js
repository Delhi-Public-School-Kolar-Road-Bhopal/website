export const verifyEmail = (member, event, link, link2) => {
  return `<div style="background-color:#011620; padding:2rem;margin:0">
  <div>
    <img style="width:200px; border-radius:100%" src="https://res.cloudinary.com/dx73dzg3g/image/upload/v1665937862/socizilla/Headway_1_nqxohs.png">
  </div>
  <div style="color:white">
  <h3>Greetings, ${member.name}</h3>
    <p>
      Your registeration process for the ${event} event has been initiated. To verify your registration, please click on the button below.  
      </p>
    <a style="background-image:linear-gradient(to right, #D60270, #9B4F96, #0038A8); padding:1.5rem; font-weight: 900; box-shadow: 0 0 20px rgba(0,0,0,0.9); position:relative; display:inline-block; color:white; border:none; text-decoration:none; margin:1rem 0; border-radius:1rem" href='${link}'>Verify Email </a> 
    <p style="font-size:14px; margin-top:4rem;">
      In case you didn't register for the ${event} event, click on the button below to stop your registration process.  
    </p>
    <a style="background-color:black; margin-top:0; padding:1rem; font-size:14px; position:relative; display:inline-block; color:white; border:none; text-decoration:none; margin:1rem 0; border-radius:1rem" href=${link2}>Didn't Register</a> 
 
    </div>
</div>
<div style="background-color:black; text-align:center; padding:2rem; color:white;"> 
  <p style="margin-top:0"> © 2022 Extra Quadrata, Headway, DPS Kolar Road Bhopal
  <p style="color:white; text-decoration:none">For more information, click <a style="color:white" href=${process.env.ADDRESS}>here</a></p> 
</div>`
}

export const checkRegistrationStatus = (member, eventName, link, link2) => {
  return `
    <div style="background-color:#011620; padding:2rem;margin:0">
  <div style="display: flex; justify-content:center">
    <img style="width:200px; border-radius:100%" src="https://res.cloudinary.com/dx73dzg3g/image/upload/v1665937862/socizilla/Headway_1_nqxohs.png">
  </div>
  <div style="color:white">
  <h3>Greetings, ${member.name}</h3>
    <p>
      Your registeration process for the ${eventName} event has been initiated. To check your registration status, please click on the button below.  
      </p>
    <a style="background-image:linear-gradient(to right, #D60270, #9B4F96, #0038A8); padding:1.5rem; font-weight: 900; box-shadow: 0 0 20px rgba(0,0,0,0.9); position:relative; display:inline-block; color:white; border:none; text-decoration:none; margin:1rem 0; border-radius:1rem" href=${link}>Check Status</a> 
    <p style="font-size:14px; margin-top:4rem;">
      In case you didn't register for the ${eventName} event, click on the button below to stop your registration process.  
    </p>
    <a style="background-color:black; margin-top:0; padding:1rem; font-size:14px; position:relative; display:inline-block; color:white; border:none; text-decoration:none; margin:1rem 0; border-radius:1rem" href=${link2}>Didn't Register</a> 
 
    </div>
</div>
<div style="background-color:black; text-align:center; padding:2rem; color:white;"> 
  <p style="margin-top:0"> © 2022 Extra Quadrata, Headway, DPS Kolar Road Bhopal
  <p style="color:white; text-decoration:none">For more information, click <a style="color:white" href=${process.env.ADDRESS}>here</a></p> 
</div>`
}
export const registrationCanceled = (member, eventName) => {

  return `<div style="background-color:#011620; padding:2rem;margin:0">
  <div>
    <img style="width:200px; border-radius:100%" src="https://res.cloudinary.com/dx73dzg3g/image/upload/v1665937862/socizilla/Headway_1_nqxohs.png">
  </div>
  <div style="color:white">
  <h3>Greetings, ${member.name}</h3>
    <p>
      Your registration process for the ${eventName} event has been canceled by one of your team members. In case this was accidental, free free to register again on our website.
    </p>
</div>
<div style="background-color:black; text-align:center; padding:2rem; color:white;"> 
  <p style="margin-top:0"> © 2022 Extra Quadrata, Headway, DPS Kolar Road Bhopal
  <p style="color:white; text-decoration:none">For more information, click <a style="color:white" href=${process.env.ADDRESS}>here</a></p> 
</div>`

}
export const registrationAccepted = (member, eventName, link) => {}

export const registrationDenied = (member, eventName, link) => {

}