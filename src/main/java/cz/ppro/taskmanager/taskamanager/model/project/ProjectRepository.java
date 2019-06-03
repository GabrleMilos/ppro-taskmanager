package cz.ppro.taskmanager.taskamanager.model.project;

import cz.ppro.taskmanager.taskamanager.model.user.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProjectRepository extends CrudRepository<Project, Integer> {
    List<Project> findAll();
    List<Project> findAllByUsersInProject(List<User> users);
    Project findById(int id);

}
