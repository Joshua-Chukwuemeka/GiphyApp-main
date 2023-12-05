import { AfterViewInit, Component, OnInit } from '@angular/core';

import { GiphyServiceService } from '../giphy-service.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit, AfterViewInit {
  gifsSearchedData!: [] | any; //Property holding the return gifs

  constructor(private giphyService: GiphyServiceService) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  // Getting the gifs according to the searchedTerm been passed in.
  onClick(searchTerm: string) {
    this.giphyService.getGifsBySearch(searchTerm).subscribe(
      (details: [] | any) => {
        this.gifsSearchedData = details.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //Returning the gifsSearchedData. So it could be passed to the child componenent.
  getData() {
    return this.gifsSearchedData;
  }
}
