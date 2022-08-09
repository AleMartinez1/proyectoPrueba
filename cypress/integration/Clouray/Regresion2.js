/// <reference types="Cypress"/>

//Importar Clases POM
import RecepcionistaHomePage from '../../support/PageObjects/RecepcionistaHomePage'
import FichaPacientePage from '../../support/PageObjects/FichaPacientePage'
import OrdenExamenPage from '../../support/PageObjects/OrdenExamenPage'
import IngresoPagoPage from '../../support/PageObjects/IngresoPagoPage'
import OperadorHomePage from '../../support/PageObjects/OperadorHomePage'
import TomaExamenesPage from '../../support/PageObjects/TomaExamenesPage'

//Suite de casos que contiene cada caso
describe('Regresion Cloudray', function () {

    const recepcionistaHomePage = new RecepcionistaHomePage()
    const fichaPacientePage = new FichaPacientePage()
    const ordenExamenPage = new OrdenExamenPage()
    const ingresoPagoPage = new IngresoPagoPage()
    const operadorHomePage = new OperadorHomePage()
    const tomaExamenesPage = new TomaExamenesPage()


    beforeEach(function () {
        // ingresamos a la pagina
        //QA Landscape
        //cy.visit("https://cloudraywebqa.landscape.cl/login")
        //QA Cliente
        cy.visit("https://cloudray.landscape.cl/login")

    })

    //Caso de prueba 1

    it('Nuevo paciente abona sus examenes', function () {

        cy.viewport(1343, 950)
        cy.loginRecepcionista()
        //Alta nuevo paciente
        recepcionistaHomePage.getReceptionButton().click()
        fichaPacientePage.getFichaPacienteText().should('contain.text', 'Ficha paciente')
        cy.AgregarPaciente()//ingresa datos del paciente
        fichaPacientePage.getGuardarButton().click()
        fichaPacientePage.getPacienteRegistradoAlert().should('contain.text', 'Paciente guardado con éxito')
        fichaPacientePage.getContinuarButton().click()

        //Ingresar Especialista y Clinica
        ordenExamenPage.getEspecialistaInput().type(this.datos.Especialista)
        ordenExamenPage.getClinicaInput().type(this.datos.Clinica)
        ordenExamenPage.getMailInput().type(this.datos.EmailEspecialista)
        //Tomar Examenes
        ordenExamenPage.getScannerMaxilarCheckbox().click()
        ordenExamenPage.getScannerMaxilarSelect().select('Ambos(bimaxilar)')
        cy.wait(500)
        ordenExamenPage.getInformeScannerCheckbox().click()
        ordenExamenPage.getDicomScannerCheckbox().click()
        ordenExamenPage.getPanoramicaCheckbox().click()
        ordenExamenPage.getInformePanoramicaCheckbox().click()
        ordenExamenPage.getTeleradiografiaCheckbox().click()
        ordenExamenPage.getTeleradiografiaSelect().select('Ambos')
        cy.wait(500)
        ordenExamenPage.getMcNamaraCheckbox().click()
        cy.AgregarComentario()
        ordenExamenPage.getIngreseOrdenButton().click()

        //Pagar orden 
        //cy.AbrirCaja()
        ingresoPagoPage.getRegistroPagoText().should('contain.text', 'Registro de pago')
        cy.wait(1000)
        cy.AgregarItemExtra()
        ingresoPagoPage.getTipoPagoSelect().select('Convenio')
        ingresoPagoPage.getEfectivoCheckbox().click()
        ingresoPagoPage.getEfectivoInput().type('42500')
        ingresoPagoPage.getTransferenciaCheckbox().click()
        ingresoPagoPage.getTransferenciaInput().type('65000')
        Cypress.config('UniqueNumber', `${Math.floor(Math.random() * 100000)}`)//generar n° de folio aleatorio
        ingresoPagoPage.getFolioInput().type(Cypress.config('UniqueNumber'))
        //cy.get('#commentsPaymentForm').should('contain.text','Comentario para prueba de regresion')
        ingresoPagoPage.getRegistrarPagoButton().click()
        ingresoPagoPage.getModalPacienteListoText().should('contain.text', 'El paciente está listo para ser atendido.')
        ingresoPagoPage.getModalPacienteListoButton().click()
    })

    it('Verificar movimiento en caja', function () {

        cy.loginRecepcionista()
        cy.get('#topIconSidebar > a').click()
        cy.get('.TitleAndDate > h1').should('contain.text', 'Administración')
        cy.get('[style="z-index: 1;"] > .adminTabTitle').should('contain.text', 'Caja')
        cy.get(':nth-child(1) > :nth-child(4) > div > p').should('contain.text', 'Item prueba')
        cy.get('.tableContainer > :nth-child(1) > :nth-child(10)').should('contain.text', '107500')

    })


    //caso de prueba 2
    it('Operador toma examenes  ', function () {
        cy.viewport(1343, 850)
        cy.loginOperador()

        operadorHomePage.getTomaExamenesButton().click()
        tomaExamenesPage.getTomaExamenesText().should('contain.text', 'Toma de Exámenes')
        cy.get('.titleBody').should('contain.text', 'Próximos pacientes')
        tomaExamenesPage.getLastExamenButton().last().click()

        cy.get('.successAlertTakeExam > p').should('contain.text', 'Se ha agregado el ítem “')
        //Operador Carga Examenes
        tomaExamenesPage.getCargarExamen1Button().click()
        const imagefile = 'examen1.png';
        tomaExamenesPage.getSubirArchivoInput().attachFile(imagefile)
        tomaExamenesPage.getGuardarArchivoButton().click()
        cy.wait(500)
        tomaExamenesPage.getCargarExamen2Button().click()
        tomaExamenesPage.getSubirArchivoInput().attachFile(imagefile)
        tomaExamenesPage.getGuardarArchivoButton().click()
        cy.wait(1000)
        tomaExamenesPage.getCargarExamen3Button().click()
        tomaExamenesPage.getSubirArchivoInput().attachFile(imagefile)
        tomaExamenesPage.getGuardarArchivoButton().click()

        tomaExamenesPage.getFinalizarAtencionButton().click()
        cy.wait(1000)
          
        tomaExamenesPage.getRadiologoSelect().select('Alonso Arias Molina')
        
        cy.wait(3000)
        tomaExamenesPage.getConfirmarAtencionButton().click()
        cy.get('.centerNoData').should('contain.text', 'No hay pacientes pendientes de atención.')

    })


    it('Usuario radiologo toma un informe', function () {

        cy.loginRadiologo()
        cy.get('.sidenav > :nth-child(1) > :nth-child(4)').click()
        cy.get(':nth-child(2) > .assignedInformsBtns > [style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        cy.wait(500)

        cy.get(':nth-child(2) > .examItemReports > [style="display: flex; justify-content: flex-end; padding: 10px 0px;"] > [style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        cy.get('#url').type('URLtestregresion')
        cy.get('[style="background: rgb(1, 115, 153); color: rgb(255, 255, 255); border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; font-weight: bold; padding: 10px 20px;"]').click()
        cy.wait(500)
        cy.get(':nth-child(3) > .examItemReports > [style="display: flex; justify-content: flex-end; padding: 10px 0px;"] > [style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        cy.get('#url').type('URLtestregresion')
        cy.get('[style="background: rgb(1, 115, 153); color: rgb(255, 255, 255); border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; font-weight: bold; padding: 10px 20px;"]').click()
        cy.wait(500)
        cy.get(':nth-child(4) > .examItemReports > [style="display: flex; justify-content: flex-end; padding: 10px 0px;"] > [style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        cy.get('#url').type('URLtestregresion')
        cy.get('[style="background: rgb(1, 115, 153); color: rgb(255, 255, 255); border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; font-weight: bold; padding: 10px 20px;"]').click()
        cy.wait(500)
        cy.get(':nth-child(5) > .examItemReports > [style="display: flex; justify-content: flex-end; padding: 10px 0px;"] > [style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        cy.get('#url').type('URLtestregresion')
        cy.get('[style="background: rgb(1, 115, 153); color: rgb(255, 255, 255); border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; font-weight: bold; padding: 10px 20px;"]').click()

        cy.get('[style="background: rgb(238, 155, 40); border: none; border-radius: 10px; color: rgb(255, 255, 255); font-weight: bold; padding: 10px 20px;"]').click()
        cy.get('[style="background: rgb(238, 155, 40); border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-weight: bold; padding: 10px 20px;"]').click()
        
        cy.get('[style="text-align: center; width: 430px;"] > div > [style="background: rgb(1, 115, 153); border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px; color: rgb(255, 255, 255); font-size: 16px; font-weight: 700; padding: 10px 20px;"]').click()
        
    })


})