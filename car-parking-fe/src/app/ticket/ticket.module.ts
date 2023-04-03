import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketUpdateComponent } from './ticket-update/ticket-update.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [TicketListComponent, TicketCreateComponent, TicketUpdateComponent],
    imports: [
        CommonModule,
        TicketRoutingModule,
        ReactiveFormsModule
    ]
})
export class TicketModule { }
