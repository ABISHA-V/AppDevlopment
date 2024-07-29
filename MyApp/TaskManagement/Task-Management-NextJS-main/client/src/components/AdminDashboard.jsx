// components/AdminDashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper, IconButton, Card, CardContent, AppBar, Toolbar, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Footer from '../pages/Footer';

const initialTasks = [
  { id: 1, name: 'Task 1', status: 'Completed' },
  { id: 2, name: 'Task 2', status: 'Incomplete' },
  { id: 3, name: 'Task 3', status: 'Completed' },
  { id: 4, name: 'Task 4', status: 'Incomplete' },
  { id: 5, name: 'Task 5', status: 'Completed' },
];

const initialUsers = [
  { id: 1, user: 'Poovanthika', email: 'poovanthika@example.com', task: 'Coding Java', status: 'In Progress' },
  { id: 2, user: 'Dharsan', email: 'dharsan@example.com', task: 'Reading', status: 'Completed' },
  { id: 3, user: 'Tejasvi', email: 'tejasvi@example.com', task: 'Writing', status: 'In Progress' },
  { id: 4, user: 'Riya', email: 'riya@example.com', task: 'Drawing', status: 'Completed' },
  { id: 5, user: 'Suriya', email: 'suriya@example.com', task: 'Cooking', status: 'In Progress' },
];

const taskData = [
  { month: 'Jan', completed: 30, incomplete: 10 },
  { month: 'Feb', completed: 20, incomplete: 20 },
  { month: 'Mar', completed: 50, incomplete: 30 },
  { month: 'Apr', completed: 40, incomplete: 20 },
  { month: 'May', completed: 60, incomplete: 15 },
  { month: 'June', completed: 70, incomplete: 10 },
  { month: 'July', completed: 40, incomplete: 20 },
  { month: 'Aug', completed: 60, incomplete: 30 },
  { month: 'Sep', completed: 30, incomplete: 15 },
  { month: 'Oct', completed: 50, incomplete: 39 },
  { month: 'Nov', completed: 20, incomplete: 50 },
  { month: 'Dec', completed: 90, incomplete: 70 },
];

const monthlyTaskData = [
  { month: 'Jan', tasks: 40 },
  { month: 'Feb', tasks: 40 },
  { month: 'Mar', tasks: 80 },
  { month: 'Apr', tasks: 60 },
  { month: 'May', tasks: 75 },
  { month: 'June', tasks: 80 },
  { month: 'Jul', tasks: 66 },
  { month: 'Aug', tasks: 55 },
  { month: 'Sep', tasks: 90 },
  { month: 'Oct', tasks: 50 },
  { month: 'Nov', tasks: 70 },
  { month: 'Dec', tasks: 99 },
];

const AdminDashboard = () => {
  const [tasks] = useState(initialTasks);
  const [users, setUsers] = useState(initialUsers);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'Completed').length;
  const incompleteTasks = tasks.filter(task => task.status === 'Incomplete').length;
  const completedPercentage = ((completedTasks / totalTasks) * 100).toFixed(2);
  const incompletePercentage = ((incompleteTasks / totalTasks) * 100).toFixed(2);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'user',
      headerName: 'User',
      width: 160,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
          {params.row.user}
        </Box>
      ),
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'task', headerName: 'Task', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.row.id)} color="error">
          <DeleteOutline />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className='bg-[#242f47]'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Link to='/admin-login'><Button color="inherit">Logout</Button></Link>
        </Toolbar>
        </div>
      </AppBar>

      <Box sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
          <Card sx={{ flex: 1, marginRight: 2 }}>
            <CardContent>
              <Typography variant="h6">Task Statistics</Typography>
              <Typography>Total Tasks: {totalTasks}</Typography>
              <Typography>Completed Tasks: {completedTasks}</Typography>
              <Typography>Incomplete Tasks: {incompleteTasks}</Typography>
              <Typography>Completed Tasks Percentage: {completedPercentage}%</Typography>
              <Typography>Incomplete Tasks Percentage: {incompletePercentage}%</Typography>
            </CardContent>
          </Card>

          <Card sx={{ flex: 2, marginLeft: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Tasks Statistics Chart</Typography>
              <Box sx={{ height: 300, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={taskData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="completed" stroke="#4caf50" />
                    <Line type="monotone" dataKey="incomplete" stroke="#f44336" />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ marginBottom: 5 }}>
          <Typography variant="h6" gutterBottom>Monthly Tasks Bar Chart</Typography>
          <Box sx={{ height: 400, width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyTaskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tasks" fill="#8884d8" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>User Table</Typography>
          <Paper style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </Paper>
          <Footer/>
        </Box>
      </Box>
    </Box>
    
  );
};

export default AdminDashboard;
