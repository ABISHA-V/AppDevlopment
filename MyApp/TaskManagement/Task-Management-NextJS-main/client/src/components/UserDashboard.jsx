import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper, IconButton, Card, CardContent, AppBar, Toolbar, Button, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import CancelOutline from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Navbar from '../pages/Navbar';

const initialTasks = [
  { id: 1, name: 'Coding Java', status: 'Completed' },
  { id: 2, name: 'Reading', status: 'Incomplete' },
  { id: 3, name: 'Writing', status: 'Completed' },
  { id: 4, name: 'Studying', status: 'Incomplete' },
  { id: 5, name: 'Playing', status: 'Completed' },
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

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const UserDashboard = () => {
  const [tasks] = useState(initialTasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'Completed').length;
  const incompleteTasks = tasks.filter(task => task.status === 'Incomplete').length;
  const completedPercentage = ((completedTasks / totalTasks) * 100).toFixed(2);
  const incompletePercentage = ((incompleteTasks / totalTasks) * 100).toFixed(2);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Task Name', width: 130 },
    { field: 'status', headerName: 'Status', width: 100, renderCell: (params) => (
        params.value === 'Completed' ? 
        <CheckCircleOutline style={{ color: 'green' }} /> : 
        <CancelOutline style={{ color: 'red' }} />
      ) 
    },
  ];

  return (
   
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Navbar/>
        <div className='bg-[#242f47]'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <center>User Dashboard</center>
          </Typography>
          
        </Toolbar>
        </div>
      </AppBar>

      <Box sx={{ padding: 3 }}>
        <Grid container spacing={10}>
          <Grid item xs={30} md={5}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">Task Statistics</Typography>
                <Typography>Total Tasks: {totalTasks}</Typography>
                <Typography>Completed Tasks: {completedTasks}</Typography>
                <Typography>Incomplete Tasks: {incompleteTasks}</Typography>
                <Typography>Completed Tasks Percentage: {completedPercentage}%</Typography>
                <Typography>Incomplete Tasks Percentage: {incompletePercentage}%</Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledCard>
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
            </StyledCard>
          </Grid>

          <Grid item xs={12}>
            <StyledCard>
              <CardContent>
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
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>Tasks</Typography>
                <Paper style={{ height: 300, width: '80%', margin: '0 auto' }}>
                  <DataGrid
                    rows={tasks}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                  />
                </Paper>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserDashboard;