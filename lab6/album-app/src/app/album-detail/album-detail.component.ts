import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})

export class AlbumDetailComponent implements OnInit {
  album!: Album;
  newTitle!: string;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService, private location: Location) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const albulID = Number(params.get('id'));

      this.albumsService.getAlbum(albulID).subscribe((album: Album) => {
        this.album = album;
      });
    });
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.album.title = this.newTitle;
    this.newTitle = '';
  }
}