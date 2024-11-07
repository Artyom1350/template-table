import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true
})
export class AppDateComponent {
  @Input() public data: Date | null = null;
}
