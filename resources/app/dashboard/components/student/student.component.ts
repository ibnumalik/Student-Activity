import './student.component.scss'

export class StudentComponent implements ng.IComponentOptions {
  static NAME:string = 'studentComponent';
  template: string;
  controller;

  constructor() {
    this.template = require('./student.component.html');
    this.controller = StudentComponentController
  }
}

export class StudentComponentController implements ng.IComponentController {
  cards = [
    {
      title: 'Parking',
      img: 'img/red-car.png',
      description: 'Purchase monthly parking ticket here.',
      url: 'app.dashboard.parking',
      cta: 'Buy parking passes',
    },
    {
      title: 'Seminar',
      img: 'img/seminar-02.png',
      description: 'Check seminar scheduling.',
      cta: 'View schedule',
    },
    {
      title: 'Transcript',
      img: 'img/transcript.png',
      description: 'Apply for physical transcript.',
      cta: 'Request transcript',
    }
  ];
  constructor() {}

}