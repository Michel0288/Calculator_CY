describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //MRC
  it('should return 14 for 7 + 7', function() {
    cy.get('btn7').click(); 
    cy.get('btn+').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('MRC').click(); 
    cy.get('.display').should('have.value','14');
  });

  it('should return 14 for 7 + 7', function() {
    cy.get('btn7').click(); 
    cy.get('btn+').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('MRC').click();     
    cy.get('MRC').click(); 
    cy.get('.display').should('have.value','14');
  });

  it('should return -1 for 2 + 3', function() {
    cy.get('btn2').click(); 
    cy.get('btn-').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click();  
    cy.get('MRC').click(); 
    cy.get('.display').should('have.value','-1');
  });

  it('should return 35 for 12 + 23', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn+').click();  
    cy.get('btn2').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click();  
    cy.get('MRC').click(); 
    cy.get('.display').should('have.value','35');
  });
});