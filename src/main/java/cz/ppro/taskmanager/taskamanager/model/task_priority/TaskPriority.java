package cz.ppro.taskmanager.taskamanager.model.task_priority;

import cz.ppro.taskmanager.taskamanager.model.DbEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "task_priorities")
public class TaskPriority extends DbEntity {

    @Column(name = "name")
    private String name;

    public TaskPriority(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
