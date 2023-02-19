import React from "react";
import { ReactComponent as Logo } from "./Userpilot.svg";
import "./Loading.css";

export default function Loading() {
  return (
    <div className={"loadContainer"}>
      <Logo className={"logo"} />
    </div>
  );
}
