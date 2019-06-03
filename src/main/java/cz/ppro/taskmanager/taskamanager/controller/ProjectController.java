package cz.ppro.taskmanager.taskamanager.controller;

import cz.ppro.taskmanager.taskamanager.model.project.Project;
import cz.ppro.taskmanager.taskamanager.model.project.ProjectRepository;
import cz.ppro.taskmanager.taskamanager.model.user.User;
import cz.ppro.taskmanager.taskamanager.model.user.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class ProjectController {
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public ProjectController(ProjectRepository projectRepository, UserRepository userRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    @CrossOrigin
    @RequestMapping("/project/myProjects/{email}")
    public List<Project> getProjectsForUser (@PathVariable String email){
        List<User> users = new ArrayList<>();
        users.add(userRepository.findByEmail(email));
        return projectRepository.findAllByUsersInProject(users);
    }

    @CrossOrigin
    @RequestMapping("/project/detail/{projectId}")
    public Project getProject(@PathVariable int projectId){
        return projectRepository.findById(projectId);
    }

    @CrossOrigin
    @RequestMapping("/project/newProject/{projectName}/{email}")
    public Project createProject (@PathVariable String projectName,@PathVariable String email ){
        User user = userRepository.findByEmail(email);
        Project project = new Project();
        project.setCreated(new Date());
        project.setManager(user);
        project.setName(projectName);
        project.getUsersInProject().add(user);
        return projectRepository.save(project);
    }

    @CrossOrigin
    @RequestMapping("/project/update/{projectId}/{projectName}/{email}")
    public boolean updateProject (@PathVariable int projectId,@PathVariable String projectName ){
        Project project = projectRepository.findById(projectId);
        project.setName(projectName);
        projectRepository.save(project);
        return true;
    }

}
