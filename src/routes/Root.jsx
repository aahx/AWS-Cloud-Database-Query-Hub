/* eslint-disable no-unused-vars */

import "./Root.css";
import LeftPanel from "../pages/Root/LeftPanel";
import RightPanel from "../pages/Root/RightPanel";

import StudentGet from "../components/RightPanel/StudentCrud/StudentGet";
import StudentPost from "../components/RightPanel/StudentCrud/StudentPost";
import StudentPatch from "../components/RightPanel/StudentCrud/StudentPatch";

export default function Root() {
  return (
    <>
    Root.jsx
    {/* <LeftPanel /> */}
    <RightPanel />
    {/* <StudentGet/> */}
    {/* <StudentPost/> */}
    {/* <StudentPatch/> */}
    </>
  );
}