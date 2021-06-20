package com.iscae;

public class EtudiantDto {
	private Integer idEtudiant;
	private String prenom;
	private String nom;
	private String genre;
	
	public EtudiantDto(Integer idEtudiant, String prenom, String nom, String genre) {
		super();
		this.idEtudiant = idEtudiant;
		this.prenom = prenom;
		this.nom = nom;
		this.genre = genre;
	}
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
