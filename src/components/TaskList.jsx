 import { useSelector, useDispatch } from 'react-redux';
import { Card, Tag, Button } from 'antd';
import { deleteTask } from '../redux/taskSlice';

function TaskList({ selectedDate, onEdit }) {
  const tasks = useSelector((state) => state.tasks.taskList);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => task.date === selectedDate);

  const categoryColors = {
    success: 'green',
    warning: 'orange',
    issue: 'red',
    info: 'blue',
  };

  return (
    <div style={{ marginTop: 20 }}>
  <h3>Tasks for {selectedDate}</h3>
  {filteredTasks.length === 0 ? (
    <p>No tasks for this date.</p>
  ) : (
    filteredTasks.map(task => (
      <Card key={task.id} style={{ marginBottom: 10 }}>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <Tag color={categoryColors[task.category]}>{task.category}</Tag>
        <div style={{ marginTop: 10 }}>
          <Button size="small" onClick={() => onEdit(task)}>Edit</Button>
          <Button size="small" danger style={{ marginLeft: 10 }} onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
        </div>
      </Card>
    ))
  )}
</div>

  );
}

export default TaskList;