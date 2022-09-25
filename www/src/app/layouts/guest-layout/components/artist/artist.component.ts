import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestGraphQLService } from 'app/data/service/guest-graph-ql.service';
import { GraphQLResponse } from 'app/data/types/graph-ql-response';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

  public query = `
    query Artist($id: Int!, $year: Int = 2022) {
      years: artistYears(id: $id)

      sourceCount(id: $id)

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
        performances (filter: {year: $year date_sort: "ASC"}) {
          edges {
            node {
              id
              date
              year
              venue
              city
              state
              set1
              set2
              set3
              comment
              sources {
                edges {
                  node {
                    id
                    comments
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  public latestYearQuery = `
    query Artist($id: Int!) {
      artistLatestYear(id: $id)
    }
  `;

  public artistId = 0;
  public year: number;
  public graphQL: any = null;
  public graphQL$: Observable<GraphQLResponse>;
  public years = [];
  public showSets = false;

  constructor(
    private route: ActivatedRoute,
    private guestGraphQLService: GuestGraphQLService,
    private router: Router
  ) {

    const urlParametrs = combineLatest([this.route.params,
      this.route.queryParams], (params, queryParams) => ({
      ...params, ...queryParams}));

    urlParametrs.subscribe(params => {
      if (! params.year) {
        this.guestGraphQLService.query(this.latestYearQuery, { id: Number(params.id) })
          .subscribe(latestYear => {
            this.router.navigate(['/artist/' + params.id], { queryParams: {
              year: latestYear.data.artistLatestYear
            }})
        });
      } else {
        this.year = Number(params.year);
        this.graphQL$ = this.guestGraphQLService.query(this.query, {
          id: Number(params.id),
          year: Number(params.year)
        });
      }
    });
  }
}
