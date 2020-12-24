import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  constructor(public newsService: NewsService) { }

  clearMemory(): void {
    this.newsService.favorites = [];
    this.newsService.favorite$.next([]);
  }

}
