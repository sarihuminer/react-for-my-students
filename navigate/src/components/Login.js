import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Sing from './Sign-up';
class signup extends Component {

    state = {
        name: "",
        email: ""
    }

    render() {
        return (
            < div >

                <form id="form" onSubmit={() => this.LoginHandler()}>
                    <div>
                        <Link to="/sign">   <button id="signup">signup</button></Link>

                    </div>
                    <label>שם פרטי</label>
                    <input type="text" className="input" />

                    <label>כתובת מייל</label>
                    <input type="mail" className="input" />

                </form>
                <input type="submit" className="SubmitSave" onClick={() => alert('save')} value="שמור" />
            </div >
        );

    }
    componentWillMount = () => {
        console.log("hello login");
    }
    LoginHandler = () => {
        console.log("sign up");

    }
}


export default signup;