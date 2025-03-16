import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(withEventReplay())]
};


export interface AppConfig {
  apiUrl: string;
  timeout: number;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const API_URL = new InjectionToken<string>('API_URL');

export function apiUrlFactory(): string {
  return 'https://api.example.com';
}
