import { Modal, Form, Input, Select, Button } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../redux/taskSlice'; // ✅ updateTask must exist

const { Option } = Select;

const TaskSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  category: Yup.string().required('Category is required'),
});

function TaskModal({ open, onClose, selectedDate, task }) {
  const dispatch = useDispatch();

  return (
    <Modal open={open} title={task ? "Edit Task" : "Add Task"} onCancel={onClose} footer={null}>
      <Formik
        initialValues={{
          title: task?.title || '',
          description: task?.description || '',
          category: task?.category || '',
        }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          if (task) {
            dispatch(updateTask({ ...task, ...values }));
          } else {
            dispatch(addTask({ ...values, date: selectedDate }));
          }
          resetForm();
          onClose();
        }}
        enableReinitialize // ✅ ensures the form updates when `task` changes
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Title"
              validateStatus={errors.title && touched.title ? 'error' : ''}
              help={touched.title && errors.title}
            >
              <Input name="title" value={values.title} onChange={handleChange} />
            </Form.Item>

            <Form.Item label="Description">
              <Input.TextArea name="description" value={values.description} onChange={handleChange} />
            </Form.Item>

            <Form.Item
              label="Category"
              validateStatus={errors.category && touched.category ? 'error' : ''}
              help={touched.category && errors.category}
            >
              <Select
                name="category"
                value={values.category}
                onChange={value => handleChange({ target: { name: 'category', value } })}
              >
                <Option value="success">Success</Option>
                <Option value="warning">Warning</Option>
                <Option value="issue">Issue</Option>
                <Option value="info">Info</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {task ? "Update Task" : "Add Task"}
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default TaskModal;
