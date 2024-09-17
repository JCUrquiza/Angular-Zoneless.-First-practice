import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent {

}
