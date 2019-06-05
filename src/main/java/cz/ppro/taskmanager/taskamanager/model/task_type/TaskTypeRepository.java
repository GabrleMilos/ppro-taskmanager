package cz.ppro.taskmanager.taskamanager.model.task_type;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface TaskTypeRepository extends Repository<TaskType, Integer> {
    List<TaskType> findAll();
    TaskType findById(int id);
}
