import "./styles.css";
import LoginBolinca from "./LoginBolnica.jpg";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
function LoginPage() {
	const [email,setEmail]=useState();
	const [passowrd,setPassword]=useState();
	const dispatch=useDispatch();
	const onChangePasswordHandler=(e)=>{
		setPassword(e.target.value);
	}
	const onChangeEmailHandler=(e)=>{
		setEmail(e.target.value);
	}
	const onSubmitHandle=(e)=>{
		const data={
			email,
			passowrd,
		}
		//dispatch()
	}
	return (
		<div>
			<div class="container" id="container">
				<div class="form-container sign-in-container">
					<form action="#" onSubmit={onSubmitHandle}>
						<h1>Prijava</h1>
						<br></br>
						<input type="email" placeholder="Email" onChange={onChangeEmailHandler}/>
						<input type="password" placeholder="Password" onChange={onChangePasswordHandler}/>
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
}
export default LoginPage;
