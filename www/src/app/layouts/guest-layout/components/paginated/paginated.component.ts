import { Component } from '@angular/core';

@Component({
  selector: 'app-paginated',
  templateUrl: './paginated.component.html',
  styleUrls: ['./paginated.component.scss']
})
export class PaginatedComponent {

  constructor() { }

  public getMaxPage(totalCount: number): number {
    return Math.ceil(totalCount / 300);
  }

  public getPages(page: number, totalCount: number): number[] {
    const pages = [];

    for (let i = page; i >= page - 2; i--) {
      if (i && i > 0) {
        pages.push(i);
      }
    }

    for (let i = page + 1; i <= page + 4; i++) {
      const total = Math.ceil(totalCount / 300) * 300;

      if (total - (i * 300) >= 0) {
        if (! pages.includes(i) && pages.length < 5) {
          pages.push(i);
        }
      }
    }

    for (let i = page; i > 1 + 4; i--) {
      const total = Math.ceil(totalCount / 300) * 300;

      if (total - (i * 300) >= 0) {
        if (i >= 1 && ! pages.includes(i) && pages.length < 5) {
          pages.push(i);
        }
      }

      if (pages.length === 5) {
        break;
      }
    }

    pages.sort(function(a, b) {
      return a - b;
    });

    return pages;
  }
}
