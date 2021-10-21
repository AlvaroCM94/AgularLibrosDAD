package org.alvaro.books.entity.dao;

import org.alvaro.books.entity.models.Empleado;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface EmpleadoDAO extends CrudRepository<Empleado, Integer>{
	
}
