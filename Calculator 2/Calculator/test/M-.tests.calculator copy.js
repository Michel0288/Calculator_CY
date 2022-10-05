describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //M-
  it('should return 14 for 7 + 7', function() {
    cy.get('btn7').click(); 
    cy.get('btn+').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('M-').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 5 for 2 - 3', function() {
    cy.get('btn2').click(); 
    cy.get('btn-').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click();  
    cy.get('M-').click(); 
    cy.get('btn+').click(); 
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','5');
  });

  it('should return 167 for 12 + 155', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('M-').click(); 
    cy.get('btn+').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn5').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','143');
  });
});