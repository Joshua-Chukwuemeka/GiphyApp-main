import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GiphyServiceService {
  // URL for retrieving the data from the api. This strategy is subject to modification based on app demands.
  URL = `https://api.giphy.com/v1/gifs/search?`;
  apiKey = '&api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc';
  constructor(private http: HttpClient) {}

  //Method for quering the api to get searched gifs
  getGifsBySearch(searchTerm: string) {
    return this.http.get(
      `${this.URL}${this.apiKey}&q=${searchTerm}`
    );
  }

  //Method for quering the api to get gif based on ID
  getGifById(id: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/${id}?${this.apiKey}`);
  }

}
