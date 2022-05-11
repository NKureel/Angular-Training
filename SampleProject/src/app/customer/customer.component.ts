import { Component } from '@angular/core';
import {Customer} from './customer.model'
@Component({  
  templateUrl: './customer.component.html',  
})
export class CustomerComponent {
  title = 'SampleProject';
  sample = "Naina Kureel"
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  AddCustomer() {
    this.CustomerModels.push(this.CustomerModel);   
    this.CustomerModel = new Customer();    
    console.log(this.CustomerModels);
  }
  EditCustomer(input: Customer) {

    this.CustomerModel = input;

  }
  DeleteCustomer(input: Customer) {
    console.log(input);
  }
}
