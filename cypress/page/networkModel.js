class NetworkModel {
  constructor() {
    this.requestHook = {};
  }

  async interceptUserAgent() {
    cy.intercept("POST", "/api/user_agent", []).as("getUserAgent");
  }

  async checkUserAgentSucceed() {
    cy.wait("@getUserAgent").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  }

  async interceptShowAndImptrackers() {
    cy.intercept("/api/show", []).as("getShow");
    cy.intercept("/api/imptrackers", []).as("getImptrackers");
  }

  async checkShowAndImptracersSucceed() {
    cy.wait(["@getShow", "@getImptrackers"]).then(
      ([showResponse, imptrackersResponse]) => {
        expect(showResponse.response.statusCode).to.equal(200);
        expect(imptrackersResponse.response.statusCode).to.equal(200);
      }
    );
  }
}

module.exports = { NetworkModel };
