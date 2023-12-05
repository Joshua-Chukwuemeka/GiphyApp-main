import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GiphyServiceService } from '../giphy-service.service';

@Component({
  selector: 'app-gifdetails',
  templateUrl: './gifdetails.component.html',
  styleUrls: ['./gifdetails.component.scss'],
})
export class GifdetailsComponent implements OnInit {
  gifsIdData: [] | any; // Storing the return gif based on the id
  constructor(
    private route: ActivatedRoute,
    private gifService: GiphyServiceService
  ) {}

  ngOnInit(): void {
    // Getting the particular gif according to the ID been passed on the route params.
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.gifService.getGifById(params['id']).subscribe((details: [] | any) => {
          this.gifsIdData = details.data;
        });
      }
    });
  }
}
