"use client";
import Image from "next/image";
import { Typography } from "@mui/material";
import React, { useMemo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import FileUpload from "@/assets/icons/fileUploadIcon.svg";

const baseStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderWidth: 1,
  borderRadius: 8,
  borderColor: "#cccccc",
  borderStyle: "dashed",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export function ImageHandlerDropZone(props) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      props.onUploadImage(acceptedFiles);
    },
    [props]
  );
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpg,image/jpeg,image/png,image/svg+xml",
    multiple: false,
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <div>
        <Image src={FileUpload} alt="file-upload" />
        <Typography sx={{ mt: 3 }}>Upload Picture</Typography>
      </div>
    </div>
  );
}
