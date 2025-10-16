/*
Como refugio de mascotas
Quiero publicar una mascota para adopcion
Para acelerar su adopcion haciendo visible la mascota a un gran publico

Criterio de confirmacion
- Dado que ingreso una mascota 
   con nombre: firulai, de raza: salchicha
   y edad: 6 meses y registro la mascota
   debereria ver la mascota en una lista de mascotas en adopcion
*/

describe("Mascotas", () => {
  it("Publicar mascota", () => {
    cy.visit("/");
    cy.get("#nombre-mascota").type("Firulai");
    cy.get("#raza").type("Salchicha");
    cy.get("#edad").type("6 meses");
    cy.get("publicar-button").click();
    cy.get("#resultado-div").should(
      "contain",
      "Nombre: Firulai, Raza: Salchicha, Edad: 6 meses"
    );
  });
});
