
describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //PERCENT

  it('should return Error for 8 / 0', function() {
    cy.get('btn8').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 0.008539325842696628 for 76 / 89', function() {
    cy.get('btn7').click(); 
    cy.get('btn6').click(); 
    cy.get('btn/').click(); 
    cy.get('btn8').click(); 
    cy.get('btn9').click(); 
    cy.get('btn=').click(); 
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','0.008539325842696628');
  });

  it('should return -28.35 for 0 - 2 + 0 / 34 * 43344 - 2833', function() {
    cy.get('btn0').click(); 
    cy.get('btn-').click(); 
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn*').click(); 
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
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','-28.35');
  });

  it('should return Error for 0 - 2 / 0 * 34 / 0 + 43344 + 2833', function() {
    cy.get('btn0').click(); 
    cy.get('btn-').click(); 
    cy.get('btn2').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn+').click(); 
    cy.get('btn4').click(); 
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn4').click(); 
    cy.get('btn+').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 ', function() {
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 0 for 0 - 0 ', function() {
    cy.get('btn0').click();
    cy.get('btn-').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 0.05 for 2 + 3', function() {
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','0.05');
  });

  it('should return 0.27 for 12 + 15', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn=').click(); 
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','0.27');
  });

  it('should return 0.012469878581533821 for 65 * 1234 / 0000064323', function() {
    cy.get('btn6').click();
    cy.get('btn5').click();
    cy.get('btn*').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn6').click();
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn=').click(); 
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','0.012469878581533821');
  });

    it('should return −42999.992678768 for 09034400 / 000012340000 - 00004300000', function() {
    cy.get('btn0').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn4').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
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
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 ', function() {
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('percent').click(); 
    cy.get('.display').should('have.value','Error');
  });
});