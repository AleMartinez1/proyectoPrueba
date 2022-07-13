/// <reference types="Cypress"/>
describe('administracion caja', function (){

    beforeEach(function () {
       
        // ingresamos a la pagina
        cy.visit("https://190.151.104.181/NuevoSitioBDP/payment?token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ5VWJ2RXlIUE5sOUpsamNCMHlMVS11SmQ5ZUtBUVUza3A1aXY1cFA0YVNrIn0.eyJleHAiOjE2NTY2ODcxMTIsImlhdCI6MTY1NjY4NjgxMiwianRpIjoiNGQxNzQ5MzQtNmNlOS00OTQ0LTg5MGEtYTUwZjczNTNjMWY3IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1kZXYucmV0YWlsY2FyZC5jbC9hdXRoL3JlYWxtcy9ib3RvbnBhZ28iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiODMxY2I2MTctNGE4Mi00YWVlLWI4ZTYtNmE0YTg0MDQ0MWE5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYm90b25wYWdvIiwic2Vzc2lvbl9zdGF0ZSI6IjU5YWY3NWMzLWYxY2ItNGQ1OC04N2FhLWM2MTFlMDgyM2NjZCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIwODMwNzQ2MjAiLCJ1cmwiOiJodHRwczovL2dvb2dsZS5jbCJ9.MtBxAA9BSPX3qJARwULC3kocIIdgVzTAXo52b3UgKoa8kzbfs-cqlshEd3F8HSafAk0itKcQDm_uNk0uHYbhhpmto0VAUeu-N9-FFmQADnacibm0I103IgmIqU4ElF9Ex4T_fG4BckvXRHGUrKLH6sW1FJCSENKPmMmr5GO3SjMjKYMQmFVhW_lsyFy4QxmdwnzSTk-6Hv0zhi7v-elZlYO7gQss6zop0_b-07a-FHDXWjmqs5raotMrlhvEt8Sp3mfCGji_v5mXs6MO8xkL0BQwcm1Iik2AVYkTEjNLEcmJGrsGDiIN8iwNUV0XDMHW5MJbLyPa2aTC93LGQM7gHg")
    })

    
    it('verificar caja', function (){
        // ingresamos a la pagina
        
    
        cy.get('.text > :nth-child(2)') //LEVEL bienvenido a pago en linea
        
        cy.get('#expirationDate')
        cy.get('#expirationDate')
        cy.get('#pin')
        cy.get('#pin')//selector de cuotas
        cy.get(':nth-child(8) > input') // pagar
        cy.get('#cardRegistration > .back > a') //volver a la orden de pago


        cy.get('.link > a') // Pagar con otra tarjeta
        cy.get('#rut')
        cy.get('div > #CardNumber')


        cy.get('.footer > span')// terminos y condiciones


    })
    
})