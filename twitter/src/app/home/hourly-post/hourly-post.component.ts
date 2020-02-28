import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from 'src/app/services/tweet-service.service';

@Component({
  selector: 'app-hourly-post',
  templateUrl: './hourly-post.component.html',
  styleUrls: ['./hourly-post.component.scss']
})
export class HourlyPostComponent implements OnInit {
  public hourslyPostList;

  constructor(private tweetService: TweetServiceService) { }

  ngOnInit() {
    this.tweetService.getHours().subscribe(c => {
      this.hourslyPostList = c
    })
  }

}
