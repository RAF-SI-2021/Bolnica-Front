import "./styles.css";
import React from "react";
import LoginBolinca from "./LoginBolnica.jpg"
function LoginPage() {
  return (
    <div>
        <div class="container" id="container">
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Prijava</h1>
                    <br></br><input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <br></br>
                    <button>Prijavi se</button>
                    <a href="#">Zaboravljena lozinka?</a>
                </form>
            </div>
        </div>
        <div className="image-container">
            <img className="image" src={LoginBolinca}></img>
        </div>
  </div>
				
  );
}export default LoginPage;