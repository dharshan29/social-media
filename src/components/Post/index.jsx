import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Modal,
	Popover,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiEdit2Fill } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageDots, TbSend } from "react-icons/tb";
import { storage } from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.style";

const Post = ({ item }) => {
	const postId = Object.keys(item)[0];
	const { description, photo } = item[postId];
	const [anchorEl, setAnchorEl] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [text, setText] = useState(description);
	const [image, setImage] = useState(photo);
	const [file, setFile] = useState(null);
	const [url, setUrl] = useState(null);
	const [progress, setProgress] = useState(null);
	const imageRef = useRef();

	const handleModalOpen = () => setOpenModal(true);
	const handleModalClose = () => {
		setOpenModal(false);
		handleClose();
	};

	const data = localStorage.getItem("user");

	const { uid } = data ? JSON.parse(data) : "";

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			setFile(img);
			setImage(URL.createObjectURL(img));
		}
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const handleDelete = async () => {
		await fetch(
			`https://media-7d6da-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${uid}/${postId}.json`,
			{
				method: "DELETE",
			}
		)
			.then((response) => response.json())
			.catch((err) => console.log(err));
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

	const handleUpdate = (e) => {
		e.preventDefault();

		imagehandler();
	};

	useEffect(() => {
		if (url && text) {
			console.log(url);
			fetch(
				`https://media-7d6da-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${uid}/${postId}.json`,
				{
					method: "PUT",
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
			handleModalClose();
		}
	}, [handleUpdate, imagehandler]);

	return (
		<Box sx={styles.wrapperStyle}>
			<Card sx={styles.card}>
				<CardMedia
					sx={styles.image}
					component="img"
					alt={description}
					image={photo && photo}
				/>
				<IconButton
					aria-label={id}
					aria-describedby={id}
					type="button"
					onClick={handleClick}
					sx={styles.optionButton}
				>
					<HiDotsVertical />
				</IconButton>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
				>
					<Stack>
						<Button
							sx={{ justifyContent: "space-between" }}
							variant="text"
							endIcon={<RiEdit2Fill />}
							onClick={handleModalOpen}
						>
							Edit
						</Button>
						<Button
							sx={{ justifyContent: "space-between" }}
							variant="text"
							endIcon={<MdOutlineDeleteOutline />}
							onClick={handleDelete}
						>
							Delete
						</Button>
						<Modal
							open={openModal}
							onClose={handleModalClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<Stack sx={styles.modal}>
								<TextField
									sx={styles.input}
									value={text}
									placeholder="What's happening?"
									variant="outlined"
									onChange={(e) => setText(e.target.value)}
								/>
								<Box style={{ display: "none" }}>
									<input
										type="file"
										name="myImage"
										ref={imageRef}
										onChange={onImageChange}
									/>
								</Box>
								<Box sx={styles.previewImage}>
									<IconButton sx={styles.editButton}>
										<BiImageAdd onClick={() => imageRef.current.click()} />
									</IconButton>
									<img src={image} alt="" />
								</Box>
								<Button
									variant="outlined"
									sx={{ alignSelf: "end" }}
									onClick={handleUpdate}
								>
									Update
								</Button>
							</Stack>
						</Modal>
					</Stack>
				</Popover>
				<CardContent>
					<Stack sx={styles.actionButton}>
						<AiOutlineHeart />
						<TbMessageDots />
						<TbSend />
					</Stack>
					<Typography
						sx={{ textAlign: "start", marginBottom: 0, marginTop: 1 }}
						variant="h6"
					>
						{description && description}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Post;
