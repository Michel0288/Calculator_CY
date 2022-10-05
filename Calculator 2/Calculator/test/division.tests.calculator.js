describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //DIVISION
  it('should return 1 for 8 / 8', function() {
    cy.get('btn8').click(); 
    cy.get('btn/').click(); 
    cy.get('btn8').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','1');
  });

  it('should return 3 for 9 / 3', function() {
    cy.get('btn9').click(); 
    cy.get('btn/').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','3');
  });

  it('should return 0.3283582089552239 for 22 / 67', function() {
    cy.get('btn2').click(); 
    cy.get('btn2').click(); 
    cy.get('btn/').click(); 
    cy.get('btn6').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0.3283582089552239');
  });

  it('should return 1.0584415584415585 for 163 / 154', function() {
    cy.get('btn1').click(); 
    cy.get('btn6').click(); 
    cy.get('btn3').click(); 
    cy.get('btn/').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','1.0584415584415585');
  });

  it('should return 869.6718191565404 for 19466734 / 22384', function() {
    cy.get('btn1').click(); 
    cy.get('btn9').click(); 
    cy.get('btn4').click(); 
    cy.get('btn6').click(); 
    cy.get('btn6').click(); 
    cy.get('btn7').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn/').click(); 
    cy.get('btn2').click(); 
    cy.get('btn2').click(); 
    cy.get('btn3').click(); 
    cy.get('btn8').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','869.6718191565404');
  });

  it('should return 0.00035298270384751147 for 1 / 2833', function() {
    cy.get('btn1').click(); 
    cy.get('btn/').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0.00035298270384751147');
  });

  it('should return 2833 for 2833 / 1', function() {
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn/').click(); 
    cy.get('btn1').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','2833');
  });

  it('should return 0 for 0 / 283434', function() {
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return Error for 283434 / 0', function() {
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn3').click(); 
    cy.get('btn4').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 1 for 2 / 2', function() {
    cy.get('btn2').click();  
    cy.get('btn/').click(); 
    cy.get('btn2').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','1');
  });

  it('should return 1 for 245 / 245', function() {
    cy.get('btn2').click();  
    cy.get('btn4').click();  
    cy.get('btn5').click();  
    cy.get('btn/').click(); 
    cy.get('btn2').click(); 
    cy.get('btn4').click();  
    cy.get('btn5').click();  
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','1');
  });

  it('should return 0.01 for 2 / 200 ', function() {
    cy.get('btn2').click(); 
    cy.get('btn/').click(); 
    cy.get('btn2').click(); 
    cy.get('btn0').click();  
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0.01');
  });

  it('should return 500 for 1000 / 2', function() {
    cy.get('btn1').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn2').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','500');
  });

  it('should return 10 for 10000 / 100', function() {
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','10');
  });

  it('should return Error for 10 / 100 / 0 / 120 / 4300', function() {
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn4').click(); 
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 7.124352908383494e-8 for 8 / 010 / 870 / 12907', function() {
    cy.get('btn8').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn8').click(); 
    cy.get('btn7').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','7.124352908383494e-8');
  });

  it('should return 0.01918442858697511 for 1234 / 0000064323', function() {
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
    cy.get('.display').should('have.value','0.01918442858697511');
  });

  it('should return 52.12560777957861 for 0000064323 / 1234', function() {
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
    cy.get('btn/').click(); 
    cy.get('btn1').click(); 
    cy.get('btn2').click();
    cy.get('btn3').click();
    cy.get('btn4').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','52.12560777957861');
  });

  it('should return 500 for 2000 / 4', function() {
    cy.get('btn2').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('btn4').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','500');
  });

  it('should return 4.28386454183267 for 4301 / 1004', function() {
    cy.get('btn4').click();
    cy.get('btn3').click();
    cy.get('btn0').click();
    cy.get('btn1').click();
    cy.get('btn/').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click();
    cy.get('btn4').click();
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','4.28386454183267');
  });

  it('should return 2.869767441860465 for 0000123400 / 000043000', function() {
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
    cy.get('btn/').click(); 
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
    cy.get('.display').should('have.value','2.869767441860465');
  });

  it('should return 0 for 000 / 3200 / 63', function() {
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn3').click(); 
    cy.get('btn2').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('btn6').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 0.08528301886792454 for 090400 / 005300 / 200', function() {
    cy.get('btn0').click(); 
    cy.get('btn9').click(); 
    cy.get('btn0').click(); 
    cy.get('btn4').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn5').click(); 
    cy.get('btn3').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click();
    cy.get('btn2').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','0.08528301886792454');
  });

  it('should return 1.702612038747126e-7 for 09034400 / 000012340000 / 00004300000', function() {
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
    cy.get('btn/').click(); 
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
    cy.get('.display').should('have.value','1.702612038747126e-7');
  });


  it('should return 1.0110222284412226e-17 for 9909034400 / 99000012340000 / 9900004300000', function() {
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
    cy.get('btn/').click(); 
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
    cy.get('btn/').click(); 
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
    cy.get('.display').should('have.value','1.0110222284412226e-17');
  });
});