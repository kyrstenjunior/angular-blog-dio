import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss', './big-card.responsive.component.scss']
})

export class BigCardComponent {
  photoCover: string = "https://miro.medium.com/v2/resize:fit:1400/1*R1mfXLP9edcArZXwmGbGag.jpeg";
  @Input() cardTitle: string = ""; // passado direto no componente (como as props do React)
  cardDescription: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit error repellat quisquam aperiam impedit qui iste harum. Maiores odio quaerat repellendus, autem tempore eaque voluptas, consequuntur cupiditate soluta quisquam unde!";
  @Input() Id: string = "0";
}
