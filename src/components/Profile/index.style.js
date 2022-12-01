export default {
	wrapperStyle: {
		flex: 1,
		paddingTop: 2,
	},
	card: (theme) => ({
		width: "80%",
		margin: "auto",
		[theme.breakpoints.down("lg")]: {
			width: "90%",
		},
		[theme.breakpoints.down("sm")]: {
			width: "250",
		},
	}),
};
