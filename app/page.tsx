"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { SetStateAction, useState } from "react";
import Home from "./components/home/home";
import Banner from "./components/banner/banner";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Person from "@mui/icons-material/Person";
import FormHelperText from "@mui/material/FormHelperText";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    if (user.trim() === "" || password.trim() === "") {
      setError("All fields are required.");
    } else if (user.trim() !== "gcm" || password.trim() !== "gcm") {
      setError("User and / or password are incorrect.");
    } else {
      setIsLoggedIn(true);
      setError("");
    }
  }
  if (isLoggedIn) {
    return (
      <div>
        <Banner />
        <Home />
      </div>
    );
  } else {
    return (
      <div>
        <Banner />
        <Box>
          <Stack
            direction="column"
            spacing={4}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              label="Email"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                },
              }}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setUser(e.target.value)
              }
            />

            <TextField
              type="password"
              label="Password"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              {error && (
                <div>
                  <FormHelperText id="component-error-text" error>
                    {error}
                  </FormHelperText>
                </div>
              )}
            </div>

            <Button
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </div>
    );
  }
}
