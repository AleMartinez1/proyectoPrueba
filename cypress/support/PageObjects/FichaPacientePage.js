class FichaPacientePage 
{
    getFichaPacienteText() 
    {
        return cy.get('[style="margin-left: 26px;"] > .titleBar')
    }

    getDocumentoSelect() 
    {
        return cy.get('#documento')
    }

    getDocumentoInput() 
    {
        return cy.get('#passportOrRut')
    }

    getBusquedaPacienteAlert() 
    {
        return cy.get('#errorCardPatientNotFound')
    }

    getGuardarButton() 
    {
        return cy.get('.saveButton')
    }

    getPacienteRegistradoAlert() 
    {
        return cy.get('#errorCardPatientRegister')
    }

    getPacienteRegistradoAlert() 
    {
        return cy.get('.continueButton')
    }
    


}
export default FichaPacientePage;