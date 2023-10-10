import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss', './small-card.responsive.component.scss']
})

export class SmallCardComponent {
  @Input() imageCover: string = "";
  @Input() titleCard: string = "";
}
