
class SignupPage {
    
    go(){
        
        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')


    }

    fillform(deliver){

        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whats)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click() // utiliza dois criterios para encontrar o elemento dentro do html

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
        
        cy.get('input[name="address"]').should('have.value', deliver.address.street) // verifica se é realmente a rua
        cy.get('input[name="district"]').should('have.value', deliver.address.district) // verifica se é realmente o bairro
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state) // verifica se é realmente a cidade

        cy.contains('.delivery-method li', deliver.delivery_method).click() // função que junta localizador css com texto
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh) // pega arquivos

    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectMessage)

    }

    alertMessageShouldBe(expectMessage){
        // cy.get('.alert-error').should('have.text', expectMessage)
        cy.contains('.alert-error', expectMessage).should('be.visible') // concatena localizadores
    }
    
}

export default new SignupPage;