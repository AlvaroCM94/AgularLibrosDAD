package org.alvaro.books.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.alvaro.books.entity.dao.EmpleadoDAO;
import org.alvaro.books.entity.models.Empleado;
@Service
public class IEmpleadoServiceImpl implements IEmpleadoService{
	
	@Autowired
	private EmpleadoDAO empleadoDAO;

	@Override
	public Optional<Empleado> getOne(int id){
		return empleadoDAO.findById(id);
	}

	@Override
	public List<Empleado> getAll(){
		return (List<Empleado>) empleadoDAO.findAll();
	}

	@Override
	public void add(Empleado empleado){
		empleadoDAO.save(empleado);
	}

	@Override
	public void update(Empleado empleado, int id){
		
	}

	@Override
	public void delete(int id){
		empleadoDAO.deleteById(id);
	}

}
