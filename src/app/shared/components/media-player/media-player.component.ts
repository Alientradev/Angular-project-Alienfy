// import { Component, OnInit } from '@angular/core';
// import { TrackModel } from '../../../core/models/tracks.models';

// @Component({
//   selector: 'app-media-player',
//   templateUrl: './media-player.component.html',
//   styleUrls: ['./media-player.component.css']
// })
// export class MediaPlayerComponent implements OnInit {

//   mockCover: TrackModel = {
//     cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
//     album: 'One Love',
//     name: 'David Guetta',
//     url: 'http://localhost:3000/track.mp3',
//     _id: 1
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  
    mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album: 'One Love',
    name: 'David Guetta',
    url: 'http://localhost:3000/track.mp3',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {

  }


}