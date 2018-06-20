import { Routes } from '@angular/router';
import { CommentsComponent } from './views/comments/comments.component'

export const rootRouterConfig: Routes = [
    { 
      path: '', 
      component: CommentsComponent, 
      pathMatch: 'full' 
    }
]