import { calculateNewValue } from "@testing-library/user-event/dist/utils";

export default {
	wrapperStyle: {
		flex: 2,
		gap: 2,
		height: "calc(100vh - 32px)",
		overflow: "auto",
		paddingBottom: 2,
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
};