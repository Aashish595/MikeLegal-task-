import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push({ id: nanoid(), ...action.payload });
    },
    updateTask: (state, action) => {
      const index = state.taskList.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.taskList[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
