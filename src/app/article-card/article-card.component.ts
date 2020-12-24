import { Component, Input } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {

  constructor(public authorizationService: AuthorizationService, public newsService: NewsService) { }

  @Input() id;
  @Input() title;
  @Input() body;
  @Input() isFavorites = false;

  deleteNews(id): void {
    this.newsService.deleteNewsById(id);
  }


  addArticle(id): void {
    this.newsService.addToFavorites(id);
  }

}
