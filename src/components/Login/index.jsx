import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

import styles from "./index.style";
import shareVideo from "../../assests/media.mp4";
import { signInWithGoogle } from "../../Firebase";

const Login = () => {
	return (
		<Box sx={styles.wrapperStyle}>
			<Box sx={styles.video}>
				<video
					style={{ height: "100%", width: "100%" }}
					src={shareVideo}
					type="video/mp4"
					loop
					controls={false}
					muted
					autoPlay
				/>
			</Box>

			<Stack sx={styles.loginContainer}>
				<Button
					sx={styles.button}
					variant="outlined"
					startIcon={<FcGoogle />}
					onClick={signInWithGoogle}
				>
					Sign in with Google
				</Button>
			</Stack>
		</Box>
	);
};

export default Login;
