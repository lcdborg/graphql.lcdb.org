import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestGraphQLService } from 'app/data/service/guest-graph-ql.service';
import { GraphQLResponse } from 'app/data/types/graph-ql-response';
import { Observable, tap } from 'rxjs';
import { PaginatedComponent } from '../paginated/paginated.component';

@Component({
  selector: 'app-source-artists',
  templateUrl: './source-artists.component.html',
  styleUrls: ['./source-artists.component.scss']
})
export class SourceArtistsComponent extends PaginatedComponent {

  private query = `
    query SourceArtists($chr: String = "a", $after: String = "LTE=") {
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

  private otherQuery = `
    query SourceArtistsOther($after: String = "LTE=") {
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
    query SourceArtists($filter: String = "a", $after: String = "LTE=") {
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

  public chr = 'a';
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
      if (queryParamMap.get('page')) {
        this.page = Number(queryParamMap.get('page'));
      } else {
        this.page = 1;
      }

      if (queryParamMap.get('filterString')) {
        this.filterString = queryParamMap.get('filterString');
      } else {
        this.filterString = '';
      }

      this.pageJump = this.page;

      const parameters: any = {};
      let query = '';
      let operationName = 'SourceArtists';

      if (this.filterString) {
        parameters.filter = this.filterString;
        parameters.after = btoa(String((this.page - 1) * 300 - 1));
        query = this.filterQuery;
      } else if (queryParamMap.get('chr') === 'other') {
        operationName = 'SourceArtistsOther';
        parameters.after = btoa(String((this.page - 1) * 300 - 1));
        this.chr = parameters.chr = 'other';
        query = this.otherQuery;
      } else {
        parameters.after = btoa(String((this.page - 1) * 300 - 1));
        this.chr = parameters.chr = queryParamMap.get('chr') ?? 'a';
        query = this.query;
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

    this.router.navigate(['/source-artists'], {queryParams: {
      page: this.pageJump,
      filterString: this.filterString
    }});
  }

  public filter() {
    this.router.navigate(['/source-artists'], {queryParams: {filterString: this.filterString}});
  }
}
