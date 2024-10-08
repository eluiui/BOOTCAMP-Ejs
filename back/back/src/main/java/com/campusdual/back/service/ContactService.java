package com.campusdual.back.service;

import com.campusdual.back.api.IContactService;
import com.campusdual.back.models.Contact;
import com.campusdual.back.models.DAO.ContactDao;
import com.campusdual.back.models.DTO.ContactDto;
import com.campusdual.back.models.DTO.dtomapper.ContactMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("ContactService")
@Lazy
public class ContactService implements IContactService {
    @Autowired
    private ContactDao contactDao;
    @Override
    public ContactDto queryContact(ContactDto contactDTO) {
        Contact contact = ContactMapper.INSTANCE.toEntity(contactDTO);
        return ContactMapper.INSTANCE.toDTO(contactDao.getReferenceById(contact.getId()));
    }

    @Override
    public List<ContactDto> queryAllContacts() {
        return ContactMapper.INSTANCE.toDTOList(contactDao.findAll());
    }

    @Override
    public int insertContact(ContactDto contactDTO) {
        Contact contact = ContactMapper.INSTANCE.toEntity(contactDTO);
        contactDao.saveAndFlush(contact);
        return contact.getId();
    }

    @Override
    public int updateContact(ContactDto contactDTO) {
        return insertContact(contactDTO);
    }

    @Override
    public int deleteContact(ContactDto contactDTO) {
        int id = contactDTO.getId();
        Contact contact= ContactMapper.INSTANCE.toEntity(contactDTO);
        contactDao.delete(contact);
        return  id;
    }
}
