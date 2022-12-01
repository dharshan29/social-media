import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";
import styles from "./index.style";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { profile } from "../../assests";

const Profile = () => {
	const data = localStorage.getItem("user");
	const navigate = useNavigate();

	const { profilePic, name, email } = data ? JSON.parse(data) : "";

	const logout = () => {
		localStorage.removeItem("user");
		navigate("/login");
	};

	return (
		<Box sx={styles.wrapperStyle}>
			<Card sx={styles.card}>
				<CardMedia
					component="img"
					alt="profile pic"
					height="200"
					image={profilePic ? profilePic : profile}
				/>
				<CardContent>
					<Typography variant="h6">{name}</Typography>
				</CardContent>
				<CardContent>
					<Typography sx={{ wordWrap: "break-word" }} variant="body2">
						{email}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="medium" onClick={() => logout()} endIcon={<BiLogOut />}>
						Logout
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default Profile;
