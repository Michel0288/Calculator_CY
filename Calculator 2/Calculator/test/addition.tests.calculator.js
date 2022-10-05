describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //Arithmetic Calculations 
  //ADDITION
  it('should return 15 for 7 + 8', function() {
    cy.get('btn7').click(); 
    cy.get('btn+').click(); 
    cy.get('btn8').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','15');
  });

  it('should return 5 for 2 + 3', function() {
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','5');
  });

  it('should return 27 for 12 + 15', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','27');
  });

  it('should return 89 for 22 + 67', function() {
    cy.get('btn2').click(); 
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn6').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','89');
  });

  it('should return 266 for 112 + 154', function() {
    cy.get('btn1').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn+').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','266');
  });

  it('should return 288 for 194 + 284', function() {
    cy.get('btn1').click(); 
    cy.get('btn9').click(); 
    cy.get('btn4').click(); 
    cy.get('btn+').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','478');
  });

  it('should return 19489118 for 19466734 + 22384', function() {
    cy.get('btn1').click(); 
    cy.get('btn9').click(); 
    cy.get('btn4').click(); 
    cy.get('btn6').click(); 
    cy.get('btn6').click(); 
    cy.get('btn7').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn+').click(); 
    cy.get('btn2').click(); 
    cy.get('btn2').click(); 
    cy.get('btn3').click(); 
    cy.get('btn8').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','19489118');
  });

  it('should return 46178 for 43344 + 2834', function() {
    cy.get('btn4').click(); 
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn4').click(); 
    cy.get('btn+').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','46178');
  });

  it('should return 283478 for 44 + 283434', function() {
    cy.get('btn4').click(); 
    cy.get('btn4').click();  
    cy.get('btn+').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','283478');
  });

  it('should return 109911 for 9999 + 99912', function() {
    cy.get('btn9').click(); 
    cy.get('btn9').click();  
    cy.get('btn9').click(); 
    cy.get('btn9').click(); 
    cy.get('btn+').click(); 
    cy.get('btn9').click(); 
    cy.get('btn9').click(); 
    cy.get('btn9').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','109911');
  });

  it('should return 0 for 0 + 0', function() {
    cy.get('btn0').click(); 
    cy.get('btn+').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 13795 for 8 + 010 + 870 + 12907', function() {
    cy.get('btn8').click(); 
    cy.get('btn+').click(); 
    cy.get('btn0').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click(); 
    cy.get('btn+').click(); 
    cy.get('btn8').click(); 
    cy.get('btn7').click(); 
    cy.get('btn0').click(); 
    cy.get('btn+').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','13795');
  });

  it('should return 65557 for 1234 + 0000064323', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn+').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn6').click();
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','65557');
  });

  it('should return 5534 for 1234 + 4300', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn+').click(); 
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','5534');
  });

  it('should return 5534 for 1004 + 4301', function() {
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn4').click();
    cy.get('btn+').click(); 
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn1').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','5305');
  });

  it('should return 16640000 for 000012340000 + 00004300000', function() {
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
    cy.get('btn+').click(); 
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
    cy.get('.display').should('have.value','16640000');
  });

  it('should return 3263 for 000 + 3200 + 63', function() {
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn+').click(); 
    cy.get('btn3').click(); 
    cy.get('btn2').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn+').click(); 
    cy.get('btn6').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','3263');
  });

  it('should return 1009900 for 200 + 00034400 + 00975300 ', function() {
    cy.get('btn2').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn+').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn4').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn+').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn9').click(); 
    cy.get('btn7').click(); 
    cy.get('btn5').click(); 
    cy.get('btn3').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','1009900');
  });
  
});