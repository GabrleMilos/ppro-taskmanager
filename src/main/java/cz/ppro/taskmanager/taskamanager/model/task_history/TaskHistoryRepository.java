package cz.ppro.taskmanager.taskamanager.model.task_history;

import cz.ppro.taskmanager.taskamanager.model.task.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskHistoryRepository extends CrudRepository<TaskHistory, Integer> {
    List<TaskHistory> findAllByTask(Task task);
    List<TaskHistory> findAll();
}
