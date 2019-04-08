package cz.ppro.taskmanager.taskamanager.model.project;

import cz.ppro.taskmanager.taskamanager.model.DbEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "project")
public class Project extends DbEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "manager_id")
    private long managerId;

    @Column(name = "created")
    private Date created;

    public Project(String name, long managerId, Date created) {
        this.name = name;
        this.managerId = managerId;
        this.created = created;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getManagerId() {
        return managerId;
    }

    public void setManagerId(long managerId) {
        this.managerId = managerId;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }
}
