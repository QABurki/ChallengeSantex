describe('SauceDemo', { testIsolation: false }, () => {
    const usuarioCorrecto = 'standard_user';
    const clave = 'secret_sauce';
    const usuarioProblema = 'problem_user';
    const nombre = 'Panchito123@';
    const apellido = 'Lopez';
    const cp = '5000';
    const nombreinc = 'Papito123@';
    const apellidoinc = 'Lorenz';
    const cpinc = '3000';

              
        it('Compra con user 1', () => { 
        cy.clearLocalStorage();
        cy.visit('https://www.saucedemo.com');
               cy.login(usuarioCorrecto ,clave);
}); 
        it('Agr Productos + checkout + logout', () => {
              cy.clickProductos();
        cy.clicksAdicionales(nombre, apellido, cp);
} );

        it('Compra con user 2', () => {
        cy.get('#user-name').type('problem_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
});
        it('Agr Productos + Checkout + Logout - user2', () => {
        cy.clickProductos();
        cy.clicksAdicionales(nombreinc, apellidoinc, cpinc);   
});    

     });


