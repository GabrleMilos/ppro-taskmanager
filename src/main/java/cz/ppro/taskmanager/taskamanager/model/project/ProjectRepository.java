package cz.ppro.taskmanager.taskamanager.model.project;

import cz.ppro.taskmanager.taskamanager.model.user.User;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ProjectRepository extends Repository<Project, Integer> {
    List<Project> findAll();
    List<Project> findAllByUsersInProject(List<User> users);
    void save(Project p);
    Project findById(int id);

}
