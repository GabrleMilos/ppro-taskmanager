package cz.ppro.taskmanager.taskamanager.model.task_priority;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface TaskPriorityRepository extends Repository<TaskPriority, Integer> {
    List<TaskPriority> findAll();
    TaskPriority findById(int id);
}
