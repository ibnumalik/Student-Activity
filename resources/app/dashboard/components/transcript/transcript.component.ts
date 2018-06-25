import { IStorageService } from './../../../common/storage.service';
import './transcript.component.scss'

export class TranscriptComponent implements ng.IComponentOptions {
  static NAME: string = 'transcriptComponent';
  public template: string;
  public controller;

  constructor() {
    this.template = require('./transcript.component.html');
    this.controller = TranscriptComponentController;
  }
}

export class TranscriptComponentController implements ng.IComponentController {
  public transcriptForm;
  public student;

  constructor(private storageService: IStorageService) {
    'ngInject';
  }

  $onInit() {
    this.student = this.storageService.getItem('transcriptForm') || {};
  }

  $onDestroy() {
    this.updateSavedForm();
  }

  submit() {
    if (this.transcriptForm.$valid) {
      return;
    }
  }

  updateSavedForm() {
    this.storageService.setItem('transcriptForm', this.student);
  }
}