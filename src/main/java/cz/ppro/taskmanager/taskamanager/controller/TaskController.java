package cz.ppro.taskmanager.taskamanager.controller;

import cz.ppro.taskmanager.taskamanager.model.project.Project;
import cz.ppro.taskmanager.taskamanager.model.project.ProjectRepository;
import cz.ppro.taskmanager.taskamanager.model.task.Task;
import cz.ppro.taskmanager.taskamanager.model.task.TaskRepository;
import cz.ppro.taskmanager.taskamanager.model.task_history.TaskHistory;
import cz.ppro.taskmanager.taskamanager.model.task_history.TaskHistoryRepository;
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
    private TaskHistoryRepository taskHistoryRepository;

    public TaskController(TaskRepository taskRepository, UserRepository userRepository, ProjectRepository projectRepository, TaskHistoryRepository taskHistoryRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
        this.taskHistoryRepository = taskHistoryRepository;
    }

    @CrossOrigin
    @RequestMapping("/task/history/{taskId}")
    public List<TaskHistory> getTaskHistory(@PathVariable Integer taskId) {
        Optional<Task> task = taskRepository.findById(taskId);
        if (task.isPresent()) {
            return taskHistoryRepository.findAllByTask(task.get());
        }

        return null;
    }

    @CrossOrigin
    @RequestMapping("/task/detail/{taskId}")
    public Task getTaskDetails(@PathVariable Integer taskId) {
        Optional<Task> task = taskRepository.findById(taskId);
        if (task.isPresent())
            return task.get();
        return null;
    }

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
