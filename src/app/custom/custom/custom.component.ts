import { Component, inject, Inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../../services/logger.service';

@Injectable()
class BaseService {
  getMessage() {
    return 'Hello from BaseService!';
  }
}

@Injectable()
class AliasService {
  getMessage() {
    return 'Hello from AliasService!';
  }
}

@Injectable()
class ApiService {
  getData() {
    return 'Data from API Service';
  }
}

export function apiServiceFactory() {
  return new ApiService();
}

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [CommonModule],
  providers: [
    // useValue
    {
      provide: 'CustomConfig',
      useValue: { customUrl: 'https://google.com', timeout: 5000 },
    },
    // useClass
    { provide: LoggerService, useClass: LoggerService },
    // useExisting
    { provide: AliasService, useClass: BaseService },
    { provide: BaseService, useExisting: AliasService },
    // useFactory
    { provide: ApiService, useFactory: apiServiceFactory },
  ],
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent {
  constructor(@Inject('CustomConfig') public custconfig: any) {
    console.log('Config:', this.custconfig);
  }

  logger = inject(LoggerService);
  logMessage = this.logger.log('Message service called');

  baseService = inject(AliasService);
  message = this.baseService.getMessage();

  apiService = inject(ApiService);
  data = this.apiService.getData();



}
