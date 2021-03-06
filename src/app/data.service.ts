import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEuroJackPotResults, IAppModel, IRank, IDot } from './data.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseURL = 'https://www.lottoland.com/api/drawings';
  constructor(public http: HttpClient) { }

  public getData() {
    return this.http.get<IEuroJackPotResults>(`${this.baseURL}/euroJackpot`).pipe(
      map(this.castToModel),
    );
  }

  private castToModel = (response: IEuroJackPotResults): IAppModel => {
    let odds: IRank[] = [];

    for (const [key, value] of Object.entries(response.last.odds)) {
      if (value.winners > 0) {
        odds = [...odds, value];
      }
    }

    odds.sort((a, b) => {
      return b.prize - a.prize;
    });

    const numbers: IDot[] = response.last.numbers.map((value: number): IDot => {
      return {
        number: value,
        extra: response.last.euroNumbers.find(element => element === value) > 0 ? true : false,
      };
    });

    const zeroDay = response.last.date.day < 10 ? 0 : '';
    const zeroMoth = response.last.date.month < 10 ? 0 : '';
    const date = `${zeroDay}${response.last.date.day}-${zeroMoth}${response.last.date.month}-${response.last.date.year}`;

    return {
      date,
      numbers,
      odds,
    };
  }

}
