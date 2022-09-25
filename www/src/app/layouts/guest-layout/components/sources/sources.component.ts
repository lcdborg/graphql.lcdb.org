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
    query Sources($id: Int!) {
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

      sources {
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
        this.guestGraphQLService.query(this.query, { id: Number(params.id), year: Number(params.year) })
          .subscribe(graphQL => {
            this.graphQL = graphQL;
            this.year = Number(params.year);
        });
      }
    });
  }

  public formatPerformanceDate(date: string, year: number) {
    return year + '-' + date.slice(0, 2) + '-' + date.slice(3, 5);
  }

  ngOnInit(): void {
  }
}
