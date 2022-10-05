describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //MULTIPLICATION
  it('should return 64 for 8 * 8', function() {
    cy.get('btn8').click(); 
    cy.get('btn*').click(); 
    cy.get('btn8').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','64');
  });

  it('should return 27 for 9 * 3', function() {
    cy.get('btn9').click(); 
    cy.get('btn*').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','27');
  });

  it('should return 1474 for 22 * 67', function() {
    cy.get('btn2').click(); 
    cy.get('btn2').click(); 
    cy.get('btn*').click(); 
    cy.get('btn6').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','1474');
  });

  it('should return 25102 for 163 * 154', function() {
    cy.get('btn1').click(); 
    cy.get('btn6').click(); 
    cy.get('btn3').click(); 
    cy.get('btn*').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','25102');
  });

  it('should return 435743373856 for 19466734 * 22384', function() {
    cy.get('btn1').click(); 
    cy.get('btn9').click(); 
    cy.get('btn4').click(); 
    cy.get('btn6').click(); 
    cy.get('btn6').click(); 
    cy.get('btn7').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn*').click(); 
    cy.get('btn2').click(); 
    cy.get('btn2').click(); 
    cy.get('btn3').click(); 
    cy.get('btn8').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','435743373856');
  });

  it('should return 2833 for 1 * 2833', function() {
    cy.get('btn1').click(); 
    cy.get('btn*').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','2833');
  });

  it('should return 0 for 0 * 283434', function() {
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 400 for 200 * 2', function() {
    cy.get('btn2').click(); 
    cy.get('btn0').click();  
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn2').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','400');
  });


  it('should return 400 for 2 * 200 ', function() {
    cy.get('btn2').click(); 
    cy.get('btn*').click(); 
    cy.get('btn2').click(); 
    cy.get('btn0').click();  
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','400');
  });

  it('should return 0 for 0 * 0', function() {
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 1000 for 10 * 100', function() {
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn*').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','1000');
  });

  it('should return 1000 for 10 * 100 * 0 * 120 * 4300', function() {
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn*').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn*').click(); 
    cy.get('btn0').click();
    cy.get('btn*').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn4').click(); 
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 898327200 for 8 * 010 * 870 * 12907', function() {
    cy.get('btn8').click(); 
    cy.get('btn*').click(); 
    cy.get('btn0').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn8').click(); 
    cy.get('btn7').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','898327200');
  });


  it('should return 79374582 for 1234 * 0000064323', function() {
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn*').click(); 
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
    cy.get('.display').should('have.value','79374582');
  });

  it('should return 79374582 for 0000064323 * 1234', function() {
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
    cy.get('btn*').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','79374582');
  });

  it('should return 8000 for 2000 * 4', function() {
    cy.get('btn2').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn*').click(); 
    cy.get('btn4').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','8000');
  });

  it('should return 4318204 for 4301 * 1004', function() {
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn1').click();
    cy.get('btn*').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn4').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','4318204');
  });

  it('should return 5306200000 for 0000123400 * 000043000', function() {
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
    cy.get('btn*').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn4').click(); 
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','5306200000');
  });

  it('should return 0 for 000 * 3200 * 63', function() {
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn3').click(); 
    cy.get('btn2').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn*').click(); 
    cy.get('btn6').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 95824000000 for 090400 * 005300 * 200', function() {
    cy.get('btn0').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn4').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn5').click(); 
    cy.get('btn3').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click();
    cy.get('btn2').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','95824000000');
  });

  it('should return 479383332800000000000 for 09034400 * 000012340000 * 00004300000', function() {
    cy.get('btn0').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn4').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
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
    cy.get('btn*').click(); 
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
    cy.get('.display').should('have.value','479383332800000000000');
  });

  it('should return 9.711850044263565e+36 for 9909034400 * 99000012340000 * 9900004300000', function() {
    cy.get('btn9').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn4').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn9').click(); 
    cy.get('btn9').click(); 
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
    cy.get('btn*').click(); 
    cy.get('btn9').click();     
    cy.get('btn9').click(); 
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
    cy.get('.display').should('have.value','9.711850044263565e+36');
  });
});