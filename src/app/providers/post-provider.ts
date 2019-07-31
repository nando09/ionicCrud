import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {
	server: string = "http>//localhost/ionic/php/crud";

	constructor(public http : Http) {

	}

	postData(body, file){
		let type = "application/json"; charset=UTF-8;
		let headers = new Headers({ 'Constructor-Type': type });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.serve = file, JSON.stringify(body), options)
		.map(res => res.json());
	}
}
