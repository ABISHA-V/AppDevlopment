package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Task;
import com.example.demo.model.User;
import com.example.demo.repository.TaskRepository;
import com.example.demo.repository.UserRepository;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Task> getTasksByUserEmail(String email) {
        return taskRepository.findByUserEmail(email);
    }

    public Task createTask(String userEmail, Task task) {
        User user = userRepository.findByEmail(userEmail);
        if (user != null) {
            task.setUser(user);
            return taskRepository.save(task);
        }
        return null; // Handle user not found scenario
    }
}
