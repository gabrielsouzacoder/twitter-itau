import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from "ngx-mask";
import {
    CollapseModule,
    BsDropdownModule,
    TooltipModule,
    AccordionModule,
} from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { HourlyPostComponent } from './hourly-post/hourly-post.component';

@NgModule({
    declarations: [
        HomeComponent,
        UsersComponent,
        HashtagsComponent,
        HourlyPostComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxMaskModule.forRoot(),

        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
    ],
    exports: [
        HomeComponent,
        UsersComponent,
        HashtagsComponent,
        HourlyPostComponent,

    ],
    entryComponents: [
        HomeComponent,
        UsersComponent,
        HashtagsComponent,
        HourlyPostComponent,
    ]
})
export class HomeModule { }
