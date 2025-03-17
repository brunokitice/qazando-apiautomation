/// <reference types="cypress"/>

describe("Buscar dispotivos", () => {
  it("Buscar dispositivo específico", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/5",
      /// isso é para aguardar o código acima ter uma resposta
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal("5");
    });
  });

  it("Buscar dispositivo inexistente", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/99",
      failOnStatusCode: false,
      /// isso é para aguardar o código acima ter uma resposta
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.body.error).to.equal("Oject with id=99 was not found.");
    });
  });
});

describe("Cadastrar dispotivos", () => {
  it("Cadastrar dispotivos", () => {
    cy.request({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      body: {
        name: "Bruno Teste Objeto",
        data: {
          year: 2025,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).contain("Bruno");
    });
  });
});
