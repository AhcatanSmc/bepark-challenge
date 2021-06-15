import React from "react";
import "./Main.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Planning from "../planning/Planning";

function Main() {
  return (
    <div className="main">
      <h1 className="title">Planning Period</h1>
      <Breadcrumb />
      <p className="description">
        You can choose here and create the number of day that allows a user to
        book your parking in advance
      </p>
      <Planning />
    </div>
  );
}

export default Main;
