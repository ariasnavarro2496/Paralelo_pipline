import 'cypress-xpath';




const exp = require("constants");   //libreria para importar constantes
            require('cypress-plugin-tab'); //libreria para hacer tabulaciones
            

describe ('Automatizacion Alta 1play HFC', () => {


        it('Inicio de sesion Siebel', () => {
            cy.log('Login en Siebel');
            // Ejecutar script de Python para eliminar capturas y esperar que termine
            cy.exec('python cypress/e2e/integracion/Alta1PlayVTR-HFC/Scripts.py/EliminarCapture.py').then((result) => {
                cy.log('Capturas eliminadas:', result.stdout); // Muestra el resultado en Cypress
                });
            
            cy.visit('http://172.17.227.70:2080/ecommunications_VTR_esn/start.swe?SWECmd=Login&SWEBHWND=1&SRN=&SWEHo=172.17.227.70&SWETS=1712839838');
            cy.title().should('eq', 'Siebel Communications - DESARROLLO VTR'); //verificar que el titulo sea correcto
            cy.log('Titulo Correcto');
            cy.Insertar_texto("#s_swepi_1", "skim", 2000)  //Ingresar usuario
            cy.Insertar_texto("#s_swepi_2", "skim", 2000)  //Ingresar contraseña
            cy.get("#s_swepi_22").click(); //click en boton de login
            Cypress.on('uncaught:exception', (err, runnable) => {
                // Retorna false para evitar que Cypress falle la prueba por este error
                return false;
            });
            cy.wait(6000); //esperar 6 segundos
            cy.Click_get("#7_s_1_l_Position", 1000) //click en Bodegero
            cy.Click_get("#s_1_1_0_0_Ctrl", 5000) //click en Cambiar puesto de trabajo
            cy.wait(5000); //esperar 5 segundos
            cy.Click_xpath('//*[@id="s_sctrl_tabScreen"]/ul/li[2]', 5000) //click en Clientes
            cy.Click_xpath('//*[@id="s_sctrl_tabView"]/ul/li[2]', 5000) //click en Lista de clientes
            cy.wait(5000); //esperar 5 segundos
            cy.get("#s_2_1_117_0_Ctrl", { timeout: 20000 }).click(); //click en Cuenta nueva
            cy.xpath('//*[@id="a_2"]/div/table/tbody/tr[3]/td[3]/div/input').should('be.visible'); 
            cy.wait(8000); //esperar 8 segundos

            cy.log('Creacion de la cuenta');    //creacion de la cuenta
            cy.exec('python cypress/e2e/integracion/Alta1PlayVTR-HFC/Scripts.py/Rut_Aleatoreo.py').then((result) => {
                const rutGenerado = result.stdout; //guardar rut generado
                cy.log('RUT generado: ', rutGenerado); //mostrar rut generado en consola
            
            cy.xpath('//*[@id="a_2"]/div/table/tbody/tr[3]/td[3]/div/input', { timeout: 30000 }).should("be.visible").type(rutGenerado + '{pagedown}'); //ingresar rut
            //.tab(). 
            //type("Jairo").tab(). //ingresar nombre
            //type("Arias").tab(). //ingresar apellido paterno
            //type("Navarro") //ingresar apellido materno
            cy.wait(5000); //esperar 5 segundos
            cy.xpath('//*[@id="a_2"]/div/table/tbody/tr[4]/td[3]/div/input').click(); //click nombre
            cy.xpath('//*[@id="a_2"]/div/table/tbody/tr[4]/td[3]/div/input', { timeout: 30000 }).type("jairo"); //ingresa nombre     
            cy.xpath('//*[@id="a_2"]/div/table/tbody/tr[5]/td[3]/div/input').click(); //click apellido
            cy.xpath('//*[@id="a_2"]/div/table/tbody/tr[5]/td[3]/div/input', { timeout: 30000 }).type("arias"); //ingresa apellido       
            cy.xpath('//*[@id="a_2"]/div/table/tbody/tr[5]/td[5]/div/input ', { timeout: 30000 }).type("leonardo@gmail.com"); //ingresar email
            
            cy.get("#s_2_1_125_0_icon", { timeout: 20000 }).click(); //click Direccion
            cy.wait(8000); //esperar 8 segundos
            cy.xpath('//*[@id="sieb-ui-popup-mvg-available"]/form/table/tbody/tr[1]/td[2]/span[4]/input', { timeout: 30000 }).type("VARAS MENA");
            cy.get("#s_4_1_189_0_Ctrl", { timeout: 20000 }).click(); //click Buscar
            cy.get("#last_pager_s_4_l", { timeout: 20000 }).click(); //click Siguiente
            cy.get("#6_s_4_l_Street_Address", { timeout: 20000 }).click(); //seleccionar Direccion    
            cy.screenshot('1 Alta1PlayVTR-HFC', { capture: 'fullPage' });
            cy.get("#s_3_1_186_0_Ctrl", { timeout: 20000 }).click();
            cy.get("#s_3_1_190_0_Ctrl", { timeout: 20000 }).click({force : true }); //click en Aceptar


            cy.log('Agrega numero de telefono');
            cy.wait(10000); //esperar 5 segundos
            cy.get("#s_2_1_25_0_icon", { timeout: 60000 }).click();
            cy.xpath('/html/body/div[8]/div[2]/div/div/div/form/div/table/tbody/tr/td[1]/span[2]/button', { timeout: 20000 }).click(); //click en Nuevo
            cy.xpath('/html/body/div[8]/div[2]/div/div/div/form/div/div[1]/div/div/div[3]/div[3]/div/table/tbody/tr[2]/td[3]/input', { timeout: 30000 }).type("999555888"); //ingresar numero de telefono
            cy.xpath('/html/body/div[8]/div[2]/div/div/div/form/div/div[2]/span/button', { timeout: 20000 }).click();   
            cy.screenshot('2 Alta1PlayVTR-HFC', { capture: 'fullPage' });
            //cy.wait(8000); //esperar 5 segundos
            cy.wait(5000); //esperar 5 segundos
            cy.xpath('//*[@id="s_2_1_120_0_Ctrl"]').click(); //click en guardar cuenta
            cy.wait(10000); //esperar 5 segundos

            cy.log('Crea un nuevo registro de pedido en el sistema'); //crear un nuevo registro de pedido
            cy.get('body').type('{pageUp}');
            //cy.xpath('//*[@id="1_s_1_l_OCS_Identificador_de_la_cuenta"]/a', { timeout: 60000 }).should('be.visible');
            cy.xpath('//*[@id="1_s_1_l_OCS_Identificador_de_la_cuenta"]/a', { timeout: 70000 }).click(); //click en identificador de la cuenta
            cy.wait(5000); //esperar 3 segundos
            cy.xpath('//*[@id="s_at_m_7"]', { timeout: 20000 }).click()
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[3]/div/div[3]/div[2]/div/form/span/div/div[1]/div[2]/span[1]/span/ul/li[4]/a', { timeout: 20000 }).click()
            cy.xpath('//*[@id="1_s_7_l_Order_Number"]/a ', { timeout: 20000 }).click() //click en numero de orden
            cy.wait(5000); //esperar 3 segundos
            
            cy.log('Examina el catalogo de ordenes de venta.'); //examinar el catalogo de ordenes de venta
            cy.viewport(1920, 1080); //resolucion de pantalla
            cy.wait(5000); //esperar 3 segundos
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[2]/div[2]/ul/li[2]/a', { timeout: 60000 }).should('be.visible');  //click en catalogo de ordenes de venta
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[2]/div[2]/ul/li[2]/a').click();
            cy.wait(10000); //esperar 5 segundos
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[3]/div[1]/div[2]/div/div/div/span/table/tbody/tr[1]/td/div/ul/li/ul/li[1]/i', { timeout: 60000 }).should('be.visible'); 
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[3]/div[1]/div[2]/div/div/div/span/table/tbody/tr[1]/td/div/ul/li/ul/li[1]/i').click(); //click en internet
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[3]/div[1]/div[2]/div/div/div/span/table/tbody/tr[1]/td/div/ul/li/ul/li[1]/ul/li[1]/i', { timeout: 60000 }).should('be.visible');
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[3]/div[1]/div[2]/div/div/div/span/table/tbody/tr[1]/td/div/ul/li/ul/li[1]/ul/li[1]/i').click(); 
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[3]/div[1]/div[2]/div/div/div/span/table/tbody/tr[1]/td/div/ul/li/ul/li[1]/ul/li[1]/ul/li[3]/a', { timeout: 60000 }).click(); 
            cy.wait(8000); //esperar 8 segundos
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[3]/div[2]/div[3]/div/div/div/form/span/div/div[3]/div/div/div[5]/div/table/tbody/tr/td[2]/table/tbody/tr/td[4]/span', { timeout: 60000 }).click(); 
            cy.wait(5000); //esperar 5 segundos
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[3]/div[2]/div[3]/div/div/div/form/span/div/div[3]/div/div/div[3]/div[3]/div/table/tbody/tr[5]/td[2]', { timeout: 60000 }).click(); //promocion internet finix 0322
            cy.screenshot('3 Alta1PlayVTR-HFC', { capture: 'fullPage' })
            cy.xpath('//*[@id="a_6"]/div[2]/div[1]', { timeout: 60000 }).click(); //click en guardar
            cy.wait(30000); //esperar 20 segundos

            cy.log('Se envía a TSQ, Genera documento y se Envía pedido'); //Sesion TSQ
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/div/div[1]/div/div[2]/div[2]/ul/li[3]/a', { timeout: 30000 }).click() //click en detalles
            cy.xpath('//*[@id="a_1"]/div/table/tbody/tr[14]/td[6]/div/input', { timeout: 60000 }).should('be.visible'); //deuda no vinculante
            cy.xpath('//*[@id="a_1"]/div/table/tbody/tr[14]/td[6]/div/input').click(); 
            cy.xpath('//*[@id="a_1"]/div/table/tbody/tr[16]/td[4]/div/input ', { timeout: 60000 }).should('be.visible');  //pago upfront
            cy.xpath('//*[@id="a_1"]/div/table/tbody/tr[16]/td[4]/div/input ').click(); 
            cy.wait(5000); //esperar 5 segundos
            cy.xpath('//*[@id="s_1_1_11_0_Ctrl"] ', { timeout: 30000 }).click() //TSQ
            cy.wait(30000); //esperar 30 segundos
            //cy.xpath('//*[@id="s_1_1_72_0_Ctrl"]', { timeout: 30000 }).click() //generar documento
            cy.xpath('//*[@id="s_1_1_72_0_Ctrl"]').invoke('removeAttr', 'target').click();
                
                // Esperar a que la nueva página cargue y volver atrás
            cy.wait(2000); // Ajusta según sea necesario
            cy.go('back');
            cy.wait(5000); // Ajusta según sea necesario
            cy.screenshot('4 Alta1PlayVTR-HFC', { capture: 'fullPage' })
            cy.wait(5000); // Ajusta según sea necesario
            cy.reload();//recargar pagina
            
        

            
            cy.wait(10000); //esperar 10 segundos
            cy.xpath('//*[@id="s_1_1_37_0_icon"]"] ', { timeout: 60000 }).should('be.visible');  //metodo de envio
            cy.xpath('//*[@id="s_1_1_37_0_icon"]"] ', { timeout: 60000 }).click();  
            cy.wait(15000); //esperar 15 segundos
            cy.xpath('/html/body/div[1]/div/div[5]/div/div[7]/ul[3]/li[2]', { timeout: 60000 }).click();  //visita tecnica
            cy.wait(10000); //esperar 10 segundos
            cy.xpath('//*[@id="s_1_1_82_0_Ctrl"]', { timeout: 60000 }).click();  //enviar pedido

            





    

            
            cy.pause(); //pausar
        }); //ejecutar script de creacion de cliente
        
        
    });
    //*.only prioridad
    it('Inicio de sesion COORDINADOR', () => {
        cy.log('Login en Coordinador asignacion de tecnicos');
        cy.visit('https://vtr4.test.etadirect.com');



        cy.get('body').then(($body) => {
        $body.append('<button id="continueTest">Continuar</button>');
        cy.get('#continueTest').click();
        });

        
        
        
        
        

        cy.pause(); //pausar

    });
});        