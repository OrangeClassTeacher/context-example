import React, { useContext } from "react";
import { CurrentUserContext } from "../context";

export default function Login() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  return (
    <div className="d-flex align-items-center justify-content-between">
      {currentUser ? (
        <h1>Hello {currentUser}</h1>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setCurrentUser("Bold");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
