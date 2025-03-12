import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export default async function globalSetup() {
    console.log('🧹 Limpiando carpetas de reportes de Allure...');

    // Define las rutas de las carpetas a eliminar
    const allureResultsPath = path.resolve('allure-results');
    const allureReportPath = path.resolve('allure-report');

    try {
        if (fs.existsSync(allureResultsPath)) {
            if (process.platform === 'win32') {
                execSync(`rd /s /q "${allureResultsPath}"`); // Comando para Windows
            } else {
                execSync(`rm -rf "${allureResultsPath}"`); // Comando para Linux/Mac
            }
        }

        if (fs.existsSync(allureReportPath)) {
            if (process.platform === 'win32') {
                execSync(`rd /s /q "${allureReportPath}"`);
            } else {
                execSync(`rm -rf "${allureReportPath}"`);
            }
        }

        console.log('✅ Limpieza completada.');
    } catch (error) {
        console.error('❌ Error al limpiar carpetas de Allure:', error);
    }
}
