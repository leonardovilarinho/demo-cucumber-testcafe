const { Selector } = require('testcafe')

module.exports = class GoogleObject {
  async goToSearchPage () {
    await this.controller.navigateTo('https://www.google.com.br')
  }

  async searchBy (term) {
    await this.controller.typeText('input[name=q]', term).pressKey('enter')
  }

  getFirstResult () {
    return Selector('h3 .ellip').with({ boundTestRun: this.controller })
  }

  setController (controller) {
    this.controller = controller
  }

  getController () {
    return this.controller
  }
}