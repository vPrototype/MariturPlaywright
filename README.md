# MariturPlaywright

![Playwright Logo](https://playwright.dev/img/playwright-logo.svg)

## Descripción
MariturPlaywright es un proyecto de automatización de pruebas utilizando [Playwright](https://playwright.dev/), una poderosa librería para la automatización.

Este repositorio contiene scripts de prueba para la aplicación Maritur, garantizando la calidad y estabilidad del sistema mediante pruebas end-to-end (E2E).

## Características
- Automatización de pruebas con Playwright.
- Compatibilidad con navegadores Chromium, Firefox y WebKit.
- Pruebas de UI eficientes y confiables.
- Integración con CI/CD para ejecuciones automatizadas.

## Instalación
Para ejecutar las pruebas localmente, sigue estos pasos:

```sh
# Clonar el repositorio
git clone https://github.com/vPrototype/MariturPlaywright.git
cd MariturPlaywright

# Instalar dependencias
npm install

# Instalar Playwright
npx playwright install
```

## Ejecución de pruebas
Ejecuta las pruebas con el siguiente comando:

```sh
npx playwright test
```

Para ejecutar en un navegador específico:

```sh
npx playwright test --browser=chromium
```

## Estructura del Proyecto
```
MariturPlaywright/
│-- tests/               # Casos de prueba
│-- utils/               # Utilidades y helpers
│-- playwright.config.ts # Configuración de Playwright
│-- package.json         # Dependencias del proyecto
│-- README.md            # Documentación
```

## Contacto
Si tienes preguntas o sugerencias, no dudes en abrir un issue o contactarme en [GitHub](https://github.com/vPrototype).

---

© 2025 Iván Armin Pérez Flores. Todos los derechos reservados.

