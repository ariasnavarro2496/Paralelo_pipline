class proyectouno {


CoordinadorAsignaTecnico() {
    let tiempo = 5000;
    before(() => {
        cy.visit("https://vtr4.test.etadirect.com/");
        cy.title().should("eq", "Oracle Field Service");
        cy.wait(tiempo);
        });
    }

TecnicoIniciaActividad() {
    let tiempo = 5000;
    before(() => {
        cy.visit("https://vtr4.test.etadirect.com/");
        cy.title().should("eq", "Oracle Field Service");
        cy.wait(tiempo);
        });
    }





}// fin de la clase

export default proyectouno;