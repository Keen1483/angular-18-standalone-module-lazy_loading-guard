import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getFaceSnaps();
  }
}
