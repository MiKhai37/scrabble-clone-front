describe('The Login Page', () => {

  before(() => {
    // run dev script to clean and seed the database with test users
  })

  beforeEach(() => {
    // Logout

    // Go to login page
    cy.visit('/login')
  })

  it('Successful login', () => {
    const username = 'user1';
    const password = 'pass1';

    cy.get('input[id=basic_username]').type(username);

    cy.get('input[id=basic_password]').type(password);

    cy.get('button[type=submit]').click();

    cy.url().should('include', '/profile');

    // Watch for session cookie
    //cy.getCookie('scrabbleAuthToken').should('exist');
  })

  it('Wrong password login', () => {
    const username = 'user1';
    const password = 'pass2';

    cy.get('input[id=basic_username]').type(username);

    cy.get('input[id=basic_password]').type(password);

    cy.get('button[type=submit]').click();

    cy.url().should('include', '/login');

    cy.contains('Wrong combination of username/password');

    // Watch for session cookie
    cy.getCookie('scrabbleAuthToken').should('not.exist');
  })

  it('Wrong username login', () => {
    const username = 'wronguser1';
    const password = 'pass1';

    cy.get('input[id=basic_username]').type(username);

    cy.get('input[id=basic_password]').type(password);

    cy.get('button[type=submit]').click();

    cy.url().should('include', '/login');

    cy.contains('Wrong combination of username/password');

    // Watch for session cookie
    cy.getCookie('likebookAuthToken').should('not.exist');
  })
})
