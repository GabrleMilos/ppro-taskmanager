package cz.ppro.taskmanager.taskamanager.model.state;

import cz.ppro.taskmanager.taskamanager.model.DbEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "state")
public class State  extends DbEntity {

    @Column(name = "name")
    private String name;

//TODO: dodelat cizi klice


    public State(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
