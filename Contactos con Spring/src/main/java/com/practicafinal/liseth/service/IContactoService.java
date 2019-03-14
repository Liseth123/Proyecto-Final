package com.practicafinal.liseth.service;

import java.util.List;

import com.practicafinal.liseth.entity.Contacto;

public interface IContactoService {

	public List<Contacto> findAll();

	public void save(Contacto contacto);
	
	public Contacto findOne(Long id);
	
	public void delete(Long id);

}
