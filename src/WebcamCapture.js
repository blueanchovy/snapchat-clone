import React, { useRef, useCallback, useState } from "react";
import "./WebcamCapture.css";
import Webcam from "react-webcam";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    navigate("Preview");
  }, [navigate, dispatch, webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat={videoConstraints}
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedOutlinedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
}

export default WebcamCapture;
