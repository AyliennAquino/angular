import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from './post.service';

/*<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
    <label for="firstName">First Name</label><br>
    <input type="text" id="firstName" name="firstName" [(ngModel)]="contact.firstName" ngControl="firstName" required #firstName="ngModel"> 
    <div *ngIf="firstName.invalid">
    <div *ngIf="firstName.errors.required">
      firstName is required.
    </div>
  </div>
    <br>

    <label for="lastName">Last Name</label><br>
    <input type="text" id="lastName" name="lastName" [(ngModel)]="contact.lastName" ngControl="lastName" required #lastName="ngModel"> 
    <div *ngIf="lastName.invalid">
    <div *ngIf="lastName.errors.required">
      lastName is required.
    </div>
  </div>
  <br>
    <button [disabled]="!myForm.valid" type="submit">Submit</button>
</form>*/

/*<form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">
    <label for="firstName">First Name</label><br>
    <input type="text" id="firstName" name="firstName" formControlName="firstName"> 
    <div *ngIf="firstName.invalid">
    <div *ngIf="firstName.errors.required">
      firstName is required.
    </div>
    <div *ngIf="firstName.errors.minlength">
      minLength error.
    </div>
  </div>
    <br>

    <label for="lastName">Last Name</label><br>
    <input type="text" id="lastName" name="lastName" formControlName="lastName"> 
    <div *ngIf="lastName.invalid">
    <div *ngIf="lastName.errors.required">
      lastName is required.
    </div>
  </div>
  <br>

    <button [disabled]="!myForm.valid" type="submit">Submit</button>
</form>*/

/*<li *ngFor="let post of posts"><a routerLink="post/{{post.id}}">{{ post.title }}</a></li>*/

@Component({
  selector: 'my-app',
  template: `
    <div style="color:red;">{{ errorMsg }}</div>

    <input type="text" id="search" name="search" (keyup)="onKeyup($event)">
    <button (click)="search()">Search</button>

    <div *ngIf="searchPost">
      <label>{{ searchPost.title }}</label>
    </div>
    
    <br>

    <ul>
      <li *ngFor="let post of posts" (click)="selectPost(post)">{{ post.title }}</li>
    </ul>
    <post-detail [post]="selectedPost"></post-detail>

    <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
        <label for="firstName">First Name</label><br>
        <input type="text" id="firstName" name="firstName" [(ngModel)]="contact.firstName" ngControl="firstName" required #firstName="ngModel"> 
        <div *ngIf="firstName.invalid">
        <div *ngIf="firstName.errors.required">
          firstName is required.
        </div>
      </div>
        <br>

        <label for="lastName">Last Name</label><br>
        <input type="text" id="lastName" name="lastName" [(ngModel)]="contact.lastName" ngControl="lastName" required #lastName="ngModel"> 
        <div *ngIf="lastName.invalid">
        <div *ngIf="lastName.errors.required">
          lastName is required.
        </div>
      </div>
      <br>
        <button [disabled]="!myForm.valid" type="submit">Submit</button>
    </form>
  `,
  styles: [`
    .ng-invalid:not(form) {
      border: 1px solid red;
    }
  `]
})
export class PostComponent implements OnInit { 

  posts: Post[];
  selectedPost: Post;
  contact: Contact;
  //myForm: FormGroup;
  searchText: number;
  searchPost: Post;

  errorMsg:string;

  constructor(private postService: PostService) {
    console.log('constructor');
  }

  /*createForm() {
    this.myForm = new FormGroup({
      'firstName': new FormControl(this.contact.firstName, [Validators.required, Validators.minLength(4)]),
      'lastName': new FormControl(this.contact.lastName, [Validators.required])
    });
  }*/

  onSubmit(value:any) {
    console.log(value);
    console.log(this.contact);
  }

  ngOnInit() {
    console.log('ngOnInit');

    this.contact = {firstName:'Aylienn', lastName:''};
    //this.createForm();

    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  //get firstName() { return this.myForm.get('firstName'); }

  //get lastName() { return this.myForm.get('lastName'); }

  selectPost(post: Post) {
      this.selectedPost = post;
  }

  onKeyup(event:any) {
    this.searchText = event.target.value;
    console.log(this.searchText);
  }

  search() {
    this.postService.getPost(this.searchText)
        .subscribe(searchPost => this.searchPost = searchPost/*,
                   errorMsg => this.errorMsg = errorMsg*/);
  }
}

interface Contact{
  firstName:string;
  lastName:string
}

interface Post{
  id:number;
  title:string;
  body:string
}
