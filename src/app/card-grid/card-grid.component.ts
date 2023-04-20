import { Component } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css'],
})
export class CardGridComponent {
  cards = Array.from({ length: 10 }, (_, index) => ({
    image: `https://picsum.photos/id/${index + 1}/200/200`,
    title: `Card title ${index + 1}`,
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }));
}
