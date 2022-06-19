import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import React from "react";
import Fade from "@mui/material/Fade";
import copy from "../../common/images/copyTitle.svg";
import { GameTitleText } from "../DescriptionPage/descriptionStyled";

export default function TitleWithAlert({ copyTextHandler, title }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(() => true);
    setTimeout(function () {
      setOpen(() => false);
    }, 1000);
    copyTextHandler();
  };

  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={handleClick}>
        <GameTitleText>
          {title}
          <Button variant="text">
            <img style={{ width: "20px" }} src={copy} alt="copy" />
          </Button>
        </GameTitleText>
      </div>

      <Dialog
        disableScrollLock
        disableRestoreFocus
        open={open}
        onClose={handleClick}
        BackdropProps={{ invisible: true }}
        transition={Fade}
        transitionDuration={500}>
        <Alert>
          <AlertTitle>Success!</AlertTitle>"{title}" copied to clipboard
        </Alert>
      </Dialog>
    </>
  );
}