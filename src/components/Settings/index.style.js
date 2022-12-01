export default {
	wrapperStyle: {
		flex: 1,
		gap: 2,
		paddingTop: 2,
	},
	container: (theme) => ({
		backgroundColor: "white",
		borderRadius: 2,
		padding: 2,
		justifyContent: "start",
		gap: 1,
		width: "80%",
		marginX: "auto",
		[theme.breakpoints.down("1300")]: {
			width: "95%",
			paddingX: 1,
		},
	}),
	box: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	button: {
		textTransform: "none",
		paddingY: "2px",
	},
};
