package cz.ppro.taskmanager.taskamanager.model.user;

import org.springframework.data.domain.Page;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.awt.print.Pageable;


public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    Page<User> findAllByLastName(String lastName, Pageable pageable);
}
