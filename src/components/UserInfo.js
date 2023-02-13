import React, { useContext } from "react";
import { CurrentUserContext, ThemeContext } from "../context";

export default function UserInfo() {
  const theme = useContext(ThemeContext);
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className={`p-3 h-10 ${theme} `}>
      <div style={{ color: theme == "bg-dark" ? "white" : "black" }}>
        <h2>Welcome {currentUser}</h2>
        <div>Body</div>
      </div>
    </div>
  );
}
