describe('Home Page store', () => {
  it('Should visit home page verify renders texts', () => {
    cy.visit('/');
    cy.contains('TEMdiTUDO Store');
    cy.contains('Meu Carrinho');
    cy.contains('0 produtos');
  });

  it('Should verify renders components buttons length', () => {
    cy.get('button').contains('Adicionar ao carrinho');
    cy.get('button').should('have.length', 50);
  });

  it('Should verify add to card to click button', () => {
    cy.get('button').click({ multiple: true, force: true });
  });

  it('Should verify 50 itens on Cart', () => {
    cy.contains('50 produtos');
  });

  it('Should visit cart page verify renders itens on cart and clear cart', () => {
    cy.get('a[href*="/cart"]').click();
    cy.scrollTo(0, 800);
    cy.wait(1000);
    cy.scrollTo(0, 1600);
    cy.wait(1000);
    cy.scrollTo(0, 2400);
    cy.wait(1000);
    cy.scrollTo(0, 3200);
    cy.wait(1000);
    cy.scrollTo(0, 4000);
    cy.wait(1000);
    cy.scrollTo(0, 5500);
    cy.wait(1000);
    cy.get('button').contains('Limpar Carrinho').click();
  });

  it('Should verify 0 itens on Cart', () => {
    cy.contains('0 produtos');
  });

  it('Should verify button redirect to home page', () => {
    cy.get('button').click();
  });

  it('Should verify add to card to click button again', () => {
    cy.get('button').click({ multiple: true, force: true });
  });

  it('Should verify 50 itens on Cart', () => {
    cy.contains('50 produtos');
  });

  it('Should visit cart page verify renders itens on cart and clear cart', () => {
    cy.get('a[href*="/cart"]').click();
  });

  it('Should verify remove item to cart click button', () => {
    cy.get('.icon').click({ multiple: true, force: true });
  });

  it('Should verify 0 itens on Cart', () => {
    cy.contains('0 produtos');
  });

  it('Should verify button redirect to home page', () => {
    cy.get('button').click();
  });

  it('Should verify add to card to click button again', () => {
    cy.get('button').click({ multiple: true, force: true });
  });

  it('Should verify 50 itens on Cart', () => {
    cy.contains('50 produtos');
  });

  it('Should visit cart page verify renders itens on cart and clear cart', () => {
    cy.get('a[href*="/cart"]').click();
  });

  it('Should verify remove item amount to cart click button', () => {
    cy.get('[data-test="remove-btn"]').click({
      multiple: true,
      force: true,
    });
  });

  it('Should verify button redirect to home page', () => {
    cy.get('button').click();
  });

  it('Should verify add to card to click button again', () => {
    cy.get('button').click({ multiple: true, force: true });
  });

  it('Should verify 50 itens on Cart', () => {
    cy.contains('50 produtos');
  });

  it('Should visit cart page verify renders itens on cart and clear cart', () => {
    cy.get('a[href*="/cart"]').click();
  });

  it('Should verify add and remove item amount to cart click button', () => {
    cy.get('[data-test="add-btn"]').click({
      multiple: true,
      force: true,
    });
    cy.scrollTo(0, 800);
    cy.wait(1000);
    cy.scrollTo(0, 1600);
    cy.wait(1000);
    cy.scrollTo(0, 2400);
    cy.wait(1000);
    cy.scrollTo(0, 3200);
    cy.wait(1000);
    cy.scrollTo(0, 4000);
    cy.wait(1000);
    cy.scrollTo(0, 5500);
    cy.wait(1000);
    cy.get('[data-test="remove-btn"]').click({
      multiple: true,
      force: true,
    });
    cy.scrollTo(0, 5500);
    cy.wait(1000);
    cy.scrollTo(0, 4000);
    cy.wait(1000);
    cy.scrollTo(0, 3200);
    cy.wait(1000);
    cy.scrollTo(0, 2400);
    cy.wait(1000);
    cy.scrollTo(0, 1600);
    cy.wait(1000);
    cy.scrollTo(0, 800);
    cy.wait(1000);
    cy.scrollTo(0, 0);
    cy.wait(1000);
    cy.scrollTo(0, 5500);
    cy.get('button').contains('Limpar Carrinho').click();
    cy.get('button').contains('Começar a comprar!').click();
  });

  it('Should visit home page verify double click one items verify amount item cart', () => {
    cy.get('button').contains('Adicionar ao carrinho').click();
    cy.get('button').contains('Adicionar ao carrinho').click();
    cy.contains('1 produtos');
    cy.get('a[href*="/cart"]').click();
    cy.get('.amount > h3').contains('2');
  });

  it('Should verify add items on cart', () => {
    cy.get('[data-test="remove-btn"]').click();
    cy.get('.amount > h3').contains('1');
    cy.get('[data-test="add-btn"]').click();
    cy.get('[data-test="add-btn"]').click();
    cy.get('[data-test="add-btn"]').click();
    cy.get('[data-test="add-btn"]').click();
    cy.get('[data-test="add-btn"]').click();
    cy.get('[data-test="add-btn"]').click();
    cy.get('[data-test="add-btn"]').click();
    cy.get('[data-test="add-btn"]').click();
    cy.get('[data-test="add-btn"]').click();
    cy.get('.amount > h3').contains('10');
  });

  it('Should verify remove item on cart click trash', () => {
    cy.get('.icon').click({ multiple: true, force: true });
  });

  it('Should verify logo link header', () => {
    cy.get('a').contains('TEMdiTUDO Store').click();
  });

  it('Should verify 0 itens on Cart', () => {
    cy.contains('0 produtos');
  });
});
