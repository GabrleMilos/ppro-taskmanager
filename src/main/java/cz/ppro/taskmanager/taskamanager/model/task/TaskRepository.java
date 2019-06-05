package cz.ppro.taskmanager.taskamanager.model.task;

import cz.ppro.taskmanager.taskamanager.model.project.Project;
import cz.ppro.taskmanager.taskamanager.model.user.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Integer> {
    List<Task> findAll();
    List<Task> findAllByAssignedUserAndProject(User assignedUser, Project project);
    List<Task> findAllByAssignedUser(User assignedUser);
    List<Task> findAllByProject(Project p);
    Task findById(int id);
}
