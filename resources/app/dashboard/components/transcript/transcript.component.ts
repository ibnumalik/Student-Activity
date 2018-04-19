import './transcript.component.scss'

export class TranscriptComponent implements ng.IComponentOptions {
  static NAME:string = 'transcriptComponent';
  template: string;
  controller;

  constructor() {
    this.template = require('./transcript.component.html');
    this.controller = TranscriptComponentController
  }
}

export class TranscriptComponentController implements ng.IComponentController {

  constructor() {}

}