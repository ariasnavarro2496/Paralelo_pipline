function esperarYRecargar(selector, intentos = 5) {
    if (intentos === 0) {
        throw new Error('El elemento no apareció después de varios intentos');
    }
    cy.xpath(selector, { timeout: 8000 }).should('be.visible').then(($el) => {
    if ($el.length > 0) {
        cy.wrap($el).click(); // Hace clic si el elemento está visible
        cy.log("Elemento encontrado y clickeado");
    }
    }).catch(() => {
    cy.log(`Intento ${6 - intentos}: Elemento no encontrado, recargando... 🔄`);
    cy.reload();
      cy.wait(2000); // Espera 2 segundos antes de volver a intentar
      esperarYRecargar(selector, intentos - 1); // Llamada recursiva para reintentar
    });
}
