import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Login.css";
import { useAuth } from "../components/contex";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from "sweetalert2";




const LoginPage = () => {

  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginSuccess = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const { name, email } = decoded;
    login(decoded);


    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          gender: "Not Specified",
        }),
      });

      if (!response.ok) {
        throw new Error("User insert failed");
      }

      const newUser = await response.json();
      console.log("✅ User saved in DB:", newUser);


      Swal.fire({
        icon: 'success',
        title: 'Login successfully',
        text: `Welcome ${name}, you are now logged in!`,
        confirmButtonColor: '#b0b435',
      })
      navigate("/"); // Home page route

    } catch (error) {
      console.error("❌ Error saving user to DB:", error.message);

    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h3 className="login-title">Login to Your Account</h3>
        <p className="login-subtitle">Sign in with your Google account</p>
        <div className="login-button">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => alert("Login Failed")}
          />
        </div>
      </div>
    </div>
  );
};
export default LoginPage
