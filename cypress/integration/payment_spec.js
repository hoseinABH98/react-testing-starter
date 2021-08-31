describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    // check account balance
    // click pay button
    // search for users
    // add amount and note and click pay
    // return to transactions
    // go to personal payments
    // click on payment
    // verify payment was made
    // verify if payment amount was deducted
  });
});
