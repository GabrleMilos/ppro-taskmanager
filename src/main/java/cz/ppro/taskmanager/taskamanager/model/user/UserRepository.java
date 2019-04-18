package cz.ppro.taskmanager.taskamanager.model.user;

import org.springframework.data.repository.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;


public interface UserRepository extends Repository<User, Integer> {
    @Transactional(readOnly = true)
    Collection<User> findAll();

    User findByEmailAndPassword(String email,String password);
}
