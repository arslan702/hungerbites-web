"use client";
import "react-html5-camera-photo/build/css/index.css";
import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Camera from "react-html5-camera-photo";
import { ImageHandlerDropZone } from "./ImageHandlerDropZone";
import { Dialog } from "@/components";
import { useTheme } from "@mui/material/styles";
import { FiCamera } from "react-icons/fi";
import { ImageCropper } from "@/components";
import { dataURLtoFile } from "@/utils";

const UploadImageModal = (props) => {
  const theme = useTheme();
  const { isOpen, setShowUploadModal, onClose, onSave } = props;
  const [isCameraPreview, setIsCameraPreview] = useState(false);
  const [dataUri, setDataUri] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [cameraPermissionError, setCameraPermissionError] = useState(false);

  const handleImageUpload = (file) => {
    setImage(file[0]);
    setDataUri(URL.createObjectURL(file[0]));
  };
  const handleCameraView = () => {
    setIsCameraPreview(true);
    setDataUri("");
    setImage(null);
  };
  const handleUploadImage = () => {
    props.onSave(image);
    setDataUri();
    setImage(null);
  };
  const handleCameraError = (error) => {
    setCameraPermissionError(true);
  };
  const handleClearImage = () => {
    setDataUri();
    setImage(null);
  };
  const handleCroppedImage = (croppedImage) => {
    setImage(croppedImage);
  };

  return (
    <Dialog
      open={isOpen}
      title="Upload Your Picture"
      fullWidth
      actions={
        <Grid sx={{ width: "100%", textAlign: "center" }}>
          {dataUri && (
            <>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  paddingRight: "20px",
                  display: "initial",
                  [theme.breakpoints.down("xs")]: {
                    paddingRight: 0,
                    paddingBottom: "10px !important",
                    display: "Grid",
                  },
                }}
              >
                <Button
                  variant="contained"
                  sx={{ fontWeight: "bold" }}
                  onClick={handleUploadImage}
                >
                  Upload
                </Button>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  paddingRight: "20px",
                  display: "initial",
                  [theme.breakpoints.down("xs")]: {
                    paddingRight: 0,
                    paddingBottom: "10px !important",
                    display: "Grid",
                  },
                }}
              >
                <Button
                  variant="contained"
                  sx={{ fontWeight: "bold" }}
                  onClick={handleClearImage}
                >
                  Clear
                </Button>
              </Box>
            </>
          )}
          {!isCameraPreview && (
            <Box
              sx={{
                display: "initial",
                [theme.breakpoints.down("xs")]: {
                  display: "Grid",
                },
              }}
            >
              <Button variant="outlined" onClick={() => setShowUploadModal(false)}>
                Close
              </Button>
            </Box>
          )}
        </Grid>
      }
    >
      <Grid>
        {!isCameraPreview ? (
          <>
            {dataUri ? (
              <Box
                sx={{
                  position: "relative",
                  textAlign: "center",
                  "& img": {
                    width: "100% !important",
                    verticalAlign: "middle",
                    borderStyle: "none",
                    [theme.breakpoints.down("600")]: {
                      width: "100% !important",
                    },
                  },
                }}
              >
                <ImageCropper
                  imageUrl={dataUri}
                  setCroppedImage={handleCroppedImage}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  [theme.breakpoints.down("xs")]: {
                    display: "inline",
                    alignItems: "center",
                  },
                }}
              >
                <Grid
                  container
                  sx={{
                    width: "50%",
                    margin: "20px",
                    padding: "20px",
                    textAlign: "center",
                    backgroundColor: theme.palette.custom.grayLight,
                    color: theme.palette.white,
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    [theme.breakpoints.down("xs")]: {
                      width: "100%",
                      margin: "20px 0px 0px 0px",
                    },
                  }}
                >
                  <ImageHandlerDropZone onUploadImage={handleImageUpload} />
                </Grid>
                <Grid
                  container
                  sx={{
                    width: "50%",
                    margin: "20px",
                    padding: "20px",
                    textAlign: "center",
                    backgroundColor: theme.palette.custom.grayLight,
                    color: theme.palette.white,
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    [theme.breakpoints.down("xs")]: {
                      width: "100%",
                      margin: "20px 0px 0px 0px",
                    },
                  }}
                >
                  <Box onClick={handleCameraView}>
                    <FiCamera size={34} color="#B4B4B4" />
                    <Typography
                      sx={{ py: 2, color: "rgb(189, 189, 189)" }}
                      variant="body1"
                    >
                      Take Picture
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            )}
          </>
        ) : dataUri ? (
          <>
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
                "& img": {
                  width: "100% !important",
                  verticalAlign: "middle",
                  borderStyle: "none",
                  [theme.breakpoints.down("600")]: {
                    width: "100% !important",
                  },
                },
              }}
            >
              <ImageCropper
                imageUrl={dataUri}
                setCroppedImage={handleCroppedImage}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                padding: "20px 20px 0 20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="contained" onClick={onSave}>
                Submit
              </Button>
              <Button variant="contained" onClick={handleClearImage}>
                Retake
              </Button>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              "& .react-html5-camera-photo": {
                "& img": {
                  width: "100% !important",
                },
                "& video": {
                  width: "100% !important",
                },
              },
            }}
          >
            <Camera
              onTakePhotoAnimationDone={(dataUri) => {
                setDataUri(dataUri);
                setIsCameraPreview(false);
                setImage(dataURLtoFile(dataUri));
              }}
              onCameraError={(error) => {
                handleCameraError(error);
              }}
            />
          </Box>
        )}
      </Grid>
    </Dialog>
  );
};

export default UploadImageModal;
