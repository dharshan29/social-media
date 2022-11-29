import { Stack } from "@mui/material";
import React from "react";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import Settings from "../../components/Settings";
import styles from "./index.style";

const Home = () => {
	return (
		<Stack sx={styles.wrapperStyle}>
			<Profile />
			<Posts />
			<Settings />
		</Stack>
	);
};

export default Home;
