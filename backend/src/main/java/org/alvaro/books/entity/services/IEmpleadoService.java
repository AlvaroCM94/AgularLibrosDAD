package org.alvaro.books.entity.services;

import java.util.List;
import java.util.Optional;

import org.alvaro.books.entity.models.Empleado;

public interface IEmpleadoService {
	Optional<Empleado> getOne(int id);
	List<Empleado> getAll();
	void add(Empleado empleado);
	void update(Empleado empleado, int id);
	void delete(int id);
}
