import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestGraphQLService } from 'app/data/service/guest-graph-ql.service';
import { ideahub } from 'googleapis/build/src/apis/ideahub';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  private query = `
    query ArtistList($chr: String = "a", $after: String = "LTE=") {
      artists (filter: { name_startswith: $chr, _after: $after }) {
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
      artists (filter: { top100: true, name_sort: "ASC" }) {
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
  public graphQLArtists: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private guestGraphQLService: GuestGraphQLService
  ) {
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      if (queryParamMap.get('chr')) {
        this.chr = queryParamMap.get('chr');
      }

      let query = '';
      switch (this.chr) {
        case 'top100':
          query = this.top100query;
          break;
        case 'other':
        default:
          query = this.query;
          break;
      }

      this.guestGraphQLService.query(query, { chr: this.chr }).subscribe(graphQLResult => {
        this.graphQLArtists = graphQLResult;
      });
    });
  }

  ngOnInit(): void {
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
