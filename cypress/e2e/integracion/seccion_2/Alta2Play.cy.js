import 'cypress-xpath';

const exp = require("constants");

describe ('Curso de cypress seccion 1', () => {

        it('Inicio de sesion', () => {
            cy.log('Login en Siebel');
            cy.visit('http://172.17.227.70:2080/ecommunications_VTR_esn/start.swe?SWECmd=Login&SWEBHWND=1&SRN=&SWEHo=172.17.227.70&SWETS=1712839838');
            cy.get("#s_swepi_1").type("skim");  //ingresar usuario
            cy.get("#s_swepi_2").type("skim");  //ingresar contraseña
            cy.wait(2000);
            cy.get("#s_swepi_22").click(); //click en boton de login
            Cypress.on('uncaught:exception', (err, runnable) => {
                // Retorna false para evitar que Cypress falle la prueba por este error
                return false;
            });
            cy.wait(3000); //esperar 3 segundos
            cy.get("#7_s_1_l_Position" , { timeout: 20000 }).should('be.visible'); //verificar que sea visible VTR bodeguero
            cy.get("#7_s_1_l_Position").click(); //click en Bodeguero
            cy.get("#s_1_1_0_0_Ctrl").click(); //click en Cambiar puesto de trabajo
            cy.wait(3000); //esperar 3 segundos
            cy.xpath('//*[@id="s_sctrl_tabScreen"]/ul/li[2]', { timeout: 20000 }).click(); //click Clientes
            cy.xpath('//*[@id="s_sctrl_tabView"]/ul/li[2]', { timeout: 20000 }).click(); //click Lista de clientes
            cy.get("#s_2_1_117_0_Ctrl", { timeout: 20000 }).click(); //click en Cuenta nueva
            cy.xpath('//*[@id="a_2"]/div/table/tbody/tr[3]/td[3]/div/input').should('be.visible'); 
            cy.wait(3000); //esperar 3 segundos
            cy.exec('python cypress/e2e/integracion/seccion_2/Rut_Aleatoreo.py').then((result) => {
                const rutGenerado = result.stdout; //guardar rut generado
                cy.log('RUT generado: ', rutGenerado); //mostrar rut generado en consola
            
            cy.xpath('//*[@id="a_2"]/div/table/tbody/tr[3]/td[3]/div/input', { timeout: 30000 }).type(rutGenerado); //ingresar rut
        }); //ejecutar script de creacion de cliente
        
        
    });
});        