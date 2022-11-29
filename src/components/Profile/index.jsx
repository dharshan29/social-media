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

const Profile = () => {
	return (
		<Box sx={styles.wrapperStyle}>
			<Card sx={styles.card}>
				<CardMedia
					component="img"
					alt="green iguana"
					height="200"
					image="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
				/>
				<CardContent>
					<Typography variant="h5">Dharshan</Typography>
				</CardContent>
				<CardActions>
					<Button size="medium" endIcon={<BiLogOut />}>
						Logout
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default Profile;
