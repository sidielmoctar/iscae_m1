package com.iscae;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Etudiant {
	
	private Integer idEtudiant;
	private String prenom;
	private String nom;
	private String genre;
	
	@Id
	@Column(name = "idEtudiant")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getIdEtudiant() {
		return idEtudiant;
	}
	public void setIdEtudiant(Integer idEtudiant) {
		this.idEtudiant = idEtudiant;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	

	
	

}
