import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-core-m-lib-core',
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        <ion-card-title>Card Title</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </ion-card-content>
    </ion-card>

    <ion-card>
      <ion-item>
        <ion-icon name="pin" slot="start"></ion-icon>
        <ion-label>ion-item in a card, icon left, button right</ion-label>
        <ion-button fill="outline" slot="end">View</ion-button>
      </ion-item>

      <ion-card-content>
        This is content, without any paragraph or header tags, within an
        ion-card-content element.
      </ion-card-content>
    </ion-card>
  `,
  styles: [],
})
export class MLibCoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
