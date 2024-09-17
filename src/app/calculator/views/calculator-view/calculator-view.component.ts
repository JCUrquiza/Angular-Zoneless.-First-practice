import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'calculator-view',
  standalone: true,
  imports: [],
  templateUrl: './calculator-view.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CalculatorViewComponent {

}
