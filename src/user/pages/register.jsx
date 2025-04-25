import './sign.css'

import { Link } from "react-router-dom";
function Register() {
    return (
        <>
            <style>
                {`
            
            .foot,footer,.nav{
            display:none;
            }
            `}
            </style>
            <div className="sign_lo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkuVYYtNerUa2h8-V9ALhrZ1uU-dPRV7tXg&s" alt="" />        </div>
            <div className="sign_container">
                <div className="sign_form" style={{ height: "620px" }}>
                    <div className="sign_sm">
                        <p>Create Account</p>
                        <label htmlFor="">Your name </label>
                        <input type="text" placeholder='First and last name' />

                        <label htmlFor="">Mobile number</label>
                        <input type="number" placeholder='Mobile number' />

                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='atleast 6 characters' />
                        <span>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
                        </span>
                        <button>Verify mobile number</button>
                        <hr />

                        <h5>Buying for work?</h5>
                        <a href="" className='at'>Create a free business account </a>
                        <hr />
                        <span>Already have an account?  <Link to="/sign"><a href="">Sign in</a></Link> </span>
                        <span>By continuig you are agreeing to Amazon's <a href="">conditions of use </a> and <a href="">Privacy Notice</a></span>
                    </div>
                </div>

            </div>
            <hr style={{marginTop:"20px"}}/>
            <div className="footer">
      <p>
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Help</a>
      </p>
      <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
    </div>
            
        </>
    )
}
export default Register;