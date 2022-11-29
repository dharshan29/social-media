export default {
	wrapperStyle: {
		width: "100%",
		minHeight: "100vh",
		position: "relative",
	},
	loginContainer: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: "center",
		flexDirection: "row",
	},
	button: {
		height: "fit-content",
		alignSelf: "center",
		border: "none",
		background: "white",
		color: "black",
		textTransform: "none",
		"&:hover": {
			borderColor: "white",
			color: "white",
		},
	},
};
