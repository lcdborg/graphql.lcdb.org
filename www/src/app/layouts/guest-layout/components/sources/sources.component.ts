import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestGraphQLService } from 'app/data/service/guest-graph-ql.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

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
  public graphQL: any = null;
  public years = [];
  public showSets = false;

  public page = 1;
  public pages = [];
  public maxPage = 1;
  public pageJump = 1;

  constructor(
    private route: ActivatedRoute,
    private guestGraphQLService: GuestGraphQLService,
    private router: Router
  ) {

    const urlParametrs = combineLatest(this.route.params,
      this.route.queryParams, (params, queryParams) => ({
      ...params, ...queryParams}));

    urlParametrs.subscribe(params => {
      if (! params.year) {
        this.guestGraphQLService.query(this.latestYearQuery, { id: Number(params.id) })
          .subscribe(latestYear => {
            this.router.navigate(['/sources/' + params.id], { queryParams: { year: latestYear.data.sourceLatestYear }})
        });
      } else {

        this.year = Number(params.year);
        this.page = this.pageJump = Number(params.page ? params.page : 1);

        const parameters: any = {};
        parameters.after = btoa(String((this.page - 1) * 300 - 1));
        parameters.year = Number(params.year);
        parameters.id = Number(params.id);

        this.guestGraphQLService.query(this.query, parameters, 'ArtistSources')
          .subscribe(graphQL => {
            this.graphQL = graphQL;
            this.pages = [];

            for (let i = this.page; i >= this.page - 2; i--) {
              if (i && i > 0) {
                this.pages.push(i);
              }
            }

            for (let i = this.page + 1; i <= this.page + 4; i++) {
              const total = Math.ceil(graphQL.data.sources.totalCount / 300) * 300;

              if (total - (i * 300) >= 0) {
                if (! this.pages.includes(i) && this.pages.length < 5) {
                  this.pages.push(i);
                }
              }
            }

            for (let i = this.page; i > 1 + 4; i--) {
              const total = Math.ceil(graphQL.data.sources.totalCount / 300) * 300;

              if (total - (i * 300) >= 0) {
                if (i >= 1 && ! this.pages.includes(i) && this.pages.length < 5) {
                  this.pages.push(i);
                }
              }

              if (this.pages.length === 5) {
                break;
              }
            }

            this.maxPage = Math.ceil(graphQL.data.sources.totalCount / 300);
            this.pages.sort(function(a, b) {
              return a - b;
            });

        });
      }
    });
  }

  public formatPerformanceDate(date: string, year: number) {
    return year + '-' + date.slice(0, 2) + '-' + date.slice(3, 5);
  }

  public jumpToPage() {
    if (this.pageJump > this.maxPage) {
      this.pageJump = this.maxPage;
    }

    if (this.pageJump < 1) {
      this.pageJump = 1;
    }

    this.router.navigate(['/sources/', this.graphQL.data.artist.id], {queryParams: {
      year: this.year,
      page: this.pageJump,
    }});
  }

  ngOnInit(): void {
  }
}
