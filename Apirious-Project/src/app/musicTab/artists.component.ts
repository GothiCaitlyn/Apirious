import { Component, OnInit } from '@angular/core';
import { Artist } from '../entities/artist';
import { Album } from '../entities/album';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArtistService } from '../services/artist.service';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
  providers: [ArtistService]
})
export class ArtistsComponent implements OnInit {

  artists: Artist[];
  constructor(private artistService: ArtistService,
  private router: Router) { }
  getArtists(): void {
    this.artistService.getArtists().then(artists => this.artists = artists);
  }
  ngOnInit(): void {
    this.getArtists();
  }

  deleteArtist(artist: Artist): void {
    this.artistService
      .delete(artist.id)
      .then(() => {
        this.artists = this.artists.filter(a => a !== artist);
      });
      this.router.navigate(['/Music']);
  }
}
