import { config as dotenvConfig } from 'dotenv';
import { Helper } from '../utils/Helpers';

//Por default nos vamos a dev pero puedes ejecutar de la siguiente manera
//npm run test:dev <-- Ambiente dev
//npm run test:stage <-- Ambiente stage
dotenvConfig({ path: `.env.${process.env.NODE_ENV || 'dev'}` });

//Asignar sus propiedades
interface Config {
  browserConfig: {
    headless: boolean;
    viewport: { width: number; height: number };
    timeout: number;
  };
  urls: {
    Home_Url: string;

    itineraryModuleUrl: string;
    userModuleUrl: string;
    userModuleAddUserUrl:string
    branchModuleUrl: string
    serviceModuleUrl: string
    documentModuleUrl: string
    roleModuleUrl: string
    supplierModuleUrl: string
    bankAccountModuleUrl: string
    concessionaireModuleUrl: string
    clientModuleUrl: string
    hotelModuleUrl: string
    configModuleUrl: string

    
  };
  credentials: {
    adminUser: string;
    adminPass: string;
  };
}

//Insertar valores a la propiedades
export const config: Config = {
  browserConfig: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    timeout: 10000,
  },
  urls: {
    Home_Url: process.env.MARITUR_HOME_MODULE!,

    itineraryModuleUrl: process.env.MARITUR_ITINERARY_MODULE!,

    userModuleUrl: process.env.MARITUR_USER_MODULE!,
    userModuleAddUserUrl: process.env.MARITUR_USER_MODULE_ADDUSER!,
    
    branchModuleUrl: process.env.MARITUR_BRANCH_MODULE!,

    serviceModuleUrl: process.env.MARITUR_SERVICE_MODULE!,
    
    documentModuleUrl: process.env.MARITUR_DOCUMENT_MODULE!,
    
    roleModuleUrl: process.env.MARITUR_ROLE_MODULE!,
    
    supplierModuleUrl: process.env.MARITUR_SUPPLIER_MODULE!,
    
    bankAccountModuleUrl: process.env.MARITUR_BANKACCOUNT_MODULE!,
    
    concessionaireModuleUrl: process.env.MARITUR_CONCESSIONAIRE_MODULE!,
    
    clientModuleUrl: process.env.MARITUR_CLIENT_MODULE!,
    
    hotelModuleUrl: process.env.MARITUR_HOTEL_MODULE!,
    
    configModuleUrl: process.env.MARITUR_CONFIG_MODULE!,
  },
  credentials: {
    adminUser: process.env.ADMIN_EMAIL!,
    adminPass: process.env.ADMIN_PASSWORD!
  },
};
