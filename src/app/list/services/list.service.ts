import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ListService {
	//  this we can make as environment configurable  
	private URL : string = "http://jsonplaceholder.typicode.com";


	constructor(
		private http: HttpClient
		) { }

	getList() {
		return this.http.get(this.URL + '/posts');
	}

}
