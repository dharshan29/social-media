import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { dummySuggestion, online } from "../../data/dummyData";
import styles from "./index.style";

const Settings = () => {
	return (
		<Stack sx={styles.wrapperStyle}>
			<Stack sx={styles.container}>
				<Typography variant="small" color="#616161" textAlign="start">
					Suggestions for you
				</Typography>
				{dummySuggestion.map((suggestion) => (
					<Stack sx={styles.box}>
						<Stack flexDirection="row" alignItems="center" gap={1.5}>
							<Avatar alt={suggestion.name} src={suggestion.avatar} />
							<Typography variant="subtitle2">{suggestion.name}</Typography>
						</Stack>
						<Stack flexDirection="row" alignItems="center" gap={1.5}>
							<Button sx={styles.button} variant="contained">
								Follow
							</Button>
							<Button sx={styles.button} variant="contained" color="error">
								Dismiss
							</Button>
						</Stack>
					</Stack>
				))}
			</Stack>
			<Stack sx={styles.container}>
				<Typography variant="small" color="#616161" textAlign="start">
					Online
				</Typography>
				{online.map((item) => (
					<Stack sx={styles.box}>
						<Stack flexDirection="row" alignItems="center" gap={1.5}>
							<Avatar alt={item.name} src={item.avatar} />
							<Typography variant="subtitle2">{item.name}</Typography>
						</Stack>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default Settings;
