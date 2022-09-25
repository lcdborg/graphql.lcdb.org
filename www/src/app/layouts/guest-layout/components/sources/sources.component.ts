import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestGraphQLService } from 'app/data/service/guest-graph-ql.service';
import { GraphQLResponse } from 'app/data/types/graph-ql-response';
import { combineLatest, Observable, tap } from 'rxjs';
import { PaginatedComponent } from '../paginated/paginated.component';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent extends PaginatedComponent {

  public query = `
    query ArtistSources($id: Int!, $after: String = "LTE=") {
      years: sourceYears(id: $id)

      artist (id: $id) {
        id
        name
        artistToArtistGroups {
          edges {
            node {
              artistGroup {
                title
              }
            }
          }
        }
      }

      sources (filter: {_after: $after}) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        totalCount
        edges {
          node {
            id
            createdAt
            updatedAt

            circdate
            shndiskcount
            wavdiskcount
            archiveIdentifier

            comments
            textdoc

            mediaSize
            mediaSizeUncompressed

            performance {
              id
              date
              year
              venue
              city
              state
              artist {
                id
                name
              }
            }
          }
        }
      }
    }
  `;

  public latestYearQuery = `
    query SourceLatestYear($id: Int!) {
      sourceLatestYear(id: $id)
    }
  `;

  public artistId = 0;
  public year: number;
  public years = [];
  public showSets = false;
  public graphQL$: Observable<GraphQLResponse>;

  public page = 1;
  public pages = [];
  public maxPage = 1;
  public pageJump = 1;

  constructor(
    private route: ActivatedRoute,
    private graphQLService: GuestGraphQLService,
    private router: Router
  ) {
    super();

    const urlParametrs = combineLatest([
      this.route.params,
      this.route.queryParams
    ], (params, queryParams) => ({...params, ...queryParams}));

    urlParametrs.subscribe(params => {
      if (! params.year) {
        this.graphQLService.query(this.latestYearQuery, { id: Number(params.id) })
          .subscribe(latestYear => {
            this.router.navigate(['/sources/' + params.id], {
              queryParams: { year: latestYear.data.sourceLatestYear
            }})
        });
      } else {

        this.artistId = params.id;
        this.year = Number(params.year);
        this.page = this.pageJump = Number(params.page ? params.page : 1);

        const parameters: any = {};
        parameters.after = btoa(String((this.page - 1) * 300 - 1));
        parameters.year = Number(params.year);
        parameters.id = Number(params.id);

        this.graphQL$ = this.graphQLService.query(this.query, parameters, 'ArtistSources')
          .pipe(
            tap(graphQL => {
              this.pages = this.getPages(this.page, graphQL.data.sources.totalCount);
              this.maxPage = Math.ceil(graphQL.data.sources.totalCount / 300);
            })
          );
      }
    });
  }


  public jumpToPage() {
    if (this.pageJump > this.maxPage) {
      this.pageJump = this.maxPage;
    }

    if (this.pageJump < 1) {
      this.pageJump = 1;
    }

    this.router.navigate(['/sources/', this.artistId], {queryParams: {
      year: this.year,
      page: this.pageJump,
    }});
  }
}
