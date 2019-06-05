package cz.ppro.taskmanager.taskamanager.model.task_state;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface TaskStateRepository extends Repository<TaskState, Integer> {
    List<TaskState> findAll();
    TaskState findById(int id);
}
