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

function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closePreview = () => {
    dispatch(resetCameraImage());
    navigate("../");
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
      <div className="preview__footer">
        <h2>Send Now</h2>
        <SendOutlinedIcon fontSize="smaller" className="preview__sendIcon" />
      </div>
    </div>
  );
}

export default Preview;
