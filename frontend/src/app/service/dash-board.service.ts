import { Injectable } from '@angular/core';
import { Dashbox } from '../models/dask-item.model'
@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  db: Array<Dashbox> = [
    {
    boxName:'go to school',
    content:['play game','play soccer'],
  },
];

  constructor() { }
}
