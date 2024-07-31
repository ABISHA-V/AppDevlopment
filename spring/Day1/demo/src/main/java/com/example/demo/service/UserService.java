
package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import java.util.List;
import java.util.Optional;

//import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
     
    public User postDetails( User user )
    {
        return userRepository.save(user);
    }

    // public User getDetails( int id )
    // {
    //     return userRepository.findById(id).orElse(null);
    // }
    public List<User> getAll()
    {
        return userRepository.findAll();
    }
    public User updateDetails(int id, User user) {
        Optional<User> existingUserOptional = userRepository.findById(id);
        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            existingUser.setName(user.getName()); // Update fields as necessary
            existingUser.setAge(user.getAge());
            
            // Add other fields to update as required
            return userRepository.save(existingUser);
        } else {
            return null; // or throw an exception if preferred
        }
    }

    public void deleteDetails(int id) {
        userRepository.deleteById(id);
    }
}