import React, { useState } from "react";
import { CurrentUserContext } from "../context";
import Login from "./Login";
export default function Header() {
  return (
    <div>
      <Login />
    </div>
  );
}
