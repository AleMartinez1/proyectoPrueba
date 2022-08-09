class OrdenExamenPage {
    getEspecialistaInput() {
        return cy.get('#specialist')
    }

    getClinicaInput() {
        return cy.get('#clinic')
    }

    getMailInput() {
        return cy.get('#email')
    }

    getScannerMaxilarCheckbox() {
        return cy.get('[style="height: 40px; display: flex; justify-content: space-between; align-items: center; margin-top: 10px;"] > .input_container > .checkmark')
    }

    getScannerMaxilarSelect() {
        return cy.get('#SCANNER_MAXILAR_SELECT')
    }
   
   
    getInformeScannerCheckbox() {
        return cy.get(':nth-child(2) > [style="width: 100%;"] > [style="display: flex; justify-content: space-between;"] > .section_container-delivery > :nth-child(1) > .input_container > .checkmark')
    }
    getDicomScannerCheckbox() {
        return cy.get(':nth-child(2) > [style="width: 100%;"] > [style="display: flex; justify-content: space-between;"] > .section_container-delivery > :nth-child(4) > .input_container > .checkmark')
    }
    getSubirImagenButton() {
        return cy.get('.file-input > div > label') 
    }
   
   
    getTeleradiografiaCheckbox() {
        return cy.get(':nth-child(3) > [style="display: flex; justify-content: space-between;"] > .section_container-exams > .boxContainer > .input_container > .checkmark')
    }
    getTeleradiografiaSelect() {
        return cy.get('#TELERADIOGRAFIA_SELECT')
    }
   
   
    getPanoramicaCheckbox() {
        return cy.get(':nth-child(3) > [style="display: flex; justify-content: space-between;"] > .section_container-exams > :nth-child(1) > .input_container > .checkmark')
    }

    getInformePanoramicaCheckbox() {
        return cy.get(':nth-child(3) > [style="display: flex; justify-content: space-between;"] > .section_container-delivery > :nth-child(1) > .input_container > .checkmark')

    }

    getMcNamaraCheckbox() {
        return cy.get(':nth-child(2) > :nth-child(3) > .section_container-exams > :nth-child(2) > .input_container > .checkmark')
    }

    getIngreseOrdenButton() {
        return cy.get('#organeButtonPhone')
    }








}
export default OrdenExamenPage;