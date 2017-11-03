import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class PostService {
	constructor(private http: Http) {
		console.log('Post service inicialized .....');
	}	

	getPosts(){
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
			.map((res:Response) => res.json());	
	}

	getPost(id:number){
		return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
			.map((res:Response) => res.json());
			//.catch(this._errorHandler());
	}

	/*getPost(id:number){
		return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
			.map((res:Response) => res.json());
	}*/

	_errorHandler(error: Response) {
		return Observable.throw(error || 'Server Error')
	}
}
