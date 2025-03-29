import { Box, Button, TextField, Typography } from "@mui/material";

export default function AppointmentsForm() {
  return (
    <form>
      <Box
        sx={{
          width: "auto",
          maxWidth: 500,
          margin: "2rem auto",
          backgroundColor: "rgba(183, 158, 255, 0.05)",
          padding: "2rem",
          borderRadius: "12px",
          border: "1px solid rgba(0, 0, 0, 0.15)",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "rgb(183 158 255)",
          }}
        >
          Book an Appointment
        </Typography>

        <TextField label="First Name" variant="outlined" fullWidth />
        <TextField label="Last Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Phone Number" variant="outlined" fullWidth />

        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "rgb(183 158 255)",
            color: "#fff",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "rgb(160, 135, 235)",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}
