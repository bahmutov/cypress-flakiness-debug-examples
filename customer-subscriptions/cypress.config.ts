/// <reference types="cypress" />
import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'hejdx4',
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support.ts',
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      return config
    },
  },
})
