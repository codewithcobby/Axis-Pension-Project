import React from "react";
import CustomButton from "../../Components/Customs/CustomButton";
import CustomInput from "../../Components/Customs/CustomInput";
import logo from "../../Assets/Logo/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		await axios
			.post("http://localhost:8081/api/admin/loginAdmin")
			.then(({ data }) => {
				if (data.auth === 1) {
					localStorage.setItem("admin_name", data.admin_name);
					localStorage.setItem("token", data.token);
					navigate("/dashboard");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<section>
			<div className="lg:w-2/6 mx-auto mt-16">
				<div className="logo w-20 mx-auto">
					<img
						src={logo}
						alt="Swype logo"
						className="w-11/12 h-full mx-auto"
					/>
				</div>
				<div className="title text-center py-6">
					<h3 className="text-xl font-medium">Log in to your account</h3>
				</div>
				<div className="w-full lg:shadow-md lg:border lg:rounded-lg p-2 my-5">
					<form
						className="w-11/12 lg:w-5/6 mx-auto"
						onSubmit={handleLogin}
					>
						<div className="my-8">
							<label className="text-md font-semibold">
								Email address
							</label>
							<CustomInput type={"text"} />
						</div>
						<div className="my-8">
							<label className="text-md font-semibold">Password</label>
							<CustomInput type={"password"} />
						</div>
						<div className="flex justify-between items-center my-8">
							<div className="flex  items-center">
								<input type={"checkbox"} id={"remember"} />
								<p className="ml-2 cursor-pointer" id={"remember"}>
									Remember me
								</p>
							</div>
							<div>
								<Link to={"/forgot-password"}>
									<p className="text-gray-500">
										Forgot your password?
									</p>
								</Link>
							</div>
						</div>
						<CustomButton> Login </CustomButton>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
