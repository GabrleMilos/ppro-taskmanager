package cz.ppro.taskmanager.taskamanager.model.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.awt.print.Pageable;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    final UserRepository userRepository;

    @Autowired
    UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }


    @Override
    public Page<User> getByLastName(String lastName, Pageable pageable) {
        return userRepository.findAllByLastName(lastName,pageable);
    }
}
