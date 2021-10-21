package org.alvaro.books.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
import org.alvaro.books.entity.dao.EmpleadoDAO;
import org.alvaro.books.entity.models.Empleado;

public class EmpleadoServiceImpl implements EmpleadoService{
	
	@Autowired
	private EmpleadoDAO empleadoDao;

	@Override
	public Optional<Empleado> getOne(int id){
		return empleadoDao.findById(id);
	}

	@Override
	public List<Empleado> getAll(){
		return (List<Empleado>) empleadoDao.findAll();
	}

	@Override
	public void add(Empleado empleado){
		empleadoDao.save(empleado);
	}

	@Override
	public void update(Empleado empleado, int id){
		
	}

	@Override
	public void delete(int id){
		empleadoDao.deleteById(id);
	}

}
