import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  snapButtonText!: string;
  userHasSnapped!: boolean;

  faceSnap$!: Observable<FaceSnap>;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }
  
  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
  
  private getFaceSnap() {
    const id = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(id);
  }

  onSnap(faceSnapId: string) {
    if (this.userHasSnapped) {
      this.unSnap(faceSnapId);
    } else {
      this.snap(faceSnapId);
    }
  }
  
  unSnap(faceSnapId: string) {
    this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
      tap(() => {
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false;
      })
    );
  }
  
  snap(faceSnapId: string) {
    this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
      tap(() => {
        this.snapButtonText = 'Oops, un Snap!';
        this.userHasSnapped = true;
      })
    );
  }
}
