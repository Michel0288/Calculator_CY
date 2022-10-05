
describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //SQRT

  it('should return Error for 8 / 0', function() {
    cy.get('btn8').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 0.9240847278630152 for 76 / 89', function() {
    cy.get('btn7').click(); 
    cy.get('btn6').click(); 
    cy.get('btn/').click(); 
    cy.get('btn8').click(); 
    cy.get('btn9').click(); 
    cy.get('btn=').click(); 
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','0.9240847278630152');
  });

  it('should return Error for 0 - 2 + 0 / 34 * 43344 - 2833', function() {
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
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','Error');
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
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 ', function() {
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 0 for 0 - 0 ', function() {
    cy.get('btn0').click();
    cy.get('btn-').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 2.23606797749979 for 2 + 3', function() {
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','2.23606797749979');
  });

  it('should return 5.196152422706632 for 12 + 15', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn=').click(); 
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','5.196152422706632');
  });

  it('should return 1.1166861054716237 for 65 * 1234 / 0000064323', function() {
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
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','1.1166861054716237');
  });

    it('should return Error for 09034400 / 000012340000 - 00004300000', function() {
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
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 ', function() {
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });
  
});