import {
	AppBar,
	Avatar,
	Box,
	IconButton,
	Modal,
	Stack,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React from "react";
import { media, media1, profile } from "../../assests";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import Settings from "../../components/Settings";
import styles from "./index.style";

const Home = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const [open, setOpen] = React.useState(false);
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
						<Posts />
						<Settings />
					</>
				) : (
					<Posts />
				)}
			</Stack>
		</>
	);
};

export default Home;
