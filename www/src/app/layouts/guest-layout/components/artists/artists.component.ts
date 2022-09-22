import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestGraphQLService } from 'app/data/service/guest-graph-ql.service';
import { ideahub } from 'googleapis/build/src/apis/ideahub';
import { param } from 'jquery';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  private query = `
    query ArtistList($chr: String = "a", $after: String = "LTE=") {
      artists (filter: { name_sort: "ASC", name_startswith: $chr, _after: $after }) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            name
          }
        }
      }
    }
  `;

  private top100query = `
    {
      artists (filter: { name_sort: "ASC", top100: true }) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            name
          }
        }
      }
    }
    `;

  private otherQuery = `
    query ArtistList($after: String = "LTE=") {
      artists (filter: { name_sort: "ASC", _after: $after }) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            name
          }
        }
      }
    }
  `;

  private filterQuery = `
    query ArtistList($filter: String = "a", $after: String = "LTE=") {
      artists (filter: { name_sort: "ASC", name_contains: $filter, _after: $after }) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            name
          }
        }
      }
    }
  `;

  public chr = 'top100';
  public page = 1;
  public pages = [];
  public maxPage = 1;
  public pageJump = 1;
  public filterString = '';
  public graphQLArtists: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private guestGraphQLService: GuestGraphQLService,
    private router: Router
  ) {
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      this.graphQLArtists = null;

      if (queryParamMap.get('chr')) {
        this.chr = queryParamMap.get('chr');
      }

      if (queryParamMap.get('page')) {
        this.page = Number(queryParamMap.get('page'));
      } else {
        this.page = 1;
      }

      if (queryParamMap.get('filterString')) {
        this.chr = 'filter';
        this.filterString = queryParamMap.get('filterString');
      } else {
        this.filterString = '';
      }

      this.pageJump = this.page;

      const parameters: any = {};

      let query = '';
      switch (this.chr) {
        case 'filter':
          parameters.filter = this.filterString;
          parameters.after = btoa(String((this.page - 1) * 300 - 1))
          query = this.filterQuery;
          break;
        case 'top100':
          query = this.top100query;
          break;
        case 'other':
          parameters._artists_other = true;
          parameters.after = btoa(String((this.page - 1) * 300 - 1))
          query = this.otherQuery;
          break;
        default:
          parameters.chr = this.chr;
          parameters.after = btoa(String((this.page - 1) * 300 - 1))
          query = this.query;
          break;
      }

      this.guestGraphQLService.query(query, parameters).subscribe(graphQLResult => {
        this.graphQLArtists = graphQLResult;

        this.pages = [];

        for (let i = this.page; i >= this.page - 2; i--) {
          if (i && i > 0) {
            this.pages.push(i);
          }
        }

        for (let i = this.page + 1; i <= this.page + 4; i++) {
          const total = Math.ceil(graphQLResult.data.artists.totalCount / 300) * 300;

          if (total - (i * 300) >= 0) {
            if (! this.pages.includes(i) && this.pages.length < 5) {
              this.pages.push(i);
            }
          }
        }

        for (let i = this.page; i > 1 + 4; i--) {
          const total = Math.ceil(graphQLResult.data.artists.totalCount / 300) * 300;

          if (total - (i * 300) >= 0) {
            if (i >= 1 && ! this.pages.includes(i) && this.pages.length < 5) {
              this.pages.push(i);
            }
          }

          if (this.pages.length === 5) {
            break;
          }
        }

        this.maxPage = Math.ceil(graphQLResult.data.artists.totalCount / 300);
        this.pages.sort(function(a, b) {
          return a - b;
        });
      });
    });
  }

  ngOnInit(): void {
  }

  public jumpToPage() {
    if (this.pageJump > this.maxPage) {
      this.pageJump = this.maxPage;
    }

    if (this.pageJump < 1) {
      this.pageJump = 1;
    }

    this.router.navigate(['/guest/artists'], {queryParams: {
      chr: this.chr,
      page: this.pageJump,
      filterString: this.filterString
    }});
  }

  public filter() {
    this.router.navigate(['/guest/artists'], {queryParams: {chr: 'filter', filterString: this.filterString}});
  }

  public column(id: number): any {
    const length = this.graphQLArtists.data.artists.edges.length;
    const colSize = Math.ceil(length / 3);
    switch (id) {
      case 1:
        return this.graphQLArtists.data.artists.edges.slice(0, colSize);
      case 2:
        return this.graphQLArtists.data.artists.edges.slice(colSize, colSize * 2);
      case 3:
        return this.graphQLArtists.data.artists.edges.slice(colSize * 2);
    }
  }

  public getAlphabetLetter(code: number, caps: boolean = false) {
    const offset = (caps) ? 65 : 97;

    return String.fromCharCode(code + offset);
  }
}
