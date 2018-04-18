import './dashboard.component.scss'

export class DashboardComponent implements ng.IComponentOptions {
  static NAME:string = 'dashboardComponent';
  template: string;

  constructor() {
    this.template = `
      <div class="dashboard-container">
        <div ui-view></div>
      </div>
    `;
  }
}