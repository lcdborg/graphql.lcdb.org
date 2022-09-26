import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestGraphQLService } from 'app/data/service/guest-graph-ql.service';
import { GraphQLResponse } from 'app/data/types/graph-ql-response';
import { Observable, tap } from 'rxjs';
import { PaginatedComponent } from '../paginated/paginated.component';

@Component({
  selector: 'app-artist-groups',
  templateUrl: './artist-groups.component.html',
  styleUrls: ['./artist-groups.component.scss']
})
export class ArtistGroupsComponent extends PaginatedComponent {

  private query = `
    query ArtistGroups($chr: String = "a", $after: String = "LTE=") {
      artistGroups (filter: { title_sort: "ASC", title_startswith: $chr, _after: $after }) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            title
          }
        }
      }
    }
  `;

  private otherQuery = `
    query ArtistGroupsOther($after: String = "LTE=") {
      artistGroups (filter: { title_sort: "ASC", _after: $after }) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            title
          }
        }
      }
    }
  `;

  private filterQuery = `
    query ArtistGroups($filter: String = "a", $after: String = "LTE=") {
      artistGroups (filter: { title_sort: "ASC", title_contains: $filter, _after: $after }) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            title
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
        if (this.chr === 'filter') {
          this.chr = 'a';
        }

        this.filterString = '';
      }

      this.pageJump = this.page;

      const parameters: any = {};

      let query = '';
      let operationName = '';
      switch (this.chr) {
        case 'filter':
          parameters.filter = this.filterString ?? 'a';
          parameters.after = btoa(String((this.page - 1) * 300 - 1))
          query = this.filterQuery;
          break;
        case 'other':
          parameters.after = btoa(String((this.page - 1) * 300 - 1))
          query = this.otherQuery;
          operationName = 'ArtistGroupsOther';
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
            this.pages = this.getPages(this.page, graphQL.data.artistGroups.totalCount);
            this.maxPage = Math.ceil(graphQL.data.artistGroups.totalCount / 300);
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

    this.router.navigate(['/artist-groups'], {queryParams: {
      chr: this.chr,
      page: this.pageJump,
      filterString: this.filterString
    }});
  }

  public filter() {
    this.router.navigate(['/artist-groups'], {queryParams: {chr: 'filter', filterString: this.filterString}});
  }
}
