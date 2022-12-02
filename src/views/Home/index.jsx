import {
	AppBar,
	Avatar,
	Box,
	IconButton,
	Modal,
	Stack,
	Tab,
	Tabs,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { media, media1, profile } from "../../assests";
import AllPosts from "../../components/AllPosts";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import Settings from "../../components/Settings";
import styles from "./index.style";

const Home = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("allPosts");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<AppBar position="fixed" sx={styles.appBar}>
				<img src={media} height="50px" width="100px" />
				{!matches && (
					<IconButton onClick={handleOpen}>
						<Avatar alt="pic" src={profile} />
					</IconButton>
				)}
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={styles.modal}>
						<Profile />
					</Box>
				</Modal>
			</AppBar>
			<Stack sx={styles.wrapperStyle}>
				{matches ? (
					<>
						<Profile />
						<Stack sx={styles.container}>
							<Tabs
								sx={styles.tabs}
								value={value}
								onChange={handleChange}
								aria-label="Tabs"
							>
								<Tab sx={styles.tab} value="allPosts" label="All Posts" />
								<Tab sx={styles.tab} value="myPosts" label="My Posts" />
							</Tabs>
							{value === "allPosts" && <AllPosts />}
							{value === "myPosts" && <Posts />}
						</Stack>
						<Settings />
					</>
				) : (
					<Stack sx={styles.container}>
						<Tabs
							sx={styles.tabs}
							value={value}
							onChange={handleChange}
							aria-label="Tabs"
						>
							<Tab sx={styles.tab} value="allPosts" label="All Posts" />
							<Tab sx={styles.tab} value="myPosts" label="My Posts" />
						</Tabs>
						{value === "allPosts" && <AllPosts />}
						{value === "myPosts" && <Posts />}
					</Stack>
				)}
			</Stack>
		</>
	);
};

export default Home;
