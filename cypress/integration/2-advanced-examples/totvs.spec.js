/// <reference types="cypress" />

describe('validate Tests', () =>{

    it('acessar o site',() =>{
      cy.visit('https://totvs.store')
      cy.get('#btn-cookie-allow').click()
      
     })
    
    it('pesquisar um produto',() =>{
      cy.visit('https://totvs.store')
      cy.get('#search').type("TOTVS Backoffice (Linha RM) - PIX {enter}");
   
  })
   
    it('verificar produto',() =>{
      cy.get('[href="https://totvs.store/br/produto/treinamento-e-learning-rh-linha-rm-reports-12-1-28.html"] > .product-card-header > .product-card-image').click()
      cy.get('#btn-cookie-allow').click()

     })
   
      
    it('adicionar produto ao carrinho',() =>{
      cy.get('#product-addtocart-button').click()
      
      })
})
