import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumPhotos } from '../album-photos';
import { AlbumsService } from '../albums.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})

export class AlbumPhotosComponent implements OnInit {
  albumPhotos!: AlbumPhotos[];

  constructor(private routes: ActivatedRoute, private albumsService: AlbumsService, private location: Location) {}

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.albumsService.getAlbumPhotos(id).subscribe((albumPhotos: AlbumPhotos[]) => {
        this.albumPhotos = albumPhotos;
        
        for (let photo of this.albumPhotos) {
          photo.photoUrl = 'https://placehold.co/300x200?text=Placeholder+Image';
        }
      });
    });
  }

  goBack() {
    this.location.back();
  }
}