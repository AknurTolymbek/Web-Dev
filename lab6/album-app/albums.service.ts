import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './album';
import { Observable } from 'rxjs';
import { AlbumPhotos } from './album-photos';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<AlbumPhotos[]> {
    return this.http.get<AlbumPhotos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}