import axios from 'axios';
import React from 'react';

const Login = () => {
    const [log, setLog] = React.useState({ email: "", password: "", error: "" });
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(log);

        try {
            const login = await axios.post('/api/admin', log);
            localStorage.setItem('token', login.data.token)
            document.location.reload();
        }
        catch (err) {
            console.log(err);
            setLog(state => ({ ...state, error: "Incorrect Credentials" }));
        }
    }
    return <div className='admin'>
        <form onSubmit={onSubmit} className='admin-form'>
            <img src="/logo.png" alt="Logo" />
            <h1> Log Into Your Extra Quadrata Admin Account </h1>
            <input value={log.email} onChange={(e) => {
                e.preventDefault();
                setLog(state => ({ ...state, email: e.target.value }))
            }} placeholder='Enter your Email' type="email"></input>
            <input value={log.password} onChange={(e) => {
                e.preventDefault();
                setLog(state => ({ ...state, password: e.target.value }))
            }} placeholder='Enter your password' type="password"></input>
            <button><p>Login</p></button>
            <h3 style={{ color: "red" }}>{log.error}</h3>
        </form>
    </div>
}
const Registration = (props) => {
    let [open, setOpen] = React.useState(false);
    return (<div className='registration'>
        <h2>{props.teamName}</h2>
        <h3>{props.schoolName}</h3>
        <p> </p>
    </div>)
}
const Admin = () => {
    const [state, setState] = React.useState({ loggedIn: false, loaded: false, registrations: [], admin: {} });
    React.useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common = {
                "x-auth-token": token
            };
            (async () => {
                try {
                    const res = await axios.get('/api/admin');
                    console.log(res.data)
                    setState(state => ({
                        registrations: res.data.registrations,
                        loggedIn: true,
                        loaded: true,
                        admin: res.data.admin
                    }))
                }
                catch (err) {
                    localStorage.removeItem('token');
                    setState(state => ({
                        registrations: res.data.registrations,
                        loggedIn: false,
                        loaded: true
                    }))
                }
            })();
        }
        else {
            setState({ loggedIn: false, loaded: true });
        }

    }, [])
    if (!state.loaded) {
        return <div>Loading... </div>
    }
    if (!state.loggedIn) {
        return <Login />
    }
    let espritRegistrations = state.registrations.filter(reg => reg.registration.event === "Esprit Decode");
    let parabellumRegistrations = state.registrations.filter(reg => reg.registration.event === "Parabellum");
    let siteRegistrations = state.registrations.filter(reg => reg.registration.event === "Site Incroyable");
    let scioRegistrations = state.registrations.filter(reg => reg.registration.event === "Scio");
    let filmskapingRegistrations = state.registrations.filter(reg => reg.registration.event === "Filmskaping");
    let photoPerfectaRegistrations = state.registrations.filter(reg => reg.registration.event === "Photo Perfecta");


    console.log("Esprit Decode", espritRegistrations);
    console.log("Site Incroyable", siteRegistrations);
    console.log("Filmskaping", filmskapingRegistrations);
    console.log("Photo Perfecta", photoPerfectaRegistrations);
    console.log("Scio Registration", scioRegistrations);
    console.log("Parabellum", parabellumRegistrations);


    return <div className='admin'>
        <div className='admin-header'>
            <h1>Hello, {state.admin.name}</h1>
        </div>
        <div className='admin-container'>
            <h1>Esprit Decode Registrations {espritRegistrations.length}</h1>

        </div>
    </div>
}

export default Admin;