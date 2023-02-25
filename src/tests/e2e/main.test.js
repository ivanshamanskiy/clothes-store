describe('Main', () => {
    it('should display header text', () => {
      cy.visit('/auth')
      cy.contains('h2', 'Welcome to the store');
    })
})