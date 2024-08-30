Cypress.Commands.add('login' ,(id, pass) => {
    cy.get('#user-name').type(id);
    cy.get('#password').type(pass);
    cy.get('#login-button').click();
    cy.log('Logueo correcto'); 
});






Cypress.Commands.add ('clicksAdicionales', (nombre,apellido,cp)=> {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('#checkout').click();
    cy.get('#first-name').type(nombre);
    cy.get('#last-name').type(apellido);
    cy.get('#postal-code').type(cp);
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.contains('Thank you for your order!').should('be.visible');
    cy.log('Checkout validado correctamente');
    cy.get('#back-to-products').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click(); 
});

 




Cypress.Commands.add ('clickProductos', ()=> {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
    cy.get('#add-to-cart-sauce-labs-onesie').click();
    cy.get('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)').click(); 
});
