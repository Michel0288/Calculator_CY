describe('Calculator', function() {

  // open calc screen
  it('Should open index.html', function(){
    cy.visit("index.html");
  })

  //BODMAS
  it('should return 16 for 8 / 8 * 8 + 8', function() {
    cy.get('btn8').click(); 
    cy.get('btn/').click(); 
    cy.get('btn8').click(); 
    cy.get('btn*').click(); 
    cy.get('btn8').click(); 
    cy.get('btn+').click(); 
    cy.get('btn8').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','16');
  });

  it('should return 51 for 6 * 9 - 3', function() {
    cy.get('btn6').click(); 
    cy.get('btn*').click(); 
    cy.get('btn9').click(); 
    cy.get('btn-').click(); 
    cy.get('btn3').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','51');
  });

  it('should return -15 for 0 * 33 - 15', function() {
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn3').click(); 
    cy.get('btn3').click(); 
    cy.get('btn-').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-15');
  });

  it('should return -67 for 0 / 22 - 67', function() {
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn2').click(); 
    cy.get('btn2').click(); 
    cy.get('btn-').click(); 
    cy.get('btn6').click(); 
    cy.get('btn7').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-67');
  });

  it('should return Error for 163 / 0 * 154', function() {
    cy.get('btn1').click(); 
    cy.get('btn6').click(); 
    cy.get('btn3').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn1').click(); 
    cy.get('btn5').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 * 194 + 284', function() {
    cy.get('btn0').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
    cy.get('btn1').click(); 
    cy.get('btn9').click(); 
    cy.get('btn4').click(); 
    cy.get('btn+').click(); 
    cy.get('btn2').click(); 
    cy.get('btn8').click(); 
    cy.get('btn4').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 869.6718191565404 for 1 * 19466734 / 22384', function() {
    cy.get('btn1').click(); 
    cy.get('btn*').click(); 
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

  it('should return -2835 for 0 - 2 + 0 / 34 * 43344 - 2833', function() {
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
    cy.get('.display').should('have.value','-2835');
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
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 00 * 00', function() {
    cy.get('btn0').click();
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click();
    cy.get('btn*').click(); 
    cy.get('btn0').click();
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 13603 for 8 / 010 * 870 + 12907', function() {
    cy.get('btn8').click(); 
    cy.get('btn/').click(); 
    cy.get('btn0').click(); 
    cy.get('btn1').click(); 
    cy.get('btn0').click(); 
    cy.get('btn*').click(); 
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
    cy.get('.display').should('have.value','13603');
  });

  it('should return 1.2469878581533822 for 65 * 1234 / 0000064323', function() {
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
    cy.get('.display').should('have.value','1.2469878581533822');
  });

  it('should return 8040000 for 09034400 / 000012340000 - 00004300000', function() {
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
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','-4299999.267876823');
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

  it('should return 44056251600 for 09034400 * 00975300 / 200', function() {
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
    cy.get('btn9').click(); 
    cy.get('btn7').click(); 
    cy.get('btn5').click(); 
    cy.get('btn3').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn/').click();
    cy.get('btn2').click(); 
    cy.get('btn0').click(); 
    cy.get('btn0').click(); 
    cy.get('btn=').click(); 
    cy.get('.display').should('have.value','44056251600');
  });

});