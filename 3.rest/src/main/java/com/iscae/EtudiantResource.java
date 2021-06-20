package com.iscae;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.json.JSONObject;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
 
@Path("/etudiant")
public class EtudiantResource {
 
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Etudiant> getAll() {
    	
    	EtudiantDao eDao = new EtudiantDao();
    	
        return eDao.getAll();
    }
    

    @GET
    @Path("/{idEtudiant}")
    @Produces(MediaType.APPLICATION_JSON)
    public Etudiant getById(@PathParam("idEtudiant") Integer id) {
    	
    	EtudiantDao eDao = new EtudiantDao();
    	
        return eDao.getById(id);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON) 
    @Produces(MediaType.APPLICATION_JSON) 
    public String add(Etudiant etudiant) {
    	EtudiantDao eDao = new EtudiantDao();
    	eDao.add(etudiant);
        return "Ok";
    }
    

    
    @PUT
    @Path("/{idEtudiant}")
    @Consumes(MediaType.APPLICATION_JSON) 
    @Produces(MediaType.APPLICATION_JSON) 
    public String update(Etudiant etudiant, @PathParam("idEtudiant") Integer id) {
    	EtudiantDao eDao = new EtudiantDao();
    	etudiant.setIdEtudiant(id);
    	eDao.update(etudiant);
        return "Ok";
    }
    

    @DELETE
    @Path("/{idEtudiant}")
    @Produces(MediaType.APPLICATION_JSON)
    public String delete(@PathParam("idEtudiant") Integer id) {
    	
    	EtudiantDao eDao = new EtudiantDao();
    	
    	eDao.remove(eDao.getById(id));
    	
        return "removed";
    }
    
}