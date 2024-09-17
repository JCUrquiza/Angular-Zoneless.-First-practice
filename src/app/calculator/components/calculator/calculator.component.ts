import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorButtonComponent } from "../calculator-button/calculator-button.component";

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
  // styles: `
  //   .iscommand {
  //     @apply bg-indigo-700 bg-opacity-20;
  //   }
  // `,
})
export class CalculatorComponent {

  handleClick(key: string) {
    console.log({ key });
  }


  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent( event: KeyboardEvent ) {
    // console.log(event, event.key);
    this.handleClick(event.key);
  }

}


