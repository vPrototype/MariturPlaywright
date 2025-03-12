import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

const envFile = `.env.${process.env.NODE_ENV}`;
console.log(`Cargando configuración desde: ${envFile}`);

config({ path: envFile });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  globalSetup: require.resolve('./config/globalSetup.ts'),

  // Configuración del reporter
  reporter: [
    ['list'],
    ['allure-playwright', {
      outputFolder: 'allure-results', // Definir el folder de resultados
      suiteTitle: true, // Mostrar el título de la suite en el reporte
      details: true // Mostrar detalles de la prueba en el reporte
    }]
  ],

  // Configuración del entorno de pruebas
  use: {
    headless: process.env.CI ? true : false,  // Dependiendo del entorno
    baseURL: process.env.BASE_URL,  // Base URL desde las variables de entorno
    screenshot: 'on',  // Tomar capturas en cada paso
    video: 'retain-on-failure',  // Guardar video solo si falla la prueba
    trace: 'retain-on-failure',  // Guardar el trace solo si falla
  },

  // Configuración de proyectos (usualmente para múltiples navegadores)
  projects: [
    {
      name: 'setup',
      testMatch: /global\.setup\.ts/,  // Configuración global
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],  // Asegura que la configuración global se ejecute antes
    },
    // Habilitar otros navegadores si es necesario
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],

  /* Configuración de servidor local si es necesario
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
  */
});
