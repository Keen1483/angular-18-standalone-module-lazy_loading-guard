import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, switchMap } from "rxjs";
import { SnapType } from "../models/snap-type.type";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    constructor(private http: HttpClient) {}

    getFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: string) {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): Observable<FaceSnap> {
      return this.getFaceSnapById(faceSnapId).pipe(
        map(
          faceSnap => {
            faceSnap.snaps = snapType === 'snap' ? ++faceSnap.snaps : --faceSnap.snaps;
            return faceSnap;
          }
        ),
        switchMap(
          updateFaceSnap => this.http.put<FaceSnap>(
            `http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap
          )
        )
      );
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
      const faceSnap: FaceSnap = new FaceSnap(
        formValue.title,
        formValue.description,
        formValue.imageUrl,
        new Date(),
        0
      );
      faceSnap.id = crypto.randomUUID().substring(0, 8);
      if (formValue.location) {
        faceSnap.location = formValue.location;
      }
      return this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`, faceSnap);
    }
}