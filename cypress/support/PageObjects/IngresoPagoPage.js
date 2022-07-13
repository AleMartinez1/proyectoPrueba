class IngresoPagoPage
{
    getRegistroPagoText() 
    {
        return cy.get('.paymentTitle')
    }

    getTipoPagoSelect() 
    {
        return cy.get('#paymentType')
    }

    getEfectivoCheckbox() 
    {
        return cy.get(':nth-child(2) > .center_element > .paymethod_check > .checkmark-paymethod')
    }

    getEfectivoInput() 
    {
        return cy.get('#cashInput')
    }

    getFolioInput() 
    {
        return cy.get('.input_folio')
    }

    getRegistrarPagoButton() 
    {
        return cy.get('.btn_orange')
    }

    getModalPacienteListoText() 
    {
        return cy.get('.successModalText')
    }

    getModalPacienteListoButton() 
    {
        return cy.get('[style="text-align: center;"] > button')
    }
}
export default IngresoPagoPage;