import { Album } from '../entities/album';
import { Artist } from '../entities/artist';
import { Router } from '@angular/router';
import { Song } from '../entities/song';
import { DomSanitizer } from '@angular/platform-browser';
 
import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ArtistService } from '../services/artist.service';


@Component({
  selector: 'artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
})
export class ArtistDetailComponent implements OnInit {
  @Input() artist: Artist;
  selectedAlbum: Album;
  onSelectAlbum(album: Album): void {
    this.selectedAlbum = album;
  }
  constructor(
    private router: Router,
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private location: Location,
    public sanitizer: DomSanitizer
  ) { }
  ngOnInit(): void {
     this.route.paramMap
       .switchMap((params: ParamMap) => this.artistService.getArtist(+params.get('id')))
       .subscribe(artist => this.artist = artist);
   }

goBack(): void {
  this.router.navigate(['/Music']);
}
}
