import React from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { Button, Card } from "antd";
import Navigation from "../components/navigation.jsx";

export default function Home() {
  const { UserData, logout } = useAuth();
  const handleLogout = async() => {
    await logout();
  };

  return (
    <>
    <Navigation></Navigation>
    <Card className="form-container">
      <h1>Home</h1>
      <Button onClick={handleLogout}>
      Logout
      </Button>
    </Card>
    </>
  );
}
