describe("Betting interaction", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display dealer card after bet is placed and confirm button is clicked", () => {
    cy.get(".cypress-bet-test").click(); // Select the bet buttons and click to place bet
    cy.get(".confirm-button") // Select the confirm button inside the betting component
      .click()
      .then(() => {
        cy.get("div.dealer-card", { timeout: 1000 }) // Check for the dealer card
          .should("be.visible"); 
      });
  });
});
