import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { PostService } from './post.service';

@Component({
  selector: 'post-detail',
  template: `<h1>Post detail</h1>
  	<div *ngIf="post">
  		<h3>{{ post.title }}</h3>
		<p>{{ post.body }}</p>
  	</div>
  	<button (click)="goBack()">Back</button>
  	<a routerLink="/">Back</a>
  `,
  providers: [PostService]
})
export class PostDetailComponent implements OnInit { 
	@Input() post:post;

	constructor(private router: Router,
		private postService: PostService, 
		private activatedRoute: ActivatedRoute, 
		private location: Location) 
	{}

	ngOnInit(): void {
		/*this.activatedRoute.params
			.subscribe((params: Params) => this.postService.getPost(+params['id'])
			.subscribe(res => this.post = res))*/
	}

	/*ngOnInit(): void {
		const userId = this.activatedRoute.snapshot.params['id'];
		this.postService.getPost(+userId).subscribe(res => this.post = res);
	}*/

	goBack(): void {
        this.location.back();
        //this.router.navigate(['about']);
    }
}

interface post {
	id: number;
	title: string;
	body: string;
}
