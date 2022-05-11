import { Component } from '@angular/core';
import {Customer} from './customer.model'
import { HttpClient } from '@angular/common/http';
@Component({  
  templateUrl: './customer.component.html',  
})
export class CustomerComponent {
  constructor(public httpc: HttpClient) {    
    this.GetFromServer();
  }
  title = 'SampleProject';
  sample = "Naina Kureel"
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  GetFromServer(){
    debugger;
    this.httpc.get("http://localhost:58098/api/Customer").subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res))
  }
  SuccessGet(res:any){
    console.log(res);
    
    this.CustomerModels=res;
    console.log(this.CustomerModels);
  }
  ErrorGet(res:any){
    console.log(res);
  }
  AddCustomer() {
    this.httpc.post("http://localhost:58098/api/Customer", this.CustomerModel).subscribe(res=>this.Success,res=>this.Error);
    this.CustomerModel = new Customer();
    this.GetFromServer();
  }
  Error(res:any){
    console.log(res);
  }
  Success(res:any){
    console.log(res);
  }
  EditCustomer(input: Customer) {

    this.CustomerModel = input;

  }
  DeleteCustomer(input: Customer) {
    console.log(input);
  }
}
