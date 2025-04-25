import './sign.css'

import { Link } from "react-router-dom";
function Sign() {
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
                <div className="sign_form">
                    <div className="sign_sm">
                        <p>Sign in</p>
                        <label htmlFor="">Email or mobile phone number</label>
                        <input type="text" />
                        <button>Continue</button>
                        <span>By continuig you are agreeing to Amazon's <a href="">conditions of use </a> and <a href="">Privacy Notice</a></span>
                        <a href="" className='at'>Need Help?</a>
                        <hr />
                        <h5>Buying for work?</h5>
                        <a href="" className='at'>Shop on Amazon Business</a>
                    </div>
                </div>

            </div>
            <div className="question">New to Amazon?</div>
            <div className="acc">
                <Link to="/register">
                <button>Create your Amazon account</button></Link>
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
export default Sign;