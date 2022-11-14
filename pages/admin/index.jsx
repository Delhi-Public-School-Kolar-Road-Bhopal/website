import axios from 'axios';
import React from 'react';

const Login = () =>{
    const [log, setLog] = React.useState({email:"", password:"", error:""});
    const onSubmit = async (e) =>{
        e.preventDefault();
        try{
            const login = await axios.post('/api/admin', log);
            localStorage.setItem('token', login.data.token)
            document.location.reload();
        }
        catch(err){
            console.log(err);
            setLog(state=>({...state, error:"Incorrect Credentials"}));
        }
    }
    return <div className='admin'>
        <div className='admin-form'>
            <img src="/logo.png" alt="Logo" />
            <h1> Log Into Your Extra Quadrata Admin Account </h1>
            <input type="email"></input>
            <input type="password"></input>
            <button><p>Login</p></button> 
        </div>
    </div>
}

const Admin = () => {
    const [state, setState] = React.useState({ loggedIn: false, loaded: false, registrations: [] });
    React.useEffect(() => {
        let token = localStorage.getItem('token'); 
        if(token){
            
        }
        else{
            setState({ loggedIn: false, loaded:true});
        }
    }, [])
    if(!state.loaded){
        return <div>Loading... </div>
    }
    if(!state.loggedIn){
        return <Login />
    }
    return <div>

    </div>
}

export default Admin;