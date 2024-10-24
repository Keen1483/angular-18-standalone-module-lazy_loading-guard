import { Component, Input, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
