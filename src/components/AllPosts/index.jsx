import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";

import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageDots, TbSend } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import styles from "./index.style";

const AllPosts = () => {
	const [userData, setUserData] = useState(null);

	const fetchUserData = async () => {
		const data = await fetch(`${process.env.REACT_APP_BASE_URL}/posts.json`)
			.then((response) => response.json())
			.then((json) => {
				return json;
			})
			.catch((err) => console.log(err));
		if (data) {
			let userData = Object.entries(data).map((e) => ({ [e[0]]: e[1] }));
			const users = [];
			userData.map((data) => {
				const userData = Object.entries(data[Object.keys(data)]).map((e) => ({
					[e[0]]: e[1],
				}));

				userData.forEach((item) => users.push(item));
			});
			setUserData(users);
		}
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	return (
		<Box sx={styles.wrapperStyle}>
			<Stack sx={styles.container}>
				{userData ? (
					userData?.map((item) => {
						const postId = Object.keys(item)[0];
						const { description, photo } = item[postId];
						return (
							<Box key={postId} sx={styles.boxStyle}>
								<Card sx={styles.card}>
									<CardMedia
										sx={styles.image}
										component="img"
										alt={description}
										image={photo && photo}
									/>

									<CardContent>
										<Stack sx={styles.actionButton}>
											<AiOutlineHeart />
											<TbMessageDots />
											<TbSend />
										</Stack>
										<Typography
											sx={{
												textAlign: "start",
												marginBottom: 0,
												marginTop: 1,
												wordWrap: "break-word",
											}}
											variant="h6"
										>
											{description && description}
										</Typography>
									</CardContent>
								</Card>
							</Box>
						);
					})
				) : (
					<Typography variant="h4">No Post to Display</Typography>
				)}
			</Stack>
		</Box>
	);
};

export default AllPosts;
