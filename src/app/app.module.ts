import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleCardComponent } from './article-card/article-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthorizationService } from './services/authorization.service';
import { NewsService } from './services/news.service';
import { AuthGuard } from './guard/auth.guard';
import { LoginBoxComponent } from './login-box/login-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent,
    NavigationComponent,
    MenuItemComponent,
    HomepageComponent,
    FavoritesComponent,
    AuthorizationComponent,
    LoginBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthorizationService, NewsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
