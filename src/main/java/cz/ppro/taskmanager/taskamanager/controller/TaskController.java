package cz.ppro.taskmanager.taskamanager.controller;

import cz.ppro.taskmanager.taskamanager.model.project.Project;
import cz.ppro.taskmanager.taskamanager.model.project.ProjectRepository;
import cz.ppro.taskmanager.taskamanager.model.task.Task;
import cz.ppro.taskmanager.taskamanager.model.task.TaskRepository;
import cz.ppro.taskmanager.taskamanager.model.task_history.TaskHistory;
import cz.ppro.taskmanager.taskamanager.model.task_history.TaskHistoryRepository;
import cz.ppro.taskmanager.taskamanager.model.task_priority.TaskPriority;
import cz.ppro.taskmanager.taskamanager.model.task_priority.TaskPriorityRepository;
import cz.ppro.taskmanager.taskamanager.model.task_state.TaskState;
import cz.ppro.taskmanager.taskamanager.model.task_state.TaskStateRepository;
import cz.ppro.taskmanager.taskamanager.model.task_type.TaskType;
import cz.ppro.taskmanager.taskamanager.model.task_type.TaskTypeRepository;
import cz.ppro.taskmanager.taskamanager.model.user.User;
import cz.ppro.taskmanager.taskamanager.model.user.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class TaskController {
    private TaskRepository taskRepository;
    private UserRepository userRepository;
    private ProjectRepository projectRepository;
    private TaskHistoryRepository taskHistoryRepository;
    private TaskPriorityRepository taskPriorityRepository;
    private TaskStateRepository taskStateRepository;
    private TaskTypeRepository taskTypeRepository;

    public TaskController(TaskRepository taskRepository, UserRepository userRepository, ProjectRepository projectRepository, TaskHistoryRepository taskHistoryRepository,
                          TaskPriorityRepository taskPriorityRepository, TaskStateRepository taskStateRepository, TaskTypeRepository taskTypeRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
        this.taskHistoryRepository = taskHistoryRepository;
        this.taskPriorityRepository = taskPriorityRepository;
        this.taskStateRepository = taskStateRepository;
        this.taskTypeRepository = taskTypeRepository;
    }

    @CrossOrigin
    @RequestMapping("/task/new/{name}/{description}/{typeId}/{stateId}/{priorityId}/{userId}/{projectId}/{email}")
    public boolean createTask(
            @PathVariable String name,
            @PathVariable String description,
            @PathVariable String typeId,
            @PathVariable String stateId,
            @PathVariable String priorityId,
            @PathVariable String projectId,
            @PathVariable String userId,
            @PathVariable String email) {

        Task task = new Task(name,description,new Date());
        User user = userRepository.findByEmail(email);

        Integer typeIdInt = Integer.valueOf(typeId);
        Integer stateIdInt = Integer.valueOf(stateId);
        Integer priorityIdInt = Integer.valueOf(priorityId);
        Integer projectIdInt = Integer.valueOf(projectId);
        Integer userIdInt = Integer.valueOf(userId);

        TaskType taskType = taskTypeRepository.findById(typeIdInt);
        TaskState taskState = taskStateRepository.findById(stateIdInt);
        TaskPriority taskPriority = taskPriorityRepository.findById(priorityIdInt);
        User assignedUser = userRepository.findById(userIdInt).get();
        Project project = projectRepository.findById(projectIdInt).get();

        if(!project.getManager().getEmail().equals(email)){
            return false;
        }

        project.getUsersInProject().add(assignedUser);
        projectRepository.save(project);

        task.setType(taskType);
        task.setState(taskState);
        task.setPriority(taskPriority);
        task.setAssignedUser(assignedUser);
        task.setProject(project);


        taskRepository.save(task);
        taskHistoryRepository.save(new TaskHistory("User " + user.getEmail() + " created task: " + name, new Date(), user, task));
        return true;
    }

    @CrossOrigin
    @RequestMapping("/task/update/{id}/{name}/{description}/{typeId}/{stateId}/{priorityId}/{userId}/{email}")
    public Task updateTask(
            @PathVariable Integer id,
            @PathVariable String name,
            @PathVariable String description,
            @PathVariable String typeId,
            @PathVariable String stateId,
            @PathVariable String priorityId,
            @PathVariable String userId,
            @PathVariable String email) {
        Task task = taskRepository.findById(id).get();
        User user = userRepository.findByEmail(email);


        if (!name.equals(task.getName())) {
            task.setName(name);
            taskHistoryRepository.save(new TaskHistory("User " + user.getEmail() + " changed the name of task to: " + name, new Date(), user, task));
        }
        if (!description.equals(task.getDescription())) {
            task.setDescription(description);
            taskHistoryRepository.save(new TaskHistory("User " + user.getEmail() + " changed the description of task to: " + description, new Date(), user, task));
        }
        if (!typeId.equals("null")) {
            Integer typeIdInt = Integer.valueOf(typeId);
            TaskType taskType = taskTypeRepository.findById(typeIdInt);
            if (task.getType().getId() != typeIdInt) {
                task.setType(taskType);
                taskHistoryRepository.save(new TaskHistory("User " + user.getEmail() + " changed the type of task to: " + taskType.getName(), new Date(), user, task));
            }
        }
        if (!stateId.equals("null")) {
            Integer stateIdInt = Integer.valueOf(stateId);
            TaskState taskState = taskStateRepository.findById(stateIdInt);
            if (task.getState().getId() != stateIdInt) {
                task.setState(taskState);
                taskHistoryRepository.save(new TaskHistory("User " + user.getEmail() + " changed the state of task to: " + taskState.getName(), new Date(), user, task));
            }
        }
        if (!priorityId.equals("null")) {
            Integer priorityIdInt = Integer.valueOf(priorityId);
            TaskPriority taskPriority = taskPriorityRepository.findById(priorityIdInt);
            if (task.getPriority().getId() != priorityIdInt) {
                task.setPriority(taskPriority);
                taskHistoryRepository.save(new TaskHistory("User " + user.getEmail() + " changed the priority of task to: " + taskPriority.getName(), new Date(), user, task));
            }
        }
        if (!userId.equals("null")) {
            Integer userIdInt = Integer.valueOf(userId);
            User assignedUser = userRepository.findById(userIdInt).get();
            if (task.getAssignedUser().getId() != userIdInt) {
                Project project = task.getProject();
                project.getUsersInProject().add(assignedUser);
                projectRepository.save(project);

                task.setAssignedUser(assignedUser);
                taskHistoryRepository.save(new TaskHistory("User " + user.getEmail() + " changed assighned user to: " + assignedUser.getEmail(), new Date(), user, task));
            }
        }
        taskRepository.save(task);
        return task;
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

    @CrossOrigin
    @RequestMapping("/task/getUsers")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping("/task/getPriorities")
    public List<TaskPriority> getPriorities() {
        return taskPriorityRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping("/task/getStates")
    public List<TaskState> getStates() {
        return taskStateRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping("/task/getTypes")
    public List<TaskType> getTypes() {
        return taskTypeRepository.findAll();
    }
}
