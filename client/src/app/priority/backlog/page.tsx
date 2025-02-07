import React from "react";
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const BackLog = () => {
  return <ReusablePriorityPage priority={Priority.BackLog} />;
};

export default BackLog;
