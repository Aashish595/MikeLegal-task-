import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { Select, Button } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

function TaskChart() {
  const tasks = useSelector((state) => state.tasks.taskList);
  const [filter, setFilter] = useState(null);

  const filteredTasks = filter ? tasks.filter(task => task.category === filter) : tasks;

  const data = useMemo(() => {
    const counts = { success: 0, warning: 0, issue: 0, info: 0 };
    filteredTasks.forEach(task => counts[task.category]++);

    return {
      labels: Object.keys(counts),
      datasets: [
        {
          data: Object.values(counts),
          backgroundColor: ['#4CAF50', '#FFC107', '#F44336', '#2196F3'],
        },
      ],
    };
  }, [filteredTasks]);

  return (
    <div style={{ 
      marginTop: '20px', 
      maxWidth: '300px', 
      marginLeft: 'auto', 
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '10px',
        justifyContent: 'center'
      }}>
        <Select
          placeholder="Filter by category"
          value={filter}
          onChange={value => setFilter(value)}
          allowClear
          style={{ width: '150px', marginRight: '10px' }}
          size="small"
        >
          <Select.Option value="success">Success</Select.Option>
          <Select.Option value="warning">Warning</Select.Option>
          <Select.Option value="issue">Issue</Select.Option>
          <Select.Option value="info">Info</Select.Option>
        </Select>

        <Button 
          onClick={() => setFilter(null)} 
          size="small"
        >
          Reset
        </Button>
      </div>

      <div style={{ height: '200px', width: '100%' }}>
        <Pie 
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  boxWidth: 10,
                  font: {
                    size: 10
                  }
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default TaskChart;