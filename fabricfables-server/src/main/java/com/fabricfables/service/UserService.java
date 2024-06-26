package com.fabricfables.service;

import com.fabricfables.exception.UserException;
import com.fabricfables.model.User;

public interface UserService {
    public User findUserById(Long userId) throws UserException;
    public User findUserProfileByJwt(String jwt) throws UserException;    

}
