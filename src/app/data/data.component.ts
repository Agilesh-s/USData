import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.fetchData()
  }

  fetchData = ()=>{
    this.myApi.datas().subscribe(
      (data) =>{
        this.dataList = data
      }
    )
  }

  dataList:any = {}

  ngOnInit(): void {
  }

}
