package cz.ppro.taskmanager.taskamanager.controller;

import cz.ppro.taskmanager.taskamanager.model.task.Task;
import cz.ppro.taskmanager.taskamanager.model.task.TaskRepository;
import cz.ppro.taskmanager.taskamanager.model.user.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TaskController {
    private TaskRepository taskRepository;
    private UserRepository userRepository;

    public TaskController(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    @CrossOrigin
    @RequestMapping("/task/userTasksForProject/{userId}/{projectId}")
    public List<Task> getUserTasksForProject (@PathVariable Integer userId,@PathVariable Integer projectId){
        return null;
    }
    @CrossOrigin
    @RequestMapping("/task/userTasks/{email}")
    public List<Task> getUserTasks (@PathVariable String email){
        List<Task> tasks =taskRepository.findAllByAssignedUser(userRepository.findByEmail(email));
        int i = 1;
        return tasks;
    }
}
