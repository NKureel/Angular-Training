import { Component } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  title = 'sample-project';
  imageUrl = '././assets/sample.jpg';
  sample = "Vikash Verma"

  constructor(public httpc: HttpClient) {
    this.GetFromServer();
  }
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  AddCustomer() {    
    //this.CustomerModels.push(this.CustomerModel);
    this.httpc.post("https://localhost:44332/api/Customer", this.CustomerModel).subscribe((res: any)=>this.Success);
    this.CustomerModel = new Customer();
    this.GetFromServer();
    //console.log(this.CustomerModels);
  }

  Error(res:any){
    console.log(res);
  }
  Success(res:any){
    console.log(res);
  }

  GetFromServer(){
    debugger;
    this.httpc.get("https://localhost:44332/api/Customer").subscribe((res: any)=>this.SuccessGet(res));
    //this.httpc.get("http://localhost:58098/api/Customer").subscribe((res: any)=>this.SuccessGet(res));
  }
  SuccessGet(res:any){
    console.log(res);
    
    this.CustomerModels=res;
    console.log(this.CustomerModels);
  }
  ErrorGet(res:any){
    console.log(res);
  }
  Edit()
  {
    this.httpc.put("https://localhost:44332/api/Customer",this.CustomerModel).subscribe((res: any)=>this.Success);
    this.CustomerModel = new Customer();
    this.GetFromServer();
  }
  SelectCustomer(input: Customer) {
    debugger;
    this.CustomerModel = input;
   
  }
  DeleteCustomer(input: Customer) {
    debugger;
    const options = {      
      body: {
        input
      }
    };
    
    this.httpc.delete<Customer>("https://localhost:44332/api/Customer",options).subscribe((res: any)=>this.Success);
    this.CustomerModel = new Customer();
    this.GetFromServer();
  }
}