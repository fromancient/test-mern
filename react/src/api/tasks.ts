import api from './api';

// Description: Get a list of tasks
// Endpoint: GET /api/tasks
// Request: {}
// Response: { tasks: Array<{ _id: string, title: string, completed: boolean, createdAt: string }> }
export const getTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        tasks: [
          { _id: '1', title: 'Complete project proposal', completed: false, createdAt: '2024-03-20T10:00:00Z' },
          { _id: '2', title: 'Review code changes', completed: true, createdAt: '2024-03-19T15:30:00Z' },
          { _id: '3', title: 'Update documentation', completed: false, createdAt: '2024-03-18T09:15:00Z' },
        ],
      });
    }, 500);
  });
};

// Description: Create a new task
// Endpoint: POST /api/tasks
// Request: { title: string }
// Response: { task: { _id: string, title: string, completed: boolean, createdAt: string } }
export const createTask = (data: { title: string }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        task: {
          _id: Math.random().toString(),
          title: data.title,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      });
    }, 500);
  });
};

// Description: Mark a task as completed
// Endpoint: PUT /api/tasks/:id
// Request: { completed: boolean }
// Response: { task: { _id: string, title: string, completed: boolean, createdAt: string } }
export const updateTask = (id: string, data: { completed: boolean }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        task: {
          _id: id,
          title: 'Task title',
          completed: data.completed,
          createdAt: new Date().toISOString(),
        },
      });
    }, 500);
  });
};

// Description: Get task statistics
// Endpoint: GET /api/tasks/stats
// Request: {}
// Response: { total: number, completed: number, pending: number }
export const getTaskStats = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: 10,
        completed: 4,
        pending: 6,
      });
    }, 500);
  });
};