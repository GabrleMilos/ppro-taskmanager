package cz.ppro.taskmanager.taskamanager.controller;

import cz.ppro.taskmanager.taskamanager.model.project.Project;
import cz.ppro.taskmanager.taskamanager.model.project.ProjectRepository;
import cz.ppro.taskmanager.taskamanager.model.task.Task;
import cz.ppro.taskmanager.taskamanager.model.task.TaskRepository;
import cz.ppro.taskmanager.taskamanager.model.user.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

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

//    @CrossOrigin
//    @RequestMapping("/task/userTasksForProject/{email}/{projectId}")
//    public List<Task> getUserTasksForProject(@PathVariable String email, @PathVariable Integer projectId) {
//        return taskRepository.findAllByAssignedUserAndProject(userRepository.findByEmail(email), projectRepository.findById(projectId));
//    }

    @CrossOrigin
    @RequestMapping("/task/tasksForProject/{projectId}")
    public List<Task> getTasksForProject(@PathVariable Integer projectId) {
        Optional<Project> project = projectRepository.findById(projectId);
        if (project.isPresent())
            return taskRepository.findAllByProject(projectRepository.findById(projectId).get());
        return null;
    }

    @CrossOrigin
    @RequestMapping("/task/userTasks/{email}")
    public List<Task> getUserTasks(@PathVariable String email) {
        return taskRepository.findAllByAssignedUser(userRepository.findByEmail(email));
    }
}
