import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from 'src/app/services/tweet-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersList;

  constructor(private tweetServices: TweetServiceService) { }

  ngOnInit() {
    this.tweetServices.getTopFive().subscribe(c => {
      this.usersList = c;
    })
  }
}
