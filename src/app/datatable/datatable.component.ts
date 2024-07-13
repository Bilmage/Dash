import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  dataSource = new MatTableDataSource([
    {
      id: 1,
      col1: 'Safaricom',
      col2: 'Internet',
      phoneNumber: '123-456-7890',
      email: 'safaricom@example.com',
      description: 'Telecom company',
      registeredAt: '2023-08-29 10:30:00',
      accredited: true,
    },
    {
      id: 1,
      col1: 'Surgipharm',
      col2: 'Pharmaceutical',
      phoneNumber: '123-456-7890',
      email: 'surgipharm@example.com',
      description: 'pharmaceutical company',
      registeredAt: '2023-08-29 10:30:00',
      accredited: true,
    },
    {
      id: 1,
      col1: 'Gengis Capital',
      col2: 'Investment',
      phoneNumber: '123-456-7890',
      email: 'gengiscapital@example.com',
      description: 'Investment company',
      registeredAt: '2023-08-29 10:30:00',
      accredited: true,
    },
  ]);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private matPaginatorIntl: MatPaginatorIntl
  ) {}

  ngOnInit() {
    // Create a MatPaginator instance
    const paginator = new MatPaginator(
      this.matPaginatorIntl,
      this.changeDetectorRef
    );

    // Set the paginator for the dataSource
    this.dataSource.paginator = paginator;
  }
}
