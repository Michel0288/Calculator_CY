describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //M+
  it('should return 15 for 7 + 8', function() {
    cy.get('btn7').click(); 
    cy.get('btn+').click(); 
    cy.get('btn8').click(); 
    cy.get('btn=').click(); 
    cy.get('M+').click(); 
    cy.get('.display').should('have.value','30');
  });

  it('should return 5 for 2 + 3', function() {
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click();  
    cy.get('M+').click(); 
    cy.get('btn+').click(); 
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('M+').click(); 
    cy.get('M+').click(); 
    cy.get('.display').should('have.value','60');
  });

  it('should return 27 for 12 + 15', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('M+').click(); 
    cy.get('btn+').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','27');
  });

});