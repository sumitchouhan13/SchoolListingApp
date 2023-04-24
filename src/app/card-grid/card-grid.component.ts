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
  image1: string = '/assets/image1.jpg';
  image2: string = '/assets/image2.jpg';
  image3: string = '/assets/image3.jpg';
  image4: string = '/assets/image4.jpg';
  image5: string = '/assets/image5.jpg';
  image6: string = '/assets/image6.jpg';
  image7: string = '/assets/image7.jpg';
  image8: string = '/assets/image8.jpg';
  image9: string = '/assets/image9.jpg';
  image10: string = '/assets/images10.jpg';
  cards: Card[] = [
    {
      image: this.image1,
      title: 'St.Stephens School',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: this.image2,
      title: 'Card title 2',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'South Kolkata',
    },
    {
      image: this.image3,
      title: 'Card title 3',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: this.image4,
      title: 'Card title 4',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'South Kolkata',
    },
    {
      image: this.image5,
      title: 'Card title 5',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: this.image6,
      title: 'Card title 6',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'South Kolkata',
    },
    {
      image: this.image7,
      title: 'Card title 7',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: this.image8,
      title: 'Card title 8',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'South Kolkata',
    },
    {
      image: this.image9,
      title: 'Card title 9',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      place: 'North Kolkata',
    },
    {
      image: this.image10,
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
