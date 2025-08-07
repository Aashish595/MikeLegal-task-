import React, { useState } from "react";
import { Layout, Typography } from "antd";
import CalendarView from "./components/CalendarView";
import TaskModal from "./components/TaskModal";
import TaskList from "./components/TaskList";
import TaskChart from "./components/TaskChart";
import "./App.css";

const { Header, Content } = Layout;

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  return (
    <Layout>
      <Header style={{ color: "white", fontSize: 20 }}>
        MikeLegal Task Manager
      </Header>
      <Content style={{ padding: "20px" }}>
        <CalendarView
          onDateSelect={(date) => {
            setSelectedDate(date);
            setIsModalOpen(true);
          }}
        />

        <TaskList
          selectedDate={selectedDate}
          onEdit={(task) => {
            setEditingTask(task);
            setIsModalOpen(true);
          }}
        />

        <TaskChart />

        <TaskModal
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTask(null);
          }}
          selectedDate={selectedDate}
          task={editingTask}
        />
      </Content>
    </Layout>
  );
}

export default App;
