import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public chr = 'top100';

  constructor(private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      if (queryParamMap.get('chr')) {
        this.chr = queryParamMap.get('chr');
      }
    });
  }

  public getAlphabetLetter(code: number, caps: boolean = false) {
    const offset = (caps) ? 65 : 97;

    return String.fromCharCode(code + offset);
  }
}
