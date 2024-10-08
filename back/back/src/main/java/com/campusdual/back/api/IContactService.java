package com.campusdual.back.api;

import com.campusdual.back.models.DTO.ContactDto;

import java.util.List;

public interface IContactService {
    ContactDto queryContact(ContactDto contactDTO);

    List<ContactDto> queryAllContacts();

    int insertContact(ContactDto contactDTO);

    int updateContact(ContactDto contactDTO);

    int deleteContact(ContactDto contactDTO);
}