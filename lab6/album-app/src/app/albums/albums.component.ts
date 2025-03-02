import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album;
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  imports: [RouterLink, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent implements OnInit {
  albums!: Album[];
  newTitle!: string;
  newlyCreated!: Album;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((albums: Album[]) => {
      this.albums = albums;
    });
  }

  remove(id: number) {
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].id === id) {
        this.albums.splice(i, 1);
        return;
      }
    }
  }

  create() {
    this.albums.push({userId: 1, id: this.albums[this.albums.length - 1].id + 1, title: this.newTitle});
    this.newlyCreated = this.albums[this.albums.length - 1];
    this.newTitle = '';
  }
}