describe('My First Test', function() {
    it('Clicks an element', function() {
        cy.visit('https://pearplanner-4c7fb.web.app/')

        //cy.contains('type').click()

        cy.url().should('include', 'pearplanner')

        // cy.get('.action-email')
            // .type('fake@email.com')
            // .should('have.value', 'fake@email.com')
    })
})