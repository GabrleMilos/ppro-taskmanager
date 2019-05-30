package cz.ppro.taskmanager.taskamanager.controller;

import cz.ppro.taskmanager.taskamanager.model.user.User;
import cz.ppro.taskmanager.taskamanager.model.user.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;

@RestController
public class UserController {

    private final UserRepository userRepository;

    UserController(UserRepository userRepository){
        this.userRepository =  userRepository;
    }

    @CrossOrigin
    @RequestMapping("/user/login/{email}/{password}")
    public User loginUser(@PathVariable String email,@PathVariable String password){
        User user = userRepository.findByEmailAndPassword(email,password);
        return user;
    }

    @RequestMapping("/user/findUsers")
    public Collection<User> getUsers(){

        Collection col = userRepository.findAll();
        int a = 1;

        return userRepository.findAll();
    }
}
