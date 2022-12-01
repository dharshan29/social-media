import React, { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

import styles from "./index.style";
import shareVideo from "../../assests/media.mp4";
import { auth } from "../../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { media } from "../../assests";

const Login = () => {
	const provider = new GoogleAuthProvider();

	const navigate = useNavigate();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const { displayName, email, photoURL, uid } = result.user;

				const userExist = async () => {
					const userData = await fetch(
						`https://media-7d6da-default-rtdb.asia-southeast1.firebasedatabase.app/users/${uid}.json`
					)
						.then((response) => response.json())
						.then((json) => {
							if (json) {
								localStorage.setItem("user", JSON.stringify({ ...json, uid }));
								return json;
							}
						})
						.catch((err) => console.log(err));
					if (userData === undefined) {
						await fetch(
							`https://media-7d6da-default-rtdb.asia-southeast1.firebasedatabase.app/users/${uid}.json`,
							{
								method: "PUT",
								body: JSON.stringify({
									name: displayName,
									email,
									profilePic: photoURL,
								}),
								headers: {
									"Content-type": "application/json; charset=UTF-8",
								},
							}
						)
							.then((response) => response.json())
							.then((json) => {
								if (json) {
									localStorage.setItem(
										"user",
										JSON.stringify({ ...json, uid })
									);
									return json;
								}
							});
					}
				};

				userExist();
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Stack sx={styles.wrapperStyle}>
			<Box sx={styles.video}>
				<video
					// style={{ height: "100%", width: "100%" }}
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
