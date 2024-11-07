import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class AppLocationComponent {
  @Input() public data: string = '';
}
