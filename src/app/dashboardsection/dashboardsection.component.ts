import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardsection',
  templateUrl: './dashboardsection.component.html',
  styleUrls: ['./dashboardsection.component.css'],
})
export class DashboardsectionComponent {
  businessData = [
    {
      businessName: 'Safaricom',
      businessCategory: 'Internet',
      status: 'Accredited',
      postedAgo: '1 day ago',
      logoSrc: '../../assets/images/Safaricom.png',
    },
    {
      businessName: 'Dropbox',
      businessCategory: 'Cloud',
      status: 'Accredited',
      postedAgo: '3 days ago',
      logoSrc: '../../assets/images/Dropbox logo.png',
    },
  ];
}
