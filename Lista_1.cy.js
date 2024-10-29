/// reference types = "Cypress"/>

//./node_modules/.bin/cypress open

describe("Testes lista 1 do sr. Vitinho", () => {
    it("Deve realizar o login com sucesso", () =>{
        cy.visit ("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should("contain", "Products")
    })

    it.skip("Testando login incorreto", () =>{
        cy.visit ("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user1") //Passando o usuário incorreto
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should("contain", "Epic sadface: Username and password do not match any user in this service")
    })

    it.skip("Testando senha incorreta", () =>{
        cy.visit ("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce1") //passando a senha incorreta
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should("contain", "Epic sadface: Username and password do not match any user in this service")
    })

    it.skip("Deve realizar o login e, em seguida, o logout com sucesso", () => {
        cy.visit("https://www.saucedemo.com/v1/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.product_label').should("contain", "Products");
    
        // Acessar o menu e clicar em "Logout"
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        
        // Verificar que redirecionou para a página de login
        cy.get('#login-button').should('be.visible');
    });
    












































    it.skip('Fluxo da compra de produtos', () => {
        // Ordenação de produtos de menor para maior valor: (teste 4)
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)');

        // Validação da ordenação desses produtos: (teste 5)
        cy.get(':nth-child(1) .inventory_item_description').should('contain', 'Sauce Labs Onesie');
        cy.get(':nth-child(2) .inventory_item_description').should('contain', 'Sauce Labs Bike Light');
        cy.get(':nth-child(3) .inventory_item_description').should('contain', 'Sauce Labs Bolt T-Shirt');
    
        // Adicionando produtos ao carrinho: (teste 6)
        cy.contains('Sauce Labs Onesie').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();
    
        cy.contains('Sauce Labs Bike Light').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();
    
        cy.contains('Sauce Labs Bolt T-Shirt').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();
    
        // Checagem da quantidade de produtos adicionados ao carrinho: (teste 7)
        cy.get('.shopping_cart_link').should('have.text', '3');
    });
    
})

