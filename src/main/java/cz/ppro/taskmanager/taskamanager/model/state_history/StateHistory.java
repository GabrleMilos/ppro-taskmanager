package cz.ppro.taskmanager.taskamanager.model.state_history;

import cz.ppro.taskmanager.taskamanager.model.DbEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "state_history")
public class StateHistory extends DbEntity {
    @Column(name = "text")
    private String text;

    @Column(name = "updated")
    private Date updated;

    //TODO: dodelat cizi klice


    public StateHistory(String text, Date updated) {
        this.text = text;
        this.updated = updated;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }
}
