package cz.ppro.taskmanager.taskamanager.model.task;

import cz.ppro.taskmanager.taskamanager.model.project.Project;
import cz.ppro.taskmanager.taskamanager.model.user.User;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface TaskRepository extends Repository<Task, Integer> {
    List<Task> findAll();
    List<Task> findAllByAssignedUserAndProject(User assignedUser, Project project);
    List<Task> findAllByAssignedUser(User assignedUser);
}
