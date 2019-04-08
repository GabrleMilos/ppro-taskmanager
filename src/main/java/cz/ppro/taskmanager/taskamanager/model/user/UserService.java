package cz.ppro.taskmanager.taskamanager.model.user;

import org.springframework.data.domain.Page;

import java.awt.print.Pageable;

public interface UserService {
    Page<User> getByLastName(String lastName, Pageable pageable);
}
