describe('The Login Page', () => {

  before(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:devReset && npm run db:devSeed');
  })

  it.only('Successful login', () => {
    const username = 'user1';
    const password = 'pass1';

    cy.visit('/login');

    cy.get('input[id=basic_username]').type(username);

    cy.get('input[id=basic_password]').type(`${password}{enter}`);

    cy.url().should('include', '/profile');

    // Watch for session cookie
    cy.getCookie('scrabbleAuthToken').should('exist');
  })

  it('Wrong password login', () => {
    const username = 'user1';
    const password = 'wrongpass1';

    cy.visit('/login');

    cy.get('input[id=basic_username]').type(username);

    cy.get('input[id=basic_password]').type(`${password}{enter}`);

    cy.url().should('include', '/login');

    // Watch for session cookie
    cy.getCookie('likebookAuthToken').should('not.exist');
  })

  it('Wrong username login', () => {
    const username = 'wronguser1';
    const password = 'pass1';

    cy.visit('/login');

    cy.get('input[id=basic_username]').type(username);

    cy.get('input[id=basic_password]').type(`${password}{enter}`);

    cy.url().should('include', '/login');

    // Watch for session cookie
    cy.getCookie('likebookAuthToken').should('not.exist');
  })
})
