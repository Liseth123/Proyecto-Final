package com.practicafinal.liseth.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.practicafinal.liseth.dao.IContactoDao;
import com.practicafinal.liseth.entity.Contacto;

@Service
public class ContactoServiceImpl implements IContactoService{

	@Autowired
	private IContactoDao contactoDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Contacto> findAll() {
		return (List<Contacto>) contactoDao.findAll();
	}

	@Override
	@Transactional
	public void save(Contacto contacto) {
		contactoDao.save(contacto);
		
	}

	@Override
	@Transactional(readOnly = true)
	public Contacto findOne(Long id) {
		return contactoDao.findOne(id);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		contactoDao.delete(id);
		
	}

}
