import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginRequiredDialog({ open, onClose }) {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
    if (onClose) onClose();
  };

  return (
    <Dialog
      open={false}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Authentication Required
      </DialogTitle>

      <DialogContent>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", mt: 1 }}
        >
          You should log in to continue.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLoginRedirect}
        >
          Go to Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}
