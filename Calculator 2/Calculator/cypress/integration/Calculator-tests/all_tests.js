context('Testing calc app', () => {
  describe('Calculator', function() {
    beforeEach(() => {
    // open calc screen
        cy.visit("index.html");
    })

    //+/- sign test
    it('should return -15 for 7 + 8', function() {
      cy.get('#btn7').click(); 
      cy.get('#btnadd').click(); 
      cy.get('#btn8').click(); 
      cy.get('#btnequ').click(); 
      cy.get('#sign').click(); 
      cy.get('.display').should('have.value','-15');
  });

  it('should return -89913 for 9999 - 99912', function() {
    cy.get('#btn9').click(); 
    cy.get('#btn9').click();  
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sign').click(); 
    cy.get('.display').should('have.value','-89913');
  });

  it('should return Error for 0 / 0 ', function() {
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#sqrt').click(); 
    cy.get('#sign').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 - 2 / 0 * 34 / 0 + 43344 + 2833', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sign').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return -15 for 7 + 8', function() {
    cy.get('#btn7').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sign').click(); 
    cy.get('.display').should('have.value','-15');
});

it('should return 1 for -7 + 8', function() {
  cy.get('#btn7').click(); 
  cy.get('#sign').click(); 
  cy.get('#btnadd').click(); 
  cy.get('#btn8').click(); 
  cy.get('#btnequ').click(); 
  cy.get('.display').should('have.value','1');
});

it('should return 0 for -7 + -7', function() {
  cy.get('#btn7').click(); 
  cy.get('#sign').click(); 
  cy.get('#btnadd').click(); 
  cy.get('#btn7').click(); 
  cy.get('#sign').click(); 
  cy.get('#btnequ').click(); 
  cy.get('.display').should('have.value','0');
});

    //Arithmetic Calculations 
    //ADDITION
    it('should return 15 for 7 + 8', function() {
        cy.get('#btn7').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn8').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','15');
    });

    it('should return 800 for 000450 + 00350 ', function() { 
      cy.get('#btn0').click(); 
      cy.get('#btn0').click(); 
      cy.get('#btn0').click(); 
      cy.get('#btn4').click(); 
      cy.get('#btn5').click(); 
      cy.get('#btn0').click(); 
      cy.get('#btnadd').click(); 
      cy.get('#btn0').click(); 
      cy.get('#btn0').click(); 
      cy.get('#btn3').click(); 
      cy.get('#btn5').click(); 
      cy.get('#btn0').click(); 
      cy.get('#btnequ').click(); 
      cy.get('.display').should('have.value','800');
    });

    it('should return 5 for 2 + 3', function() {
        cy.get('#btn2').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','5');
    });

    it('should return 27 for 12 + 15', function() {
        cy.get('#btn1').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn1').click(); 
        cy.get('#btn5').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','27');
    });

    it('should return 89 for 22 + 67', function() {
        cy.get('#btn2').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn6').click(); 
        cy.get('#btn7').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','89');
    });

    it('should return 266 for 112 + 154', function() {
        cy.get('#btn1').click(); 
        cy.get('#btn1').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn1').click(); 
        cy.get('#btn5').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','266');
    });

    it('should return 288 for 194 + 284', function() {
        cy.get('#btn1').click(); 
        cy.get('#btn9').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btn8').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','478');
    });

    it('should return 19489118 for 19466734 + 22384', function() {
        cy.get('#btn1').click(); 
        cy.get('#btn9').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btn6').click(); 
        cy.get('#btn6').click(); 
        cy.get('#btn7').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn8').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','19489118');
    });

    it('should return 46178 for 43344 + 2834', function() {
        cy.get('#btn4').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btn8').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','46178');
    });

    it('should return 283478 for 44 + 283434', function() {
        cy.get('#btn4').click(); 
        cy.get('#btn4').click();  
        cy.get('#btnadd').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btn8').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','283478');
    });

    it('should return 109911 for 9999 + 99912', function() {
        cy.get('#btn9').click(); 
        cy.get('#btn9').click();  
        cy.get('#btn9').click(); 
        cy.get('#btn9').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn9').click(); 
        cy.get('#btn9').click(); 
        cy.get('#btn9').click(); 
        cy.get('#btn1').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','109911');
    });

    it('should return 0 for 0 + 0', function() {
        cy.get('#btn0').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','0');
    });

    it('should return 13795 for 8 + 010 + 870 + 12907', function() {
        cy.get('#btn8').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn1').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn8').click(); 
        cy.get('#btn7').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn1').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btn9').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn7').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','13795');
    });

    it('should return 65557 for 1234 + 0000064323', function() {
        cy.get('#btn1').click(); 
        cy.get('#btn2').click();
        cy.get('#btn3').click();
        cy.get('#btn4').click();
        cy.get('#btnadd').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn6').click();
        cy.get('#btn4').click();
        cy.get('#btn3').click();
        cy.get('#btn2').click();
        cy.get('#btn3').click();
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','65557');
    });

    it('should return 5534 for 1234 + 4300', function() {
        cy.get('#btn1').click(); 
        cy.get('#btn2').click();
        cy.get('#btn3').click();
        cy.get('#btn4').click();
        cy.get('#btnadd').click(); 
        cy.get('#btn4').click();
        cy.get('#btn3').click();
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','5534');
    });

    it('should return 5534 for 1004 + 4301', function() {
        cy.get('#btn1').click(); 
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btn4').click();
        cy.get('#btnadd').click(); 
        cy.get('#btn4').click();
        cy.get('#btn3').click();
        cy.get('#btn0').click();
        cy.get('#btn1').click();
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','5305');
    });

    it('should return 16640000 for 000012340000 + 00004300000', function() {
        cy.get('#btn0').click(); 
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btn1').click(); 
        cy.get('#btn2').click();
        cy.get('#btn3').click();
        cy.get('#btn4').click();
        cy.get('#btn0').click(); 
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btnadd').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btn4').click(); 
        cy.get('#btn3').click();
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btn0').click();
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','16640000');
    });

    it('should return 3263 for 000 + 3200 + 63', function() {
        cy.get('#btn0').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn2').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click();
        cy.get('#btnadd').click(); 
        cy.get('#btn6').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','3263');
    });

    it('should return 1009900 for 200 + 00034400 + 00975300 ', function() {
        cy.get('#btn2').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btn4').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btnadd').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn9').click(); 
        cy.get('#btn7').click(); 
        cy.get('#btn5').click(); 
        cy.get('#btn3').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btn0').click(); 
        cy.get('#btnequ').click(); 
        cy.get('.display').should('have.value','1009900');
    });

      //BODMAS
  it('should return 16 for 8 / 8 * 8 + 8', function() {
    cy.get('#btn8').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','16');
  });

  it('should return 51 for 6 * 9 - 3', function() {
    cy.get('#btn6').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','51');
  });

  it('should return -15 for 0 * 33 - 15', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-15');
  });

  it('should return -67 for 0 / 22 - 67', function() {
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-67');
  });

  it('should return Error for 163 / 0 * 154', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 * 194 + 284', function() {
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 869.6718191565404 for 1 * 19466734 / 22384', function() {
    cy.get('#btn1').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','869.6718191565404');
  });

  it('should return -2835 for 0 - 2 + 0 / 34 * 43344 - 2833', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-2835');
  });

  it('should return Error for 0 - 2 / 0 * 34 / 0 + 43344 + 2833', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 00 * 00', function() {
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 13603 for 8 / 010 * 870 + 12907', function() {
    cy.get('#btn8').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','13603');
  });

  it('should return 1.2469878581533822 for 65 * 1234 / 0000064323', function() {
    cy.get('#btn6').click();
    cy.get('#btn5').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn6').click();
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','1.2469878581533822');
  });

  it('should return 8040000 for 09034400 / 000012340000 - 00004300000', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-4299999.267876823');
  });

  it('should return -3263 for 000 - 3200 - 63', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-3263');
  });

  it('should return 44056251600 for 09034400 * 00975300 / 200', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click();
    cy.get('#btn2').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','44056251600');
  });

  //DIVISION
  it('should return 1 for 8 / 8', function() {
    cy.get('#btn8').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','1');
  });

  it('should return 3 for 9 / 3', function() {
    cy.get('#btn9').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','3');
  });

  it('should return 0.3283582089552239 for 22 / 67', function() {
    cy.get('#btn2').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0.3283582089552239');
  });

  it('should return 1.0584415584415585 for 163 / 154', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','1.0584415584415585');
  });

  it('should return 869.6718191565404 for 19466734 / 22384', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','869.6718191565404');
  });

  it('should return 0.00035298270384751147 for 1 / 2833', function() {
    cy.get('#btn1').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0.00035298270384751147');
  });

  it('should return 2833 for 2833 / 1', function() {
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','2833');
  });

  it('should return 0 for 0 / 283434', function() {
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return Error for 283434 / 0', function() {
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 1 for 2 / 2', function() {
    cy.get('#btn2').click();  
    cy.get('#btndiv').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','1');
  });

  it('should return 1 for 245 / 245', function() {
    cy.get('#btn2').click();  
    cy.get('#btn4').click();  
    cy.get('#btn5').click();  
    cy.get('#btndiv').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn4').click();  
    cy.get('#btn5').click();  
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','1');
  });

  it('should return 0.01 for 2 / 200 ', function() {
    cy.get('#btn2').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn0').click();  
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0.01');
  });

  it('should return 500 for 1000 / 2', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','500');
  });

  it('should return 10 for 10000 / 100', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','10');
  });

  it('should return Error for 10 / 100 / 0 / 120 / 4300', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 7.124352908383494e-8 for 8 / 010 / 870 / 12907', function() {
    cy.get('#btn8').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','7.124352908383494e-8');
  });

  it('should return 0.01918442858697511 for 1234 / 0000064323', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn6').click();
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0.01918442858697511');
  });

  it('should return 52.12560777957861 for 0000064323 / 1234', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();  
    cy.get('#btn6').click();
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','52.12560777957861');
  });

  it('should return 500 for 2000 / 4', function() {
    cy.get('#btn2').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn4').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','500');
  });

  it('should return 4.28386454183267 for 4301 / 1004', function() {
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','4.28386454183267');
  });

  it('should return 2.869767441860465 for 0000123400 / 000043000', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','2.869767441860465');
  });

  it('should return 0 for 000 / 3200 / 63', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 0.08528301886792454 for 090400 / 005300 / 200', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click();
    cy.get('#btn2').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0.08528301886792454');
  });

  it('should return 1.702612038747126e-7 for 09034400 / 000012340000 / 00004300000', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','1.702612038747126e-7');
  });


  it('should return 1.0110222284412226e-17 for 9909034400 / 99000012340000 / 9900004300000', function() {
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn9').click();     
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','1.0110222284412226e-17');
  });

  //#Msub
  it('should return 14 for 7 + 7', function() {
    cy.get('#btn7').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#Msub').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 5 for 2 - 3', function() {
    cy.get('#btn2').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click();  
    cy.get('#Msub').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','5');
  });

  it('should return 167 for 12 + 155', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#Msub').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','143');
  });

    //#Mplus
  it('should return 15 for 7 + 8', function() {
    cy.get('#btn7').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#Mplus').click(); 
    cy.get('.display').should('have.value','30');
  });

  it('should return 5 for 2 + 3', function() {
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click();  
    cy.get('#Mplus').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#Mplus').click(); 
    cy.get('#Mplus').click(); 
    cy.get('.display').should('have.value','60');
  });

  it('should return 27 for 12 + 15', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#Mplus').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','27');
  });

  //#MRC
  it('should return 14 for 7 + 7', function() {
    cy.get('#btn7').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#MRC').click(); 
    cy.get('.display').should('have.value','14');
  });

  it('should return 14 for 7 + 7', function() {
    cy.get('#btn7').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#MRC').click();     
    cy.get('#MRC').click(); 
    cy.get('.display').should('have.value','14');
  });

  it('should return -1 for 2 + 3', function() {
    cy.get('#btn2').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click();  
    cy.get('#MRC').click(); 
    cy.get('.display').should('have.value','-1');
  });

  it('should return 35 for 12 + 23', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btnadd').click();  
    cy.get('#btn2').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click();  
    cy.get('#MRC').click(); 
    cy.get('.display').should('have.value','35');
  });

  //MULTIPLICATION
  it('should return 64 for 8 * 8', function() {
    cy.get('#btn8').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','64');
  });

  it('should return 27 for 9 * 3', function() {
    cy.get('#btn9').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','27');
  });

  it('should return 1474 for 22 * 67', function() {
    cy.get('#btn2').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','1474');
  });

  it('should return 25102 for 163 * 154', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','25102');
  });

  it('should return 435743373856 for 19466734 * 22384', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','435743373856');
  });

  it('should return 2833 for 1 * 2833', function() {
    cy.get('#btn1').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','2833');
  });

  it('should return 0 for 0 * 283434', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 400 for 200 * 2', function() {
    cy.get('#btn2').click(); 
    cy.get('#btn0').click();  
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','400');
  });


  it('should return 400 for 2 * 200 ', function() {
    cy.get('#btn2').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn0').click();  
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','400');
  });

  it('should return 0 for 0 * 0', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 1000 for 10 * 100', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','1000');
  });

  it('should return 1000 for 10 * 100 * 0 * 120 * 4300', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 898327200 for 8 * 010 * 870 * 12907', function() {
    cy.get('#btn8').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','898327200');
  });


  it('should return 79374582 for 1234 * 0000064323', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn6').click();
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','79374582');
  });

  it('should return 79374582 for 0000064323 * 1234', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn6').click();
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','79374582');
  });

  it('should return 8000 for 2000 * 4', function() {
    cy.get('#btn2').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn4').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','8000');
  });

  it('should return 4318204 for 4301 * 1004', function() {
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','4318204');
  });

  it('should return 5306200000 for 0000123400 * 000043000', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','5306200000');
  });

  it('should return 0 for 000 * 3200 * 63', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 95824000000 for 090400 * 005300 * 200', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click();
    cy.get('#btn2').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','95824000000');
  });

  it('should return 479383332800000000000 for 09034400 * 000012340000 * 00004300000', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','479383332800000000000');
  });

  it('should return 9.711850044263565e+36 for 9909034400 * 99000012340000 * 9900004300000', function() {
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn9').click();     
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','9.711850044263565e+36');
  });

  //PERCENT

  it('should return Error for 8 / 0', function() {
    cy.get('#btn8').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 0.008539325842696628 for 76 / 89', function() {
    cy.get('#btn7').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','0.008539325842696628');
  });

  it('should return -28.35 for 0 - 2 + 0 / 34 * 43344 - 2833', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','-28.35');
  });

  it('should return Error for 0 - 2 / 0 * 34 / 0 + 43344 + 2833', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 ', function() {
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 0 for 0 - 0 ', function() {
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 0.05 for 2 + 3', function() {
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','0.05');
  });

  it('should return 0.27 for 12 + 15', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','0.27');
  });

  it('should return 0.012469878581533821 for 65 * 1234 / 0000064323', function() {
    cy.get('#btn6').click();
    cy.get('#btn5').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn6').click();
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btnequ').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','0.012469878581533821');
  });

    it('should return −42999.992678768 for 09034400 / 000012340000 - 00004300000', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 ', function() {
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#percent').click(); 
    cy.get('.display').should('have.value','Error');
  });

  //SQRT

  it('should return Error for 8 / 0', function() {
    cy.get('#btn8').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 0.9240847278630152 for 76 / 89', function() {
    cy.get('#btn7').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','0.9240847278630152');
  });

  it('should return Error for 0 - 2 + 0 / 34 * 43344 - 2833', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 - 2 / 0 * 34 / 0 + 43344 + 2833', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnmul').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 ', function() {
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return 0 for 0 - 0 ', function() {
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 2.23606797749979 for 2 + 3', function() {
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','2.23606797749979');
  });

  it('should return 5.196152422706632 for 12 + 15', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnadd').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btnequ').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','5.196152422706632');
  });

  it('should return 1.1166861054716237 for 65 * 1234 / 0000064323', function() {
    cy.get('#btn6').click();
    cy.get('#btn5').click();
    cy.get('#btnmul').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn6').click();
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btnequ').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','1.1166861054716237');
  });

    it('should return Error for 09034400 / 000012340000 - 00004300000', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btndiv').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  it('should return Error for 0 / 0 ', function() {
    cy.get('#btn0').click();
    cy.get('#btndiv').click(); 
    cy.get('#sqrt').click(); 
    cy.get('.display').should('have.value','Error');
  });

  //SUBTRACTION
  it('should return 0 for 8 - 8', function() {
    cy.get('#btn8').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 6 for 9 - 3', function() {
    cy.get('#btn9').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','6');
  });

  it('should return 18 for 33 - 15', function() {
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','18');
  });

  it('should return -45 for 22 - 67', function() {
    cy.get('#btn2').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-45');
  });

  it('should return 9 for 163 - 154', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','9');
  });

  it('should return -90 for 194 - 284', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-90');
  });

  it('should return 19444350 for 19466734 - 22384', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','19444350');
  });

  it('should return 40511 for 43344 - 2833', function() {
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','40511');
  });

  it('should return -283390 for 44 - 283434', function() {
    cy.get('#btn4').click(); 
    cy.get('#btn4').click();  
    cy.get('#btnsub').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-283390');
  });

  it('should return −89913 for 9999 - 99912', function() {
    cy.get('#btn9').click(); 
    cy.get('#btn9').click();  
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-89913');
  });

  it('should return 0 for 0 - 0', function() {
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return 00 for 00 - 00', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','0');
  });

  it('should return −13779 for 8 - 010 - 870 - 12907', function() {
    cy.get('#btn8').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-13779');
  });

  it('should return 12019 for 12907 - 8 - 010 - 870 ', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn8').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','12019');
  });

  it('should return -63089 for 1234 - 0000064323', function() {
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn6').click();
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-63089');
  });

  it('should return 63089 for 0000064323 - 1234', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn6').click();
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','63089');
  });

  it('should return 3066 for 4300 - 1234', function() {
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','3066');
  });

  it('should return 3297 for 4301-1004', function() {
    cy.get('#btn4').click();
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn1').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','3297');
  });

  it('should return 8040000 for 000012340000 - 00004300000', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn1').click(); 
    cy.get('#btn2').click();
    cy.get('#btn3').click();
    cy.get('#btn4').click();
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn4').click(); 
    cy.get('#btn3').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btn0').click();
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','8040000');
  });

  it('should return -3263 for 000 - 3200 - 63', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn2').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click();
    cy.get('#btnsub').click(); 
    cy.get('#btn6').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','-3263');
  });

  it('should return 8058900 for 09034400 - 00975300 - 200', function() {
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn4').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn9').click(); 
    cy.get('#btn7').click(); 
    cy.get('#btn5').click(); 
    cy.get('#btn3').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnsub').click();
    cy.get('#btn2').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btn0').click(); 
    cy.get('#btnequ').click(); 
    cy.get('.display').should('have.value','8058900');
  });

});
});