import React, { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

import styles from "./index.style";
import shareVideo from "../../assests/media.mp4";
import { auth } from "../../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { media } from "../../assests";
import { Helmet } from "react-helmet";

const Login = () => {
	const provider = new GoogleAuthProvider();

	const navigate = useNavigate();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const { displayName, email, photoURL, uid } = result.user;

				const userExist = async () => {
					const userData = await fetch(
						`${process.env.REACT_APP_BASE_URL}/users/${uid}.json`
					)
						.then((response) => response.json())
						.then((json) => {
							if (json) {
								localStorage.setItem("user", JSON.stringify({ ...json, uid }));
								navigate("/");
								return json;
							}
						})
						.catch((err) => console.log(err));
					if (userData === undefined) {
						await fetch(`${process.env.REACT_APP_BASE_URL}/users/${uid}.json`, {
							method: "PUT",
							body: JSON.stringify({
								name: displayName,
								email,
								profilePic: photoURL,
							}),
							headers: {
								"Content-type": "application/json; charset=UTF-8",
							},
						})
							.then((response) => response.json())
							.then((json) => {
								if (json) {
									localStorage.setItem(
										"user",
										JSON.stringify({ ...json, uid })
									);
									navigate("/");
									return json;
								}
							});
					}
				};

				userExist();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Stack sx={styles.wrapperStyle}>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<Box sx={styles.video}>
				<video
					src={shareVideo}
					type="video/mp4"
					loop
					controls={false}
					muted
					autoPlay
				/>
			</Box>

			<Stack sx={styles.loginContainer}>
				<img src={media} height="100px" width="200px" />
				<Button
					sx={styles.button}
					variant="outlined"
					startIcon={<FcGoogle />}
					onClick={signInWithGoogle}
				>
					Sign in with Google
				</Button>
			</Stack>
		</Stack>
	);
};

export default Login;
