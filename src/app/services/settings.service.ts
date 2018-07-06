import { Injectable } from '@angular/core';
import { Settings } from './models/Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: false
  };

  constructor() {
    if (localStorage.getItem('settings') != null) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings() {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    this.settings = settings;
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
