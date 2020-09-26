import { Component, OnInit } from '@angular/core';
import { SwapiWrapperService } from '../swapi-wrapper.service';

@Component({
  selector: 'app-swapy-queries',
  templateUrl: './swapy-queries.component.html',
  styleUrls: ['./swapy-queries.component.scss']
})
export class SwapyQueriesComponent implements OnInit {

  numbers: Array<any> = [];
  page: number = 1;
  pages: number = -1;
  pageSize: number = 10;
  totalRecords: number = 0;
  records: any[] = [];

  constructor(protected userService: SwapiWrapperService) { }
  
  ngOnInit(): void {
    this.getData(1);
  }

  getData(page) {
    this.page = page;
    this.userService.getData(this.page).subscribe(
      (data) => { 
        this.totalRecords = data['count'];
        this.records = data['results'];
        this.pages = Math.ceil(this.totalRecords/this.pageSize);
        this.numbers = Array.from({ length: this.pages },(v,k) => k+1);
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
