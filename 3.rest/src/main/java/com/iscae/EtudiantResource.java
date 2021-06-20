package com.iscae;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.json.JSONObject;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
 
@Path("/etudiant")
public class EtudiantResource {
 
    @GET
    @Path("/tous")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Etudiant> getStudents() {
    	
    	EtudiantDao eDao = new EtudiantDao();
    	
        return eDao.getAll();
    }
    

    @GET
    @Path("/{idEtudiant}")
    @Produces(MediaType.APPLICATION_JSON)
    public Etudiant getStudent(@PathParam("idEtudiant") Integer id) {
    	
    	EtudiantDao eDao = new EtudiantDao();
    	
        return eDao.getById(id);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON) 
    @Produces(MediaType.APPLICATION_JSON) 
    public Etudiant addStudent(Etudiant etudiant) {
        return etudiant;
    }
    
}