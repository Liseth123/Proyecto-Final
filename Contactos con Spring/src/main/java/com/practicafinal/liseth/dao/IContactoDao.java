package com.practicafinal.liseth.dao;



import org.springframework.data.repository.CrudRepository;

import com.practicafinal.liseth.entity.Contacto;

public interface IContactoDao extends CrudRepository<Contacto,Long>{
	
}

