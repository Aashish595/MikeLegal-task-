# 🗓️ Daily Task Manager – MikeLegal Frontend Intern Task

This is a React-based Daily Task Manager application built as part of the selection process for the **Frontend Intern** position at **MikeLegal**.

## 📌 Objective

The app allows users to:
- Add and edit tasks
- View tasks on a calendar
- Categorize tasks
- Visualize tasks by category using charts

Built with **Ant Design**, **Formik + Yup**, **Redux Toolkit**, and **Chart.js**.

---

## 🚀 Live Demo

🔗 **Live App**: [https://mikelegal-task.onrender.com/](https://mikelegal-task.onrender.com/)  
🔗 **GitHub Repo**: [https://github.com/Aashish595/MikeLegal-task-](https://github.com/Aashish595/MikeLegal-task-)

---

## 🧰 Tech Stack

- **ReactJS**
- **Ant Design** – UI components
- **Redux Toolkit** – State management
- **Formik + Yup** – Forms & validation
- **Chart.js** – Charts and data visualization
- **Day.js** *(optional)* – Date formatting

---

## ✨ Features

### 📅 1. Calendar View
- Built using Ant Design’s `<Calendar />` component.
- Click on any date to view or add tasks.

### 📝 2. Add / Edit Tasks
- Form opens in a modal/drawer on date click.
- Built using **Formik + Yup**.
- Fields:
  - **Title** (required)
  - **Description** (optional)
  - **Date** (auto-filled)
  - **Category** (Dropdown: `success`, `warning`, `issue`, `info`)
- Form validation handled by Yup.
- Task data is stored in **Redux state**.

### 📋 3. Task Listing
- Displays tasks for the selected date.
- Each task supports:
  - **Edit**
  - **Delete**
- Categories are shown using **Ant Design Tags**, color-coded.

### 📊 4. Charts Visualization
- Shows a **Bar or Pie chart** of task counts by category.
- Includes:
  - **Category filter dropdown**
  - **Apply** and **Reset** filter buttons

---

## 🗃️ State Management

- All task data is stored in the client using **Redux Toolkit**.
- No backend is used — all functionality is frontend-only.

---

