import React, { useEffect } from "react";
import "./Preview.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCameraImage, resetCameraImage } from "./features/cameraSlice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import CropOutlinedIcon from "@mui/icons-material/CropOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { v4 as uuidv4 } from "uuid";
import { storage, db } from "./firebase";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import {
  uploadString,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";

function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  console.log(cameraImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closePreview = () => {
    dispatch(resetCameraImage());
    navigate("../");
  };

  const sendPost = async () => {
    const id = uuidv4();
    const storageRef = ref(storage, `posts/${id}`);
    const uploadTask = await uploadString(storageRef, cameraImage, "data_url");
    const url = await getDownloadURL(uploadTask.ref);

    //finally add the document to the DB
    await setDoc(
      doc(db, "posts", id),
      {
        imageUrl: url,
        username: "Apollo",
        read: false,
        //profilePic,
        timestamp: serverTimestamp(),
      },
      { merge: true }
    );

    navigate("../Chats");

    // uploadTask.on(
    //   "state_changed",
    //   null,
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       console.log(downloadURL);
    //       await setDoc(doc(db, "posts", id), {
    //         timestamp: serverTimestamp(),
    //         imageUrl: downloadURL,
    //         userName: "Manish",
    //         read: false,
    //       });
    //       navigate(-1);
    //     });
    //   }
    // );
  };

  useEffect(() => {
    if (!cameraImage) {
      navigate("../");
    }
  }, [navigate, cameraImage]);

  return (
    <div className="preview">
      <CloseOutlinedIcon onClick={closePreview} className="preview__close" />
      <div className="preview__toolbarRight">
        <TextFieldsOutlinedIcon />
        <CreateOutlinedIcon />
        <NoteOutlinedIcon />
        <MusicNoteOutlinedIcon />
        <AttachFileOutlinedIcon />
        <CropOutlinedIcon />
        <TimerOutlinedIcon />
      </div>
      <img src={cameraImage} alt="" />
      <div onClick={sendPost} className="preview__footer">
        <h2>Send Now</h2>
        <SendOutlinedIcon fontSize="smaller" className="preview__sendIcon" />
      </div>
    </div>
  );
}

export default Preview;
