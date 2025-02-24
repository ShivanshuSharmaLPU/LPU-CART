import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static" sx={{ backgroundColor: "green" }}> 
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LPUCart
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/cart">
              Cart
            </Button>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/signin">
              Sign In
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
