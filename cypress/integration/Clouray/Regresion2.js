/// <reference types="Cypress"/>

//Importar Clases POM
import HomePage from '../../support/PageObjects/HomePage'
import FichaPacientePage from '../../support/PageObjects/FichaPacientePage'
import OrdenExamenPage from '../../support/PageObjects/OrdenExamenPage'
import IngresoPagoPage from '../../support/PageObjects/IngresoPagoPage'

//Suite de casos que contiene cada caso
describe('Regresion ', function () {

const homePage = new HomePage()
const fichaPacientePage = new FichaPacientePage()
const ordenExamenPage = new OrdenExamenPage()
const ingresoPagoPage = new IngresoPagoPage()

    before(function () {
        //cargamos los valores del archivo loginAdministrador
        cy.fixture('NuevoPaciente').then(function (datos) {
            this.datos = datos
            
        })

        cy.viewport(1343, 550)


    })

    beforeEach(function () {

        // ingresamos a la pagina
        cy.visit("https://cloudraywebqa.landscape.cl/login")

    })


    //Caso de prueba 1

    it('Nuevo paciente paga orden', function () {


        //login con usuario Recepcinista
        cy.loginRecepcionista()

        //Alta nuevo paciente
        homePage.getReceptionButton.click()
        

        fichaPacientePage.getFichaPacienteText.should('contain.text', 'Ficha paciente')
        cy.AgregarPaciente()
        fichaPacientePage.getGuardarButton.click()
        fichaPacientePage.getPacienteRegistradoAlert.should('contain.text', 'Paciente guardado con éxito')
        fichaPacientePage.getPacienteRegistradoAlert.click()
        
        ordenExamenPage.getEspecialistaInput.type(this.datos.EmailEspecialista)
        ordenExamenPage.getClinicaInput.type(this.datos.Clinica)
        ordenExamenPage.getMailInput.type(this.datos.EmailEspecialista)

        ordenExamenPage.getPanoramicaCheckbox.click()
        ordenExamenPage.getInformePanoramicaCheckbox()
        ordenExamenPage.getMcNamaraCheckbox()
        ordenExamenPage.getIngreseOrdenButton.click()
        //Pagar orden 
        ingresoPagoPage.getRegistroPagoText.should('contain.text', 'Registro de pago')
        ingresoPagoPage.getTipoPagoSelect.select('Precio Normal')
        ingresoPagoPage.getEfectivoCheckbox.click()
        ingresoPagoPage.getEfectivoInput.type('27500')
        //Ingresar n° de folio aleatorio
        Cypress.config('UniqueNumber', `${Math.floor(Math.random() * 100000)}`)
        ingresoPagoPage.getFolioInput.type(Cypress.config('UniqueNumber'))
        ingresoPagoPage.getRegistrarPagoButton.click()
        ingresoPagoPage.getModalPacienteListoText.should('contain.text', 'El paciente está listo para ser atendido.')
        ingresoPagoPage.getModalPacienteListoButton.click()
      
    })


    //caso de prueba 2
    it('Operador toma examenes  ', function () {

        cy.loginOperador()

        cy.get(':nth-child(4) > a').click()
        cy.get('.TitleAndDate > h1').should('contain.text', 'Toma de Exámenes')
        cy.get('.titleBody').should('contain.text', 'Próximos pacientes')
        cy.get('.buttonDisplay > [style="background-color: rgb(1, 115, 153); color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px; margin-right: 20px;"]').last().click()
        cy.get('.take_exams-upload_container > button').click()

        //subir examen
        const imagefile = 'examen1.png';
        cy.get('.inputFile-input').attachFile(imagefile);
        cy.get('.EntregasPendientes').click()
        cy.get('[style="background-color: rgb(238, 155, 40); color: rgb(247, 247, 255); box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 25px 0px;"]').click()


        cy.get('.take_exams-RadiologistSelect').select('Alonso Arias Molina')
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > form:nth-child(1) > div:nth-child(5) > div:nth-child(2)').click()

        
    })
    it('Usuario radiologo toma un informe', function (){

        cy.loginRadiologo()
        cy.get('.sidenav > :nth-child(1) > :nth-child(4)').click()
        cy.get('[style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > [style="display: flex; justify-content: flex-end; padding: 10px 0px;"] > [style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        const yourFilePath = 'examen1.png';
        cy.get('.inputFile-input').attachFile(yourFilePath)
        cy.get('[style="background: rgb(1, 115, 153); color: rgb(255, 255, 255); border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; font-weight: bold; padding: 10px 20px;"]').click()
        cy.get(':nth-child(1) > [style="display: flex; justify-content: flex-end; padding: 10px 0px;"] > [style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        cy.get('.inputFile-input').attachFile(yourFilePath)
        cy.get('[style="background: rgb(1, 115, 153); color: rgb(255, 255, 255); border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; font-weight: bold; padding: 10px 20px;"]').click()
        cy.get('[style="background: rgb(238, 155, 40); border: none; border-radius: 10px; color: rgb(255, 255, 255); font-weight: bold; padding: 10px 20px;"]').click()
        cy.get('[style="background: rgb(238, 155, 40); border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-weight: bold; padding: 10px 20px;"]').click()
        cy.get('[style="text-align: center; width: 430px;"] > div > [style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        

    })

})