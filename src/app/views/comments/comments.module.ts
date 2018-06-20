import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { ListitemComponent } from './listitem/listitem.component';
import { ListserviceService } from '../../shared/services/listservice.service';
import { FilterListPipe } from '../../shared/pipes/filter-list.pipe';
import { DragulaModule } from 'ng2-dragula';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DragulaModule,
    InfiniteScrollModule
  ],
  declarations: [CommentsComponent, ListitemComponent,  FilterListPipe],
  providers: [ListserviceService]
})
export class CommentsModule { }
