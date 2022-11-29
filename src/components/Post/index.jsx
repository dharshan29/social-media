import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styles from "./index.style";

const Post = () => {
	return (
		<Box sx={styles.wrapperStyle}>
			<Card sx={styles.card}>
				<CardMedia
					sx={styles.image}
					component="img"
					alt="green iguana"
					height="140"
					image="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Dharshan
					</Typography>
					<Typography variant="body2" color="text.secondary">
						email
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Post;
