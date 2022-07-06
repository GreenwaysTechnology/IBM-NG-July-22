import { Component, OnInit } from '@angular/core';
import { Address } from '../types/address.type';
import { Employee } from '../types/employee.type';
import { Experience } from '../types/experience.type';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [
  ]
})
export class EmployeeComponent implements OnInit {

  //state : instance variables //models
  //   id: number = 1
  //   name: string = "Subramanian"
  //   salary: number = 1000
  //   status: boolean = true
  //   address: Address = {
  //     city: 'Coimbatore'
  //   }
  //   //array
  //   education: Array<string> = [
  //     "10", "12", "UG", "PG"
  //   ]
  //   //expereince information
  //   experience: Array<Experience> = [{
  //     id: 1,
  //     noofYears: 5,
  //     client: 'IBM',
  //     location: 'Bangalore'
  //   },
  //   {
  //     id: 2,
  //     noofYears: 3,
  //     client: 'Sony',
  //     location: 'Bangalore'
  //   },
  //   {
  //     id: 3,
  //     noofYears: 4,
  //     client: 'IBS'
  //   }
  // ]

  employee:Employee = {
    id: 1,
    name: 'Subramanian',
    salary: 1000,
    status: true,
    address: {
      city: 'Coimbatore'
    },
    education: [
      "10", "12", "UG", "PG"
    ],
    experience: [{
      id: 1,
      noofYears: 5,
      client: 'IBM',
      location: 'Bangalore'
    },
    {
      id: 2,
      noofYears: 3,
      client: 'Sony',
      location: 'Bangalore'
    },
    {
      id: 3,
      noofYears: 4,
      client: 'IBS'
    }
    ]
  }


  constructor() { }

  ngOnInit(): void {
  }

}
