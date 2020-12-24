import { Component, OnInit} from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public newsService: NewsService){}

  ngOnInit(): void {
    this.newsService.setData();
  }

  clearMemory(): void {
    this.newsService.favorites = [];
    this.newsService.favorite$.next([]);
  }

}
