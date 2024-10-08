package com.campusdual.back.models.DAO;

import com.campusdual.back.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactDao extends JpaRepository<Contact, Integer> {

}