import React from "react";
import "./Header.css";
import { Button } from "../Button/Button";
import useTelegram from "../hooks/useTelegram";

export const Header = () => {
  const { onClose, user } = useTelegram();

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Close</Button>
      <span className={"username"}>{user}</span>
    </div>
  );
};
