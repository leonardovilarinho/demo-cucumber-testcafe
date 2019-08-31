const { Given, When, Then } = require('cucumber')

const GoogleObject = require('../../objects/GoogleObject')
const google = new GoogleObject()

Given('acesso o site do Google', async () => {
  google.setController(testController)
  return google.goToSearchPage()
})

When('acesso a pagina de pesquisa', async () => {
  return await google.searchBy('training center')
})

Then('devo visualizar o resultado do Github em primeiro', async () => {
  return await google.getController().expect(google.getFirstResult().innerText).eql('Training Center · GitHub')
})
