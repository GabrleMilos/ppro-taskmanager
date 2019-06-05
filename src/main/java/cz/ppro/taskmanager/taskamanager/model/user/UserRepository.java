package cz.ppro.taskmanager.taskamanager.model.user;

import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface UserRepository extends CrudRepository<User, Integer> {
    List<User> findAll();
    User findByEmail(String email);
    User findByEmailAndPassword(String email,String password);
    User findById(int id);
}
