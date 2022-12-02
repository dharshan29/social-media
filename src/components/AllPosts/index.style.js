export default {
	wrapperStyle: {
		flex: 2,
		height: "calc(100vh - 98px)",
		overflow: "auto",
		paddingY: 2,
		"&::-webkit-scrollbar": {
			width: 0,
		},
	},
	container: {
		gap: 2,
		width: "90%",
		margin: "auto",
	},

	addPost: {
		background: "white",
		padding: 2,
		borderRadius: 2,
	},
	input: {
		width: "100%",
		"& .MuiOutlinedInput-root": {
			borderRadius: 3,
			backgroundColor: "#bdc3c7",
		},
		"& input": {
			paddingY: 1,
		},
		"& fieldset": {
			border: "none",
		},
	},
	postOption: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingX: 1,
		paddingTop: 1,
	},
	previewImage: {
		position: "relative",
		paddingTop: 1,
		"& >svg": {
			position: "absolute",
			right: 8,
			top: 12,
			cursor: "pointer",
			height: 32,
			width: 32,
		},
		"& > img": {
			width: "100%",
			maxHeight: 320,
			objectFit: "cover",
			borderRadius: 1,
		},
	},
	boxStyle: {
		background: "white",
		padding: 2,
		borderRadius: 2,
	},
	card: {
		position: "relative",
		borderRadius: 2,
		boxShadow: "none",
		"& > img": {
			objectFit: "fill",
		},
	},
	image: (theme) => ({
		borderRadius: 2,
		height: 350,
		[theme.breakpoints.down("sm")]: {
			height: 280,
		},
	}),
	actionButton: {
		flexDirection: "row",
		gap: 2,
		"& svg": {
			height: 32,
			width: 32,
			cursor: "pointer",
		},
	},
};
