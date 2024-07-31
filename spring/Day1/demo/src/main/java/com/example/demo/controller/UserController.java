package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @PostMapping("/postdetails")
    public User postMethodName(@RequestBody User user) 
    {
        return userService.postDetails(user);
    }
    
    // @GetMapping("/details/{id}")
    // public User getMethodName(@PathVariable("id") int id) {
    //     return userService.getDetails(id);
    // }
    @GetMapping("/details")
    public ResponseEntity<List<User>> showinfo() {
        return new ResponseEntity<>(userService.getAll(),HttpStatus.OK);
    }
    @PutMapping("/details/{id}")
    public User updateMethodName(@PathVariable("id") int id, @RequestBody User user) {
        return userService.updateDetails(id, user);
    }

    @DeleteMapping("/details/{id}")
    public void deleteMethodName(@PathVariable("id") int id) {
        userService.deleteDetails(id);
    }
}



