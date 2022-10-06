class FichaPacientePage {
    getFichaPacienteText() //Texto "Ficha paciente"
    {
        return cy.get('[style="margin-left: 26px;"] > .titleBar')
    }

    getDocumentoSelect() //Seleccionar documento
    {
        return cy.get('#documento')
    }

    getDocumentoInput() // tipear documento
    {
        return cy.get('#passportOrRut')
    }

    getBusquedaPacienteAlert() // Mensaje de paciente no encontrado (no se usa en regresion)
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

    getContinuarButton() 
    {
        return cy.get('.continueButton')
    }
    


}
export default FichaPacientePage;