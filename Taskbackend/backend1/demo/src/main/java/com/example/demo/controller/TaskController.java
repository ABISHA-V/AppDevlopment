package com.example.demo.controller;

import com.example.demo.model.Task;
import com.example.demo.service.TaskService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.List;

@Controller
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public String getTasks(Model model, HttpServletRequest request) {
        String email = (String) request.getSession().getAttribute("email");
        if (email != null) {
            List<Task> tasks = taskService.getTasksByUserEmail(email);
            model.addAttribute("tasks", tasks);
        } else {
            // Handle case where the email is not found in session
            // Redirect to login or show an error message
            return "redirect:/login";
        }
        return "tasks";
    }

    @PostMapping
    public String createTask(Task task, HttpServletRequest request) {
        String email = (String) request.getSession().getAttribute("email");
        if (email != null) {
            taskService.createTask(email, task);
            return "redirect:/tasks";
        } else {
            // Handle case where the email is not found in session
            // Redirect to login or show an error message
            return "redirect:/login";
        }
    }
}
