import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCameraImage } from "./features/cameraSlice";

function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cameraImage) {
      navigate(-1);
    }
  }, [cameraImage]);

  return (
    <div className="preview">
      <p>Hi</p>
      <img src={camImage} alt="" />
    </div>
  );
}

export default Preview;
