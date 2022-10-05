
describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //SUBTRACTION
  it('should return 0 for 8 - 8', function() {
    cy.get('btn8').click(); 
    cy.get('btn-').click(); 
    cy.get('btn8').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 6 for 9 - 3', function() {
    cy.get('btn9').click(); 
    cy.get('btn-').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','6');
  });

  it('should return 18 for 33 - 15', function() {
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn-').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','18');
  });

  it('should return -45 for 22 - 67', function() {
    cy.get('btn2').click(); 
    cy.get('btn2').click(); 
    cy.get('btn-').click(); 
    cy.get('btn6').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-45');
  });

  it('should return 9 for 163 - 154', function() {
    cy.get('btn1').click(); 
    cy.get('btn6').click(); 
    cy.get('btn3').click(); 
    cy.get('btn-').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','9');
  });

  it('should return -90 for 194 - 284', function() {
    cy.get('btn1').click(); 
    cy.get('btn9').click(); 
    cy.get('btn4').click(); 
    cy.get('btn-').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-90');
  });

  it('should return 19444350 for 19466734 - 22384', function() {
    cy.get('btn1').click(); 
    cy.get('btn9').click(); 
    cy.get('btn4').click(); 
    cy.get('btn6').click(); 
    cy.get('btn6').click(); 
    cy.get('btn7').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn-').click(); 
    cy.get('btn2').click(); 
    cy.get('btn2').click(); 
    cy.get('btn3').click(); 
    cy.get('btn8').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','19444350');
  });

  it('should return 40511 for 43344 - 2833', function() {
    cy.get('btn4').click(); 
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn4').click(); 
    cy.get('btn-').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','40511');
  });

  it('should return -283390 for 44 - 283434', function() {
    cy.get('btn4').click(); 
    cy.get('btn4').click();  
    cy.get('btn-').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-283390');
  });

  it('should return −89913 for 9999 - 99912', function() {
    cy.get('btn9').click(); 
    cy.get('btn9').click();  
    cy.get('btn9').click(); 
    cy.get('btn9').click(); 
    cy.get('btn-').click(); 
    cy.get('btn9').click(); 
    cy.get('btn9').click(); 
    cy.get('btn9').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-89913');
  });

  it('should return 0 for 0 - 0', function() {
    cy.get('btn0').click(); 
    cy.get('btn-').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 00 for 00 - 00', function() {
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn-').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return −13779 for 8 - 010 - 870 - 12907', function() {
    cy.get('btn8').click(); 
    cy.get('btn-').click(); 
    cy.get('btn0').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click(); 
    cy.get('btn-').click(); 
    cy.get('btn8').click(); 
    cy.get('btn7').click(); 
    cy.get('btn0').click(); 
    cy.get('btn-').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-13779');
  });

  it('should return 12019 for 12907 - 8 - 010 - 870 ', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn7').click(); 
    cy.get('btn-').click(); 
    cy.get('btn8').click(); 
    cy.get('btn-').click(); 
    cy.get('btn0').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click(); 
    cy.get('btn-').click(); 
    cy.get('btn8').click(); 
    cy.get('btn7').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','12019');
  });

  it('should return -63089 for 1234 - 0000064323', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn-').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn6').click();
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-63089');
  });

  it('should return 63089 for 0000064323 - 1234', function() {
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn6').click();
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn-').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','63089');
  });

  it('should return 3066 for 4300 - 1234', function() {
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn-').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','3066');
  });

  it('should return 3297 for 4301-1004', function() {
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn1').click();
    cy.get('btn-').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn4').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','3297');
  });

  it('should return 8040000 for 000012340000 - 00004300000', function() {
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn-').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn4').click(); 
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','8040000');
  });

  it('should return -3263 for 000 - 3200 - 63', function() {
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn-').click(); 
    cy.get('btn3').click(); 
    cy.get('btn2').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn-').click(); 
    cy.get('btn6').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-3263');
  });

  it('should return 8058900 for 09034400 - 00975300 - 200', function() {
    cy.get('btn0').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn4').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn-').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn9').click(); 
    cy.get('btn7').click(); 
    cy.get('btn5').click(); 
    cy.get('btn3').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn-').click();
    cy.get('btn2').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','8058900');
  });
});