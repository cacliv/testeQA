/// <reference types="cypress" />

it("um teste externo") => {
    cy.get(#campo).type("um texto")
})

describe("grupo de teste", () => {
    //aqui posso criar vários testes

    it("um teste externo") => {
        cy.get(#campo).type("um texto")
    })
    it("um teste externo") => {
        cy.get(#campo).type("um texto")
    })
    describe("grupo de teste", () => {
})
