package cz.ppro.taskmanager.taskamanager.controller;

import cz.ppro.taskmanager.taskamanager.model.project.ProjectRepository;
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
    private ProjectRepository projectRepository;

    public TaskController(TaskRepository taskRepository, UserRepository userRepository, ProjectRepository projectRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
    }

    @CrossOrigin
    @RequestMapping("/task/userTasksForProject/{email}/{projectId}")
    public List<Task> getUserTasksForProject(@PathVariable String email, @PathVariable Integer projectId) {
        return taskRepository.findAllByAssignedUserAndProject(userRepository.findByEmail(email), projectRepository.findById(projectId));
    }

    @CrossOrigin
    @RequestMapping("/task/userTasks/{email}")
    public List<Task> getUserTasks(@PathVariable String email) {
        List<Task> tasks = taskRepository.findAllByAssignedUser(userRepository.findByEmail(email));
        return tasks;
    }
}
