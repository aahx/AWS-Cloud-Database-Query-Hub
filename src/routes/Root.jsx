/* eslint-disable no-unused-vars */

import "./Root.css";
import LeftPanel from "../pages/Root/LeftPanel";
import RightPanel from "../pages/Root/RightPanel";

import { useState } from "react";
export default function Root() {

  return (
    <div id="container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}