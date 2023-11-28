/*
1. Est-ce que on peut aller sur la page ? OK
2. Est-ce que un formulaire est proposé et visible ? OK
3. Est-ce que je peux remplir le formulaire ?
4. Est-ce que je peut soumettre le formulaire avant d'avoir fini de le remplir ? OK
5. Est-ce que une inscription valide renvoie sur la page success ?
6. Est-ce que une inscription non-valide renvoie sur la page failure ?
 */
describe("Login page form and navigation", () => {
  it("Login page loads correctly", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#main")
      .should("be.visible")
      .within(() => {
        cy.get("form#login")
          .should("be.visible")
          .within(() => {
            cy.get("input").should("have.length", 4);
            cy.get("button[type='submit']")
              .should("be.visible")
              .should("contain.text", "Submit")
              .should("be.disabled");
          });
      });
  });

  it("User with correct data navigates to success page", () => {
    cy.visit("http://localhost:3000/login");
    const user = {
      username: "jamesbond",
      email: "jbond@mi6.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecurepassword",
    };
    for (let key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#login button[type='submit']").should("be.enabled").click();
    cy.url().should("include", "login/success");
    cy.get("#login-success").should("contain.text", "Congratulations");
  });

  it("User with incorrect data navigates to failure page", () => {
    cy.visit("http://localhost:3000/login");
    const user = {
      username: "jamesbond",
      email: "jbond@mi6.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecurepass",
    };
    for (let key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#login button[type='submit']").should("be.enabled").click();
    cy.url().should("include", "login/failure");
    cy.get("#login-failure").should("contain.text", "An error occurred");
  });
});
