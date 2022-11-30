import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.style";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Post from "../Post";
import { storage } from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const Posts = () => {
	const [image, setImage] = useState(null);
	const [file, setFile] = useState(null);
	const [text, setText] = useState("");
	const [progress, setProgress] = useState(null);
	const [url, setUrl] = useState(null);
	const imageRef = useRef();

	const [userData, setUserData] = useState(null);

	const data = localStorage.getItem("user");

	const { uid } = data ? JSON.parse(data) : "";

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			setFile(img);
			setImage(URL.createObjectURL(img));
		}
	};

	const imagehandler = () => {
		const imageRef = ref(storage, `images/${uuidv4()}`);
		const uploadTask = uploadBytesResumable(imageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = snapshot.bytesTransferred / snapshot.totalBytes;
				setProgress(progress);
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setUrl(downloadURL);
				});
			}
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		imagehandler();
	};

	useEffect(() => {
		if (url && text) {
			fetch(
				`https://media-7d6da-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${uid}.json`,
				{
					method: "POST",
					body: JSON.stringify({
						description: text,
						photo: url,
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				}
			)
				.then((response) => response.json())
				.then((json) => console.log(json));

			setImage(null);
			setFile(null);
			setText("");
		}
	}, [handleSubmit, imagehandler]);

	useEffect(() => {
		const fetchUserData = async () => {
			const data = await fetch(
				`https://media-7d6da-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${uid}.json`
			)
				.then((response) => response.json())
				.then((json) => {
					return json;
				})
				.catch((err) => console.log(err));
			if (data) {
				setUserData(Object.values(data));
			}
		};
		fetchUserData();
	}, [handleSubmit]);

	return (
		<Stack sx={styles.wrapperStyle}>
			<Box sx={styles.addPost}>
				<TextField
					sx={styles.input}
					value={text}
					placeholder="What's happening?"
					variant="outlined"
					onChange={(e) => setText(e.target.value)}
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
					<Button variant="contained" onClick={(e) => handleSubmit(e)}>
						share
					</Button>
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
						<img src={image} alt="" />
					</Box>
				)}
			</Box>
			{userData ? (
				userData?.map((item) => {
					const { description, photo } = item;
					return <Post description={description} photo={photo} />;
				})
			) : (
				<Typography variant="h4">No Post to Display</Typography>
			)}
		</Stack>
	);
};

export default Posts;
