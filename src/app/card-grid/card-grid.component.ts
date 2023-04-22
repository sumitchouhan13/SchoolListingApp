import { Component } from '@angular/core';

interface Card {
  image: string;
  title: string;
  text: string;
  place: string;
}

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css'],
})
export class CardGridComponent {
  cards: Card[] = [
    {
      image: 'https://picsum.photos/id/1/200/200',
      title: 'Card title 1',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: 'https://picsum.photos/id/2/200/200',
      title: 'Card title 2',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'South Kolkata',
    },
    {
      image: 'https://picsum.photos/id/3/200/200',
      title: 'Card title 3',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: 'https://picsum.photos/id/4/200/200',
      title: 'Card title 4',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'South Kolkata',
    },
    {
      image: 'https://picsum.photos/id/5/200/200',
      title: 'Card title 5',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: 'https://picsum.photos/id/6/200/200',
      title: 'Card title 6',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'South Kolkata',
    },
    {
      image: 'https://picsum.photos/id/7/200/200',
      title: 'Card title 7',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: 'https://picsum.photos/id/8/200/200',
      title: 'Card title 8',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'South Kolkata',
    },
    {
      image: 'https://picsum.photos/id/9/200/200',
      title: 'Card title 9',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: 'https://picsum.photos/id/10/200/200',
      title: 'Card title 10',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'South Kolkata',
    },
  ];

  selectedCards: Card[] = this.cards;

  onClick(text: string) {
    if (text === 'All') {
      this.selectedCards = this.cards;
      return;
    }
    this.selectedCards = this.cards.filter((card) => card.place === text);
  }

  onClickSubmit(data: any) {
    this.selectedCards = this.cards.filter(
      (card) => card.title === data.schoolName
    );
    if (this.selectedCards.length === 0) {
      alert('No school found with this name');
      this.selectedCards = this.cards;
    }
  }
}
