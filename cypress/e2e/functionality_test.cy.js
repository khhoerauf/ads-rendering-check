const { CoreModel } = require("../page/coreModel");

beforeEach(() => {
  cy.visitFixtureFile("video-ad");
  cy.spyConsoleLog("spyConsoleLog");
});

describe("General functional test with checking console logs", function () {
  it("plays video in mobile viewport", () => {
    const core = new CoreModel();

    core.checkVideoDisplayed();
  });

  it("allows to skip ad after 5 seconds and close", () => {
    const core = new CoreModel();

    core.waitAndClickSkipButton(5000);
    core.clickCloseButtonCheckCloseCalled();
  });

  it("allows to click on HUD model", function () {
    const core = new CoreModel();

    core.clickVideoPlayback();
    core.clickHudCheckClickCalled();
  });

  it("mute button validation", function () {
    const core = new CoreModel();

    core.checkVideoDisplayed();

    core.clickSkipMuteButtonCheckMuteCalled("unmute");
    core.clickSkipMuteButtonCheckMuteCalled("mute");
  });

  it("video validation", () => {
    const core = new CoreModel();

    core.manageVideo("onBackground");
    cy.get("#play-button").should("be.visible");

    core.manageVideo("onForeground");
    cy.get("#play-button").should("not.be.visible");
  });
});
