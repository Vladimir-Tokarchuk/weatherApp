import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = 'bad46dfee1ae1125ec4faf31e63449de' 

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
  }
  
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}
