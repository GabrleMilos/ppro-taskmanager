package cz.ppro.taskmanager.taskamanager.model.project;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface ProjectRepository extends Repository<Project, Integer> {
    List<Project> findAll();
    List<Project> findAllByUsersInProject();
    Project save(Project p);

}
