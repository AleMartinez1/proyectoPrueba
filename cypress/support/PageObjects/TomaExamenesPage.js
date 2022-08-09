class OperadorHomePage {
    getTomaExamenesText() {
        return cy.get('.TitleAndDate > h1')
    }
    getLastExamenButton() {
        return cy.get('.buttonDisplay > [style="background-color: rgb(1, 115, 153); color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px; margin-right: 20px;"]')
    }
    getCargarExamen1Button() {
        return cy.get(':nth-child(3) > .take_exams-upload_container > button')
    }
    getCargarExamen2Button() {
        return cy.get(':nth-child(4) > .take_exams-upload_container > button')
    }
    getCargarExamen3Button() {
        return cy.get(':nth-child(5) > .take_exams-upload_container > button')
    }

    getSubirArchivoInput() {
        return cy.get('.inputFile-input')
    }
    getGuardarArchivoButton() {
        return cy.get('.EntregasPendientes')
    }
      getFinalizarAtencionButton() {
        return cy.get('[style="background-color: rgb(238, 155, 40); color: rgb(247, 247, 255); box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px 0px;"]')
    }
    getRadiologoSelect() {
        return cy.get('.take_exams-RadiologistSelect')
    }
    getConfirmarAtencionButton() {
        return cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > form:nth-child(1) > div:nth-child(5) > div:nth-child(2)')
    }
    

}
export default OperadorHomePage;