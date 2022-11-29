import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import styles from "./index.style";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Post from "../Post";

const Posts = () => {
	const [image, setImage] = useState(null);
	const imageRef = useRef();

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			setImage({
				image: URL.createObjectURL(img),
			});
		}
	};
	return (
		<Stack sx={styles.wrapperStyle}>
			<Box sx={styles.addPost}>
				<TextField
					sx={styles.input}
					placeholder="What's happening?"
					variant="outlined"
				/>
				<Stack sx={styles.postOption}>
					<Button
						onClick={() => imageRef.current.click()}
						variant="text"
						startIcon={<MdOutlinePhotoSizeSelectActual />}
					>
						Photo
					</Button>
					<Button variant="text" startIcon={<MdOutlineSlowMotionVideo />}>
						Video
					</Button>
					<Button variant="contained">share</Button>
				</Stack>
				<Box style={{ display: "none" }}>
					<input
						type="file"
						name="myImage"
						ref={imageRef}
						onChange={onImageChange}
					/>
				</Box>
				{image && (
					<Box sx={styles.previewImage}>
						<IoClose onClick={() => setImage(null)} />
						<img src={image.image} alt="" />
					</Box>
				)}
			</Box>
			<Post />
		</Stack>
	);
};

export default Posts;
