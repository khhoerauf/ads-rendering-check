const skipButton = '.skip-button-img'
const videoContainer = '#video-player'
const portraitContainer = '#landing-portrait-container'
const hudContainer = '#hud-container'
const hudClickout = '#hud-cta'
const closeButton = '#close-button'
const muteImage = '#mute-image'

describe('Video test', function () {
    it('TC_01 The template loads and the video is visible', () => {       
       cy.get(videoContainer).should("be.visible")
       cy.log("The template is loaded and the video is visible")
    })

    it('TC_02 Verify Skip button validation', () => {
        cy.get(skipButton).should("not.be.visible")
        cy.wait(5000)
        cy.get(skipButton).should("be.visible") 
        cy.log("The Skip button is visible 5 seconds in the video")

        cy.get(skipButton).click()
        cy.get('@spyConsoleLog')
        .should('not.be.calledWith', 'Chartboost.Utils.click')
        cy.get(hudContainer)
          .should("be.visible")
          .click()
        cy.get('@spyConsoleLog')
          .should('be.calledWith', 'Chartboost.Utils.click')
        cy.log("Skip button takes to the endcard")
    }) 

    it('TC_03 Verify HUD validation', function () {
      cy.get('@spyConsoleLog')
        .should('not.be.calledWith', 'Chartboost.Utils.click')
      cy.get(videoContainer)
        .click({force: true});
      cy.get('@spyConsoleLog')
        .should('not.be.calledWith', 'Chartboost.Utils.click')
        cy.get(hudClickout)
        .contains("Download Now")
        .click({force: true});
      cy.get('@spyConsoleLog')
        .should('be.calledWith', 'Chartboost.Utils.click')

      cy.log("HUD cta generates `Chartboost.Utils.click` in the console") 
    })

    it('TC_04 Verify Close button validation', function ()  {       
        cy.wait(5000)
        cy.get(skipButton).should("be.visible").click()
        cy.log("Precondition steps")
        cy.wait(1000)
        cy.get('@spyConsoleLog')
          .should('not.be.calledWith', 'mraid.close')  
        cy.get(closeButton)
          .should("be.visible")
          .click()
        cy.get('@spyConsoleLog')
          .should('be.calledWith', 'mraid.close')
        cy.log("Close button generates `mraid.close` in the console") 
    })

    it('TC_05 Verify Mute button validation', function ()  {       
      cy.get(muteImage)
        .should("be.visible")
        .click()
      cy.get('@spyConsoleLog')
        .should('be.calledWithMatch', 'Chartboost.Utils.callNative', 'unmute')
      cy.get(muteImage)
        .should("be.visible")
        .click()
      cy.get('@spyConsoleLog')
        .should('be.calledWith', 'Chartboost.Utils.callNative', 'mute')
        cy.get(muteImage)
        .should("be.visible")
        .click()
      cy.get('@spyConsoleLog')
        .should('be.calledWithMatch', 'Chartboost.Utils.callNative', 'unmute')

      cy.log("The video element is muted/unmuted") 
    })

    it('TC_06 Verify video validation', () => {
      manageVideo("onBackground")
      cy.get('#play-button').should("be.visible")
      
      manageVideo("onForeground")
      cy.get('#play-button').should("not.be.visible")
    })
})

function manageVideo(eventHandler) { 
  cy.window().then(win => {
    //onBackground - Pause video
    //onForeground - Resume video
    win.console.log(win.Chartboost.EventHandler.handleNativeEvent(eventHandler), win) 
  })}
