export default {
	wrapperStyle: {
		width: "100%",
		minHeight: "calc(100vh - 66px)",
		flexDirection: "row",
		background: "linear-gradient(to right, #bdc3c7, #2c3e50)",
		marginTop: "66px",
		overflow: "hidden",
	},
	appBar: (theme) => ({
		background: "#bdc3c7",
		boxShadow: "2px 4px 21px 1px rgba(0,0,0,0.75)",
		paddingY: 1,
		paddingLeft: 2,
		[theme.breakpoints.down("md")]: {
			paddingX: 2,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
		},
	}),
	container: {
		flex: 2,
		height: "calc(100vh - 98px)",
		overflow: "auto",
		paddingY: 2,
		"&::-webkit-scrollbar": {
			width: 0,
		},
	},
	tabs: {
		width: "90%",
		marginX: "auto",
		"& .MuiTabs-indicator": {
			backgroundColor: "black",
		},
	},
	tab: {
		flex: 1,
		textTransform: "none",
		color: "white",
		"&.Mui-selected": {
			color: "black",
		},
	},
	modal: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		minWidth: 300,
	},
};
