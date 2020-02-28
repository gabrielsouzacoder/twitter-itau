import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from 'src/app/services/tweet-service.service';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.scss']
})
export class HashtagsComponent implements OnInit {
  public hashtagList;

  constructor(private tweetService: TweetServiceService) { }

  ngOnInit() {
    this.searchHashtag();
  }

  searchHashtag() {
    this.tweetService.getHashtag().subscribe(c => {
      this.hashtagList = c.sort((a, b) => a._id.hashtag.localeCompare(b._id.hashtag));
    })

  }

}
