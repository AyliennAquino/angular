import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent }  from './post/post.component';
import { PostDetailComponent }  from './post/post-detail.component';
import { AboutComponent }  from './about/about.component';

const appRoutes: Routes = [
	{ path: '', component: PostComponent },
	{ path: 'post/:id', component: PostDetailComponent },
	{ path: 'about', component: AboutComponent }
]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);