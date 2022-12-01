export default {
	wrapperStyle: {
		width: "100%",
		minHeight: "100vh",
		position: "relative",
	},
	video: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		overflow: "hidden",
		"& video": {
			minWidth: "100%",
			minHeight: "100%",
			objectFit: "cover",
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)",
		},
	},
	loginContainer: {
		height: "100vh",
		justifyContent: "center",
		alignItems: "center",
		gap: 1,
		zIndex: 1,
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
