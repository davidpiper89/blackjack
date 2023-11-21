describe("User Flow E2E test", () => {
  it("completes the full user flow", () => {
    cy.visit("https://blackjack.david-piper-portfolio.co.uk/");

    cy.contains("Piper's Blackjack");

    cy.get(".betButton").contains("Bet 1").click();
    cy.get(".confirmButton").click();

    cy.get(".total");
    cy.get(".standButton").click();

    cy.wait(5000);
    cy.get(".btn-primary").click();
  });
});
