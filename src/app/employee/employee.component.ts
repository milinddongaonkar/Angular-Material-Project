import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import{ MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns = ['id', 'name', 'department','joining_date'];
  dataSource=new MatTableDataSource();
   @ViewChild(MatSort) sort: MatSort;
countData= null;
 ngOnInit() {
   for(let i=0;i<candidate_data.length;i++){
     candidate_data[i].joining_date=<any>new Date(this.getDate(candidate_data[i].joining_date))
    }
    this.dataSource = new MatTableDataSource(candidate_data);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
   reset() {
     this.countData=null;
    this.dataSource = new MatTableDataSource(candidate_data);
  }
  search(filter){
    let data=[];
    for(let i=0;i<candidate_data.length;i++){
      if(candidate_data[i].name.toLowerCase()==filter.value?.toLowerCase()){
        data.push(candidate_data[i]);
      }
    }
    filter.value=null;
    this.dataSource = new MatTableDataSource(data);
  }
  getDate(date){
    var splitDate1 = date.split('/');
var day1 = splitDate1[0];
var month1 = splitDate1[1];
var year1  = splitDate1[2];
return( month1+"/"+day1+"/"+year1);
  }
  expMoreThanTwoYr(){
    let data=[];
    let a=new Date();
    for(let i=0;i<candidate_data.length;i++){
      let b=new Date(this.getDate(candidate_data[i].joining_date));
      let diff= Math.floor(a.getFullYear() - b.getFullYear());
      if(diff>=2){
        data.push(candidate_data[i]);
      }
    }
    this.dataSource = new MatTableDataSource(data);
  }

  removeCandidateFromDevlopmentDept(){
    let data=[];
    for(let i=0;i<candidate_data.length;i++){
      if(candidate_data[i].department!=="Development"){
        data.push(candidate_data[i]);
      }
    }
    this.dataSource = new MatTableDataSource(data);
  }

  getDistinctDataAndCount(){
     this.countData = {};

candidate_data.forEach(el => {
    this.countData[el.department] = (this.countData[el.department] || 0) + 1;
})
  }
}

const candidate_data=[ {
    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": "8/10/2016"
},
{"id": 12,"name": "John","department": "HR","joining_date": "18/1/2011"},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "28/11/2019"},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "7/7/2017"},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "19/8/2014"},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "5/10/2014"},
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": "6/4/2014"},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": "8/12/2010"},
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "7/5/2011"},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "20/10/2010"}];

