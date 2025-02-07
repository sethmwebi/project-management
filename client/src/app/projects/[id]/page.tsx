"use client";
import { useState, use } from "react";
import ProjectHeader from "../ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import Timeline from "../TimelineView";
import Table from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  params: Promise<{ id: string }>;
};

const Project = ({ params }: Props) => {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTabOPen, setIsModalNewTabOpen] = useState(false);

  return (
    <div>
      <ModalNewTask
        isOpen={isModalNewTabOPen}
        onClose={() => setIsModalNewTabOpen(false)}
        id={id}
      />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTabOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTabOpen} />
      )}
      {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTabOpen} />
      )}
      {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTabOpen} />
      )}
    </div>
  );
};

export default Project;
