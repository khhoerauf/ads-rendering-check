const { VideoElements } = require("./elements/videoElement");

class CoreModel {
  constructor() {
    this.videoElement = new VideoElements();
  }

  async checkVideoDisplayed() {
    cy.get(this.videoElement.videoContainer).should("be.visible");
    cy.get("@spyConsoleLog").should("be.calledWith", "Chartboost.Utils.show");
  }

  async waitAndClickSkipButton(amountToWait) {
    cy.wait(amountToWait);
    cy.get(this.videoElement.skipButton).should("be.visible").click();
  }

  async clickHudCheckClickCalled() {
    cy.get(this.videoElement.hudContainer)
      .should("be.visible")
      .contains("Download Now")
      .click()
      .then(() => {
        cy.get("@spyConsoleLog").should(
          "be.calledWith",
          "Chartboost.Utils.click"
        );
      });
  }

  async clickCloseButtonCheckCloseCalled() {
    cy.get(this.videoElement.closeButton)
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("@spyConsoleLog").should("be.calledWith", "mraid.close");
      });
  }

  async clickSkipMuteButtonCheckMuteCalled(actionCalled) {
    cy.get(this.videoElement.muteImage)
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("@spyConsoleLog").should(
          "be.calledWith",
          "Chartboost.Utils.callNative",
          actionCalled,
          undefined
        );
      });
  }

  async clickVideoPlayback() {
    cy.get(this.videoElement.videoContainer).should("be.visible").click();
  }

  async manageVideo(eventHandler) {
    cy.window().then((win) => {
      win.console.log(
        win.Chartboost.EventHandler.handleNativeEvent(eventHandler),
        win
      );
    });
  }
}

module.exports = { CoreModel };
