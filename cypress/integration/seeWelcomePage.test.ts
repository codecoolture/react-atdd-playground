context("seeWelcomePage", () => {
  specify("A user can see the welcome page", () => {
    cy.visit("/");

    cy.findByText("Welcome!").should("exist");
  });
});
