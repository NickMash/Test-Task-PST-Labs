import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class NewsService {

  public favorite$: any = new BehaviorSubject([]);
  public news$: any = new Subject();
  news = [];
  favorites = [];

  constructor(private http: HttpClient) {
  }

  setData(): void {
    this.http.get('assets/data.json').subscribe(data => {
      this.news$.next(data['articleList']);
      this.news = data['articleList'];
    });
  }

  deleteNewsById(id): void {
    this.news = this.news.filter(item => item.id !== id);
    this.updateData(this.news);
    this.favorites = this.favorites.filter(item => item.id !== id);
    this.favorite$.next(this.favorites);
  }

  updateData(data): void {
    this.news$.next(data);
  }

  addToFavorites(id): void {
    const article = this.news.find(item => (item.id === id));
    this.favorites.push(article);
    this.favorite$.next(this.favorites);
  }

  checkFavorites(id): any {
    return  this.favorites.find(item => (item.id === id));
  }
}
