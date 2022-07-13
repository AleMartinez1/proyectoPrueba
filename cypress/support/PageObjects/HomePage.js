class HomePage 
{
    getReceptionButton() 
    {
        return cy.get('.sidenav > :nth-child(1) > :nth-child(4)')
    }

}
export default HomePage;