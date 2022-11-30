import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styles from "./index.style";

const Post = ({ description, photo }) => {
	return (
		<Box sx={styles.wrapperStyle}>
			<Card sx={styles.card}>
				<CardMedia
					sx={styles.image}
					component="img"
					alt={description}
					height="140"
					image={photo && photo}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{description && description}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Post;
