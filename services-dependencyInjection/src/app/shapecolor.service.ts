import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShapecolorService {
  constructor() {}

  applyClass(shape: any, color: any) {
    return shape + '-' + color;
  }
}
