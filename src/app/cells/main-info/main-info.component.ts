import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IMainInfo } from "../../core/interfaces/user.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true
})
export class AppMainInfoComponent {
  @Input() public data: IMainInfo = {
    fio: '',
    phoneNumber: '',
    birthDate: null,
  }
}
