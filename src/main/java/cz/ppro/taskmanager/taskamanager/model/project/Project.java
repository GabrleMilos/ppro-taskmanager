package cz.ppro.taskmanager.taskamanager.model.project;

import cz.ppro.taskmanager.taskamanager.model.DbEntity;
import cz.ppro.taskmanager.taskamanager.model.user.User;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "projects")
public class Project extends DbEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "created")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date created;

    @ManyToOne
    @JoinColumn(name = "manager_id")
    private User manager;

    @ManyToMany
    @JoinTable(name = "users_projects",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<User> usersInProject;

    public Project(String name, Date created) {
        this.name = name;
        this.created = created;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public User getManager() {
        return manager;
    }

    public void setManager(User manager) {
        this.manager = manager;
    }

    public Set<User> getUsersInProject() {
        return usersInProject;
    }

    public void setUsersInProject(Set<User> usersInProject) {
        this.usersInProject = usersInProject;
    }
}
