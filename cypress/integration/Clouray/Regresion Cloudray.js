/// <reference types="Cypress"/>

//Suite de casos que contiene cada caso
describe('Regresion ', function () {

    before(function () {
        //cargamos los valores del archivo loginAdministrador
        cy.fixture('NuevoPaciente').then(function (datos) {
            this.datos = datos
            //cy.fixture(this.datos.Examen).as('Examen1')
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
        cy.get('.sidenav > :nth-child(1) > :nth-child(4)').click()
        
        cy.get('[style="margin-left: 26px;"] > .titleBar').should('contain.text', 'Ficha paciente')
        //cy.get('#passportOrRut').type(this.datos.Documento)
        cy.get('#documento').select('Pasaporte')
        cy.get('#documento').should('contain.text', 'Pasaporte')
        //Generar numero aleatorio de Pasaporte
        Cypress.config('UniqueNumber', `${Math.floor(Math.random() * 100000000)}`)
        cy.get('#passportOrRut').type(Cypress.config('UniqueNumber'))

        cy.get('#errorCardPatientNotFound').should('contain.text', 'Paciente no encontrado. Ingrese los datos del paciente en el formulario a continuación y marque la opción “Guardar” antes de continuar.')
        cy.wait(2000)
       //cy.AgregarPaciente()
        cy.get('.form-patientRegister > :nth-child(2) > input').type(this.datos.Nombre)
        cy.get('#apellidoPaternoPaciente').type(this.datos.ApellidoPaterno)
        cy.get('#appelidoMaternoPaciente').type(this.datos.ApellidoMaterno)
        cy.get('#nacimientoPaciente').clear().type(this.datos.FechaNac)
        cy.get('#sexPatient').select(this.datos.Sexo)
        cy.get('#phonePaciente').type(this.datos.teléfono)
        cy.get('#emailPaciente').type(this.datos.Email)
        cy.get('.saveButton').click()
        cy.get('#errorCardPatientRegister').should('contain.text', 'Paciente guardado con éxito')
        cy.get('.continueButton').click()

        //Cargar especialista y examenes     
        cy.get('#specialist').type(this.datos.Especialista)
        cy.get('#clinic').type(this.datos.Clinica)
        cy.get('#email').type(this.datos.EmailEspecialista)
        //cy.get(':nth-child(2) > :nth-child(3) > .section_container-exams > :nth-child(1) > .input_container > .checkmark').click()
        cy.get(':nth-child(3) > [style="display: flex; justify-content: space-between;"] > .section_container-exams > :nth-child(1) > .input_container > .checkmark').click()
        cy.get(':nth-child(3) > [style="display: flex; justify-content: space-between;"] > .section_container-delivery > :nth-child(1) > .input_container > .checkmark').click()
        cy.get(':nth-child(2) > :nth-child(3) > .section_container-exams > :nth-child(2) > .input_container > .checkmark').click()

        cy.get('#organeButtonPhone').click()

        //Pagar orden 
        cy.get('.paymentTitle').should('contain.text', 'Registro de pago')
        //"Precio normal"
        cy.get('#paymentType').select('Precio normal')
        cy.get(':nth-child(2) > .center_element > .paymethod_check > .checkmark-paymethod').click()
        cy.get('#cashInput').type('27500')
        //Ingresar n° de folio aleatorio
        Cypress.config('UniqueNumber', `${Math.floor(Math.random() * 100000)}`)
        cy.get('.input_folio').type(Cypress.config('UniqueNumber'))

        //"sin costo"
        /*cy.get('#paymentType').select('Descuento')
        cy.get('#discountSelect').select('Sin costo')
        cy.get('#commentsInput').type('Automation')*/

        cy.get('.btn_orange').click()
        cy.get('.successModalText').should('contain.text', 'El paciente está listo para ser atendido.')
        cy.get('[style="text-align: center;"] > button').click()

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