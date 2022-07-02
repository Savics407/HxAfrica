// import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";

function UserDetails({ formData, setFormData }) {
	// const [step, setStep] = useState(0);

	return (
		<>
			<div className="flex items-center justify-between mb-12 rule relative lg:text-base">
				<div className="tabs">
					<span className="indicator">1</span>
					<p>Create Account</p>
				</div>
				<div className="tabs">
					<span className="indicator">2</span>
					<p className="text-grey">OTP Verification</p>
				</div>
				<div className="tabs">
					<span className="indicator">3</span>
					<p className="text-grey">Account Setup</p>
				</div>
			</div>
			<form className="form">
				<div>
					<h1 className="page-text">Create Account</h1>
					<p className="description">
						Create an account with REIC, this would only take few minutes.
					</p>
				</div>
				<div className="input">
					<label className="">Email Address </label>
					<input
						required
						type="email"
						placeholder="enter email address"
						className="box"
						value={formData.email}
						onChange={(event) =>
							setFormData({ ...formData, email: event.target.value })
						}
					/>
				</div>
				<div className="input">
					<label>Phone Number</label>
					<input
						required
						type="tel"
						placeholder="enter phone number"
						className="box"
						value={formData.phone}
						onChange={(event) =>
							setFormData({ ...formData, phone: event.target.value })
						}
					/>
				</div>
				<div className="input relative">
					<label>Password</label>
					<input
						required
						type="password"
						placeholder="enter password"
						className="box"
						id="pass"
						value={formData.password}
						onChange={(event) =>
							setFormData({ ...formData, password: event.target.value })
						}
					/>
					<FaRegEyeSlash
						className="text-grey absolute top-11 right-4 cursor-pointer"
						onClick={() => {
							let x = document.getElementById("pass");
							if (x.type === "password") {
								x.type = "text";
							} else {
								x.type = "password";
							}
						}}
					/>
				</div>
				<div className="input relative">
					<label>Confirm Password</label>
					<input
						required
						type="password"
						placeholder="confirm password"
						className="box"
						id="confirm"
						value={formData.confirmPassword}
						onChange={(event) =>
							setFormData({ ...formData, confirmPassword: event.target.value })
						}
					/>
					<FaRegEyeSlash
						className="text-grey absolute top-11 right-4 cursor-pointer"
						onClick={() => {
							let x = document.getElementById("confirm");
							if (x.type === "password") {
								x.type = "text";
							} else {
								x.type = "password";
							}
						}}
					/>
				</div>
				<div className=" flex items-start">
					<input
						required
						type="checkbox"
						className="border mr-2"
						value="1"
						onChange={(event) =>
							setFormData({ ...formData, terms: event.target.value })
						}
					/>
					<p className="text-xs tracking-wide">
						I agree with REIC{" "}
						<span className="text-blue-500">Terms & Conditions </span> and{" "}
						<span className="text-blue-500">Privacy Policy</span>
					</p>
				</div>
				<div>
					{/* <button className="bg-green text-white w-full p-3 rounded-xl mt-6 font-medium"
                    onClick={() => {
                        setStep((currentPage) => currentPage + 1)
                    }}>Next</button> */}
				</div>
			</form>
		</>
	);
}

export default UserDetails;
