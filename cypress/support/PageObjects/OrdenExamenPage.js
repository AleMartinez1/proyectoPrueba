class OrdenExamenPage
{
    getEspecialistaInput() 
    {
        return cy.get('#specialist')
    }

    getClinicaInput() 
    {
        return cy.get('#clinic')
    }

    getMailInput() 
    {
        return cy.get('#email')
    }

    getPanoramicaCheckbox() 
    {
        return cy.get(':nth-child(3) > [style="display: flex; justify-content: space-between;"] > .section_container-exams > :nth-child(1) > .input_container > .checkmark')
    }

    getInformePanoramicaCheckbox() 
    {
        return cy.get(':nth-child(3) > [style="display: flex; justify-content: space-between;"] > .section_container-delivery > :nth-child(1) > .input_container > .checkmark')

    }

    getMcNamaraCheckbox() 
    {
        return cy.get(':nth-child(2) > :nth-child(3) > .section_container-exams > :nth-child(2) > .input_container > .checkmark')
    }

    getIngreseOrdenButton() 
    {
        return cy.get('#organeButtonPhone')
    }








}
export default OrdenExamenPage;