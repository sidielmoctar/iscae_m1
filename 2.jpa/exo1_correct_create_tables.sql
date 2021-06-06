CREATE TABLE etudiant
(
    idEtudiant INT NOT NULL AUTO_INCREMENT,
    prenom varchar(250) NOT NULL,
    nom   varchar(250)  NOT NULL,
    genre varchar(25) not null,
    PRIMARY KEY (idEtudiant)
);

CREATE TABLE professeur
(
    idProf INT NOT NULL AUTO_INCREMENT,
    prenom varchar(250) NOT NULL,
    nom   varchar(250)  NOT NULL,
    PRIMARY KEY (idProf)
);


CREATE TABLE matiere
(
    idMat INT NOT NULL AUTO_INCREMENT,
    intitule varchar(250) NOT NULL,
    PRIMARY KEY (idMat)
);


CREATE TABLE professeur_rel_matiere
(
    idProfRelMat INT NOT NULL AUTO_INCREMENT,
    idProf int NOT NULL,
    idMat int NOT NULL,
    PRIMARY KEY (idProfRelMat)
);


ALTER TABLE professeur_rel_matiere
    ADD FOREIGN KEY (idMat)
        REFERENCES matiere (idMat);

ALTER TABLE professeur_rel_matiere
    ADD FOREIGN KEY (idProf)
        REFERENCES professeur (idProf);


CREATE TABLE note
(
    idNote INT NOT NULL AUTO_INCREMENT,
    note float not null,
    idEtudiant int NOT NULL,
    idProfRelMat int NOT NULL,
    commentaire varchar(1000) NOT NULL,
    PRIMARY KEY (idNote)
);

ALTER TABLE note
    ADD FOREIGN KEY (idEtudiant)
        REFERENCES etudiant (idEtudiant);
        
ALTER TABLE note
    ADD FOREIGN KEY (idProfRelMat)
        REFERENCES professeur_rel_matiere (idProfRelMat);



