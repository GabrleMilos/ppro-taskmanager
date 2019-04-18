package cz.ppro.taskmanager.taskamanager.model.task;

import cz.ppro.taskmanager.taskamanager.model.DbEntity;
import cz.ppro.taskmanager.taskamanager.model.project.Project;
import cz.ppro.taskmanager.taskamanager.model.task_priority.TaskPriority;
import cz.ppro.taskmanager.taskamanager.model.task_state.TaskState;
import cz.ppro.taskmanager.taskamanager.model.task_type.TaskType;
import cz.ppro.taskmanager.taskamanager.model.user.User;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tasks")
public class Task  extends DbEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "created")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date created;

    @ManyToOne
    @JoinColumn(name="assigned_user_id")
    private User assignedUser;

    @ManyToOne
    @JoinColumn(name="project_id")
    private Project project;


    @ManyToOne
    @JoinColumn(name="priority_id")
    private TaskPriority priority;

    @ManyToOne
    @JoinColumn(name="state_id")
    private TaskState state;

    @ManyToOne
    @JoinColumn(name="type_id")
    private TaskType type;

    public Task() {
    }

    public Task(String name, String description, Date created) {
        this.name = name;
        this.description = description;
        this.created = created;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public User getAssignedUser() {
        return assignedUser;
    }

    public void setAssignedUser(User assignedUser) {
        this.assignedUser = assignedUser;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public TaskPriority getPriority() {
        return priority;
    }

    public void setPriority(TaskPriority priority) {
        this.priority = priority;
    }

    public TaskState getState() {
        return state;
    }

    public void setState(TaskState state) {
        this.state = state;
    }

    public TaskType getType() {
        return type;
    }

    public void setType(TaskType type) {
        this.type = type;
    }
}
