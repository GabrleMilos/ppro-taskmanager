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
        return projectRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping("/project/newProject/{projectName}/{email}")
    public boolean createProject (@PathVariable String projectName,@PathVariable String email ){
        Project project = new Project();
        project.setCreated(new Date());
        project.setManager(userRepository.findByEmail(email));
        project.setName(projectName);
        project.setUsersInProject(null);
        projectRepository.save(project);
        return true;
    }

}
