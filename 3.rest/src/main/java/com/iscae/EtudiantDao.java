package com.iscae;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

public class EtudiantDao {

	EntityManagerFactory emf = Persistence.createEntityManagerFactory("EtudiantUnit");
	EntityManager em = emf.createEntityManager();

	public void add(Etudiant etudiant) {

		em.getTransaction().begin();

		em.persist(etudiant);

		em.getTransaction().commit();

//		em.close();
//
//		emf.close();
	}

	public void update(Etudiant etudiant) {

		em.getTransaction().begin();

		em.merge(etudiant);

		em.getTransaction().commit();

	}

	public void remove(Etudiant etudiant) {

		em.getTransaction().begin();

		em.remove(etudiant);

		em.getTransaction().commit();

	}

	public Etudiant getById(Integer id) {

		String sql = "select e from Etudiant e where idEtudiant =:id ";

		TypedQuery<Etudiant> qr = em.createQuery(sql, Etudiant.class);

		qr.setParameter("id", id);

		List<Etudiant> etudiants = qr.getResultList();

		Etudiant etudiant = null;

		if (etudiants.size() > 0) {
			etudiant = etudiants.get(0);
		}

		return etudiant;

	}

	public List<Etudiant> getAll() {

		String sql = "select e from Etudiant e ";

		TypedQuery<Etudiant> qr = em.createQuery(sql, Etudiant.class);

		List<Etudiant> etudiants = qr.getResultList();

		return etudiants;

	}

}
