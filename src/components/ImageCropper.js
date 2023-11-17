"use client";
import "react-image-crop/dist/ReactCrop.css";
import React, { useState, useRef } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";

const ImageCropper = (props) => {
  const { imageUrl, setCroppedImage } = props;
  const imgRef = useRef(null);
  const [crop, setCrop] = useState();
  const [aspect, setAspect] = useState(undefined);

  const onImageLoad = (e) => {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  const centerAspectCrop = (mediaWidth, mediaHeight, aspect) => {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 50,
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  };

  const makeClientCrop = async (crop) => {
    if (imgRef.current && crop.width && crop.height) {
      const blob = await getCroppedImg(imgRef.current, crop, "newFile.jpeg");
      const image = new File([blob], "image.jpeg", {
        type: "image/jpeg",
      });
      setCroppedImage(image);
    }
  };

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const pixelRatio = window.devicePixelRatio;

    canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = "high";
    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;
    const centerX = image.naturalWidth / 2;
    const centerY = image.naturalHeight / 2;

    ctx.save();

    ctx.translate(-cropX, -cropY);
    ctx.translate(centerX, centerY);
    ctx.scale(1, 1);
    ctx.translate(-centerX, -centerY);
    ctx.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            return;
          }
          blob.name = fileName;
          resolve(blob);
        },
        "image/jpeg",
        0.99
      );
      ctx.restore();
    });
  };

  return (
    <ReactCrop
      crop={crop}
      ruleOfThirds
      onComplete={(c) => makeClientCrop(c)}
      onChange={(_, percentCrop) => setCrop(percentCrop)}
      aspect={aspect}
    >
      <img ref={imgRef} alt="Crop me" src={imageUrl} onLoad={onImageLoad} />
    </ReactCrop>
  );
};
export default ImageCropper;
