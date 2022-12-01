export default {
	wrapperStyle: {
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
	optionButton: {
		position: "absolute",
		top: 0,
		right: 0,
	},
	modal: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		maxWidth: 400,
		minWidth: 250,
		bgcolor: "background.paper",
		borderRadius: 2,
		boxShadow: 24,
		p: 4,
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
	editButton: {
		position: "absolute",
		right: 0,
	},
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
