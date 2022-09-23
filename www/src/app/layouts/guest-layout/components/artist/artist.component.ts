import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestGraphQLService } from 'app/data/service/guest-graph-ql.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public query = `
    query Artist($id: Int!, $year: Int = 2022) {
      artistYears(id: $id)

      sourceCount(id: $id)

      artist (id: $id) {
        id
        name
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
  public graphQLArtist: any = null;
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
            this.router.navigate(['/artist/' + params.id], { queryParams: { year: latestYear.data.artistLatestYear }})
        });
      } else {
        this.guestGraphQLService.query(this.query, { id: Number(params.id), year: Number(params.year) })
          .subscribe(graphQLArtist => {
            this.graphQLArtist = graphQLArtist;
            this.year = Number(params.year);
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
