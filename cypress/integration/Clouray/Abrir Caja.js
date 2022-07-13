/// <reference types="Cypress"/>
//Suite de casos que contiene cada caso
describe('Abrir Caja', function () {

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
        
        cy.get('.form-patientRegister > :nth-child(2) > h3').should('contain.text', 'Nombre*')
        cy.get(':nth-child(3) > :nth-child(1) > h3').should('contain.text', 'Apellido Paterno*')
        cy.get(':nth-child(3) > #separate > h3').should('contain.text','Apellido Materno*')        
        cy.wait(1500)
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
        cy.get(':nth-child(2) > :nth-child(3) > .section_container-exams > :nth-child(1) > .input_container > .checkmark').click()
        cy.get(':nth-child(2) > :nth-child(3) > .section_container-exams > :nth-child(2) > .input_container > .checkmark').click()
        cy.get('#organeButtonPhone').click()
        //cy.get('[data-top="426.0550231933594"]').click()
        cy.wait(1500)
        cy.get('[style="text-align: center;"] > button').click()
        cy.wait(1500)
        cy.get('[style="text-align: center;"] > button').click()
        

        //Apertura de caja
        //cy.get('.successModalHeader > h2').should('contain.text','Apertura de caja')
        //cy.get('.successModalText').should('contain.text','Esta operacion abre la contabilidad...')
        //cy.get('[style="text-align: center;"] > button').click()
        
        //Pagar orden 
        cy.get('.paymentTitle').should('contain.text', 'Registro de pago')
        //"Precio normal"
        cy.get('#paymentType').select('Precio normal')
        cy.get(':nth-child(2) > .center_element > .paymethod_check > .checkmark-paymethod').click()
        cy.get('#cashInput').type('24000')
        //Ingresar n° de folio aleatorio
        Cypress.config('UniqueNumber', `${Math.floor(Math.random() * 100000)}`)
        cy.get('.input_folio').type(Cypress.config('UniqueNumber'))
        cy.get('.btn_orange').click()
        cy.get('.successModalText').should('contain.text', 'El paciente está listo para ser atendido.')
        cy.get('[style="text-align: center;"] > button').click()

    })

    //verificar caja

    it('Nuevo paciente paga orden', function () {

        cy.loginRecepcionista()

        cy.get('#topIconSidebar > a').click()
        cy.get('.TitleAndDate > h1').should('contain.text','Administración')
        cy.get('[style="z-index: 1;"] > .adminTabTitle').should('contain.text','Caja')
        
    })
   
})