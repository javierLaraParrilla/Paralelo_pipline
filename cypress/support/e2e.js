// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

//Si la aplicacion tiene errores JS, no falles el test
//En poryectos reales estos errores no se ignoran, sino que se corrige la aplicacion
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
}) 