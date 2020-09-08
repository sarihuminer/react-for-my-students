import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from '../axios';
class signup extends Component {

    state = {
        user: {
            first_name: "",
            last_name: "",
            userName: "",
            user_password: "",
            email: "",
            confirmpass: ""
        }
    }

    render() {
        return (
            < div >
                <form id="form" onSubmit={() => this.newUserHandler(this.state.user)}>
                    <div>

                        <Link to="/login">   <button id="login">login</button></Link>

                    </div>
                    <label>שם פרטי</label>
                    <input type="text" id="first_name" className="input" onChange={(event) => this.inputChange(event)} />
                    <label>שם משפחה</label>
                    <input type="text" id="last_name" className="input" onChange={(event) => this.inputChange(event)} />
                    <label>שם משתמש</label>
                    <input type="text" id="userName" className="input" onChange={(event) => this.inputChange(event)} />
                    <label>כתובת מייל</label>
                    <input type="mail" id="email" className="input" onChange={(event) => this.inputChange(event)} />
                    <label>סיסמה</label>
                    <input type="char" id="user_password" className="input" onChange={(event) => this.inputChange(event)} />
                    <label>אימות סיסמה</label>
                    <input type="char" id="confirmpass" className="input" onChange={(event) => this.inputChange(event)} />
                </form>
                <input type="submit" className="SubmitSave" onClick={() => this.newUserHandler(this.state.user)} value="שמור" />
            </div >
        );

    }
    componentWillMount = () => {
        console.log("hello hodaya");
    }
    signupHandler = () => {
        console.log("sign up");

    }
    inputChange = (event) => {

        const newperson = { ...this.state.user };
        const id = event.target.id;
        newperson[id] = event.target.value;
        //const songChange=newsong[event.target.id];
        //songChange=event.target.value;
        // newsong[event.target.id]=songChange;

        this.setState({ user: newperson });
    }

    newUserHandler = (user) => {
        debugger;
        axios.post('user/register', user).then(x => {
            console.log("sucses! " + x);
        })
    }
} export default signup;


