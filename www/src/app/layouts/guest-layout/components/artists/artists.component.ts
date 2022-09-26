import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestGraphQLService } from 'app/data/service/guest-graph-ql.service';
import { GraphQLResponse } from 'app/data/types/graph-ql-response';
import { Observable, tap } from 'rxjs';
import { PaginatedComponent } from '../paginated/paginated.component';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent extends PaginatedComponent {

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
    query ArtistListOther($after: String = "LTE=") {
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
  public filterString = '';
  public graphQL$: Observable<GraphQLResponse>;

  public page = 1;
  public pages = [];
  public maxPage = 1;
  public pageJump = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private graphQLService: GuestGraphQLService,
    private router: Router
  ) {
    super();

    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
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
      let operationName = '';
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
          parameters.after = btoa(String((this.page - 1) * 300 - 1))
          query = this.otherQuery;
          operationName = 'ArtistListOther';
          break;
        default:
          parameters.chr = this.chr;
          parameters.after = btoa(String((this.page - 1) * 300 - 1))
          query = this.query;
          break;
      }

      this.graphQL$ = this.graphQLService.query(query, parameters, operationName)
        .pipe(
          tap(graphQL => {
            this.pages = this.getPages(this.page, graphQL.data.artists.totalCount);
            this.maxPage = Math.ceil(graphQL.data.artists.totalCount / 300);
          })
        );
    });
  }

  public jumpToPage() {
    if (this.pageJump > this.maxPage) {
      this.pageJump = this.maxPage;
    }

    if (this.pageJump < 1) {
      this.pageJump = 1;
    }

    this.router.navigate(['/artists'], {queryParams: {
      chr: this.chr,
      page: this.pageJump,
      filterString: this.filterString
    }});
  }

  public filter() {
    this.router.navigate(['/artists'], {queryParams: {chr: 'filter', filterString: this.filterString}});
  }
}
