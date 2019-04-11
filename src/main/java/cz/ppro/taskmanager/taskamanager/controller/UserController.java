package cz.ppro.taskmanager.taskamanager.controller;

import cz.ppro.taskmanager.taskamanager.model.user.User;
import cz.ppro.taskmanager.taskamanager.model.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Pageable;
import java.util.Collection;

@RestController
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    UserController(UserRepository userRepository){
        this.userRepository =  userRepository;
    }

    @RequestMapping("/findPayments")
    public Collection<User> getUsers(Pageable pageable){

        return userRepository.findAll();
    }
}
