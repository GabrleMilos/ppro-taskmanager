package cz.ppro.taskmanager.taskamanager.model.user;

import org.springframework.data.repository.Repository;

import java.util.Collection;


public interface UserRepository extends Repository<User, Integer> {
    Collection<User> findAll();
}
