import { Calendar, Badge } from 'antd';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

function CalendarView({ onDateSelect }) {
  const tasks = useSelector((state) => state.tasks.taskList);

  const cellRender = (current, info) => {
    if (info.type === 'date') {
      const currentDate = current.format('YYYY-MM-DD');
      const dayTasks = tasks.filter(task => task.date === currentDate);

      return (
        <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
          {dayTasks.map(task => (
            <li key={task.id}>
              <Badge color={getColor(task.category)} text={task.title} />
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const getColor = (category) => {
    switch (category) {
      case 'success': return '#52c41a';
      case 'warning': return '#faad14';
      case 'issue': return '#f5222d';
      case 'info': return '#1890ff';
      default: return '#d9d9d9';
    }
  };

  return (
    <div className="max-w-md text-sm">
      <Calendar
        fullscreen={false}
        onSelect={(date) => onDateSelect(dayjs(date).format('YYYY-MM-DD'))}
        cellRender={cellRender}
      />
    </div>
  );
}

export default CalendarView;
