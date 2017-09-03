import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WeUiModule } from 'ngx-weui';

import { AppRouterModule } from './router';

import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from 'ng2-translate/ng2-translate';
import { createTranslateLoader } from './translate/translateLoader';

/** 视图组件 **/
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { NavTabComponent } from './common/nav-tab/nav-tab.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { FindComponent } from './pages/find/find.component';
import { MyComponent } from './pages/my/my.component';
import { HeaderComponent } from './common/header/header.component';
import { ChildComponent } from './components/child/child.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

/** 属性指令组件 **/
import { HighLightDirective } from './attribute-directives/high-light.directive';

/** Service **/
import { GetPersonsService } from './services/getPersons';
import { UserService } from './services/userService';

@NgModule({
    declarations: [
        AppComponent,
        NavTabComponent,
        HomeComponent,
        ReserveComponent,
        ActivityComponent,
        FindComponent,
        MyComponent,
        HeaderComponent,
        HighLightDirective,
        ChildComponent,
        UserInfoComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRouterModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        WeUiModule.forRoot()
    ],
    providers: [
        GetPersonsService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
