import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-addcustomer',
	templateUrl: './addcustomer.page.html',
	styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

	desc_customer: string = "";
	name_customer: string = "";

	constructor() { }

	ngOnInit() {
	}

	createCustomer(){
		console.log('Ok!');
	}

}
