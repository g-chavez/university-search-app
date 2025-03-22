'use client';
import { Box, Button, Flex, Card, Grid, TextField, Text } from "@radix-ui/themes";
import { PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Home from "./home";

export default function Login() {

  const myStyle = {
    fontFamily: "system-ui,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
    height:"100vh",
    "text-align":"center",
    display:"flex",
    "flex-direction":"column",
    alignItems:"center",
    justifyContent:"center"
  };


  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {

    if (user.trim() === '' || password.trim() === '') {
      setError('All fields are required.');
    }
    else if (user.trim() !== 'gcm' || password.trim() !== 'gcm') {
      setError('User and / or password are incorrect.');
    }
    else {
      setIsLoggedIn(true);
      setError('');
    }
  }
  if (isLoggedIn) {
    return <Home/>

  } else {
    return (
      <Box style={myStyle}>
        <Card size="4">
          <Flex direction="column" gap="3" width={"300px"}>
            <Grid gap="1">
            <TextField.Root placeholder="User" onChange={(e) => setUser(e.target.value)}>
              <TextField.Slot>
                <PersonIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
            <TextField.Root type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}>
              <TextField.Slot>
                <PersonIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
            </Grid>
            <Grid columns="1" gap="1">
              <Button variant="surface" onClick={() => { handleLogin() }}>Login</Button>
            </Grid>
            <Text>
            <div>
              {error && <div><Text color='crimson'>{error}</Text></div>}
            </div>
            </Text>
          </Flex>
        </Card>
      </Box>
    );
  }
}
