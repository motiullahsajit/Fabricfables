package com.fabricfables.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabricfables.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
    public User findByEmail(String email);
}
