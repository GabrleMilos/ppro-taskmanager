package cz.ppro.taskmanager.taskamanager.model.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;


public interface UserRepository extends CrudRepository<User, Integer> {
    @Transactional(readOnly = true)
    Collection<User> findAll();
    User findByEmail(String email);
    User findByEmailAndPassword(String email,String password);
}
