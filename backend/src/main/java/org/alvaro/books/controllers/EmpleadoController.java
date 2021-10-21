package org.alvaro.books.controllers;

import java.util.List;
import java.util.Optional;

import org.alvaro.books.entity.models.Empleado;
import org.alvaro.books.entity.services.IEmpleadoService;

//import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmpleadoController {

	@Autowired
	IEmpleadoService empleadoService;

	@GetMapping("/empleado")
	List<Empleado> getAll(){
		return empleadoService.getAll();
	}

	@GetMapping("/empleado/{id}")
	Empleado getOne(@PathVariable("id") int id) {
		Optional<Empleado> l = empleadoService.getOne(id);

		if(l.isPresent()) {
			return l.get();
		};

		return null;
	}

	@PostMapping("/empleado")
	void add(Empleado empleado) {
		System.out.println(empleado.getNombre());
		empleadoService.add(empleado);
	}

	@PostMapping(value="/empleado", consumes="application/json")
	void addUsingJson(@RequestBody String empleadoString) {
		ObjectMapper om = new ObjectMapper();
		try {
			Empleado empleado = om.readValue(empleadoString, Empleado.class);
			empleadoService.add(empleado);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@DeleteMapping("/empleado/{id}")
	void delete(@PathVariable("id") int id) {
		System.out.println(id);
		empleadoService.delete(id);
	}

}
