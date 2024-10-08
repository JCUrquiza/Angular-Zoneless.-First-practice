import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";

describe(`CalculatorService`, () => {

  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with default values', () => {
    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should set resultText, subResultText to "0" when C is pressed', () => {
    service.resultText.set('1');
    service.subResultText.set('2');
    service.lastOperator.set('-');

    service.constructNumber('C');

    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should update resultText with number input', () => {
    service.constructNumber('1');
    expect(service.resultText()).toBe('1');

    service.constructNumber('2');
    expect(service.resultText()).toBe('12');
  });

  it('should handle operators correctly', () => {
    service.constructNumber('1');
    service.constructNumber('-');

    expect(service.lastOperator()).toBe('-');
    expect(service.subResultText()).toBe('1');
    expect(service.resultText()).toBe('0');
  });

  it('should calculate result correctly for addition', () => {
    service.constructNumber('1');
    service.constructNumber('+');
    service.constructNumber('2');
    service.constructNumber('=');

    expect(service.resultText()).toBe('3');
  });

  it('should calculate result correctly for substraction', () => {
    service.constructNumber('9');
    service.constructNumber('-');
    service.constructNumber('3');
    service.constructNumber('=');

    expect(service.resultText()).toBe('6');
  });

  it('should calculate result correctly for multiplication', () => {
    service.constructNumber('2');
    service.constructNumber('*');
    service.constructNumber('4');
    service.constructNumber('=');

    expect(service.resultText()).toBe('8');
  });

  it('should calculate result correctly for dividing', () => {
    service.constructNumber('8');
    service.constructNumber('/');
    service.constructNumber('4');
    service.constructNumber('=');

    expect(service.resultText()).toBe('2');
  });

  it('should handle decimal point correctly', () => {
    service.constructNumber('1');
    service.constructNumber('.');
    service.constructNumber('5');

    expect(service.resultText()).toBe('1.5');
    service.constructNumber('.');
    expect(service.resultText()).toBe('1.5');
  });

  it('should handle decimal point correctly starting with zero', () => {
    service.constructNumber('0');
    service.constructNumber('.');
    service.constructNumber('0');

    expect(service.resultText()).toBe('0.');
  });

  it('should handle sign change correctly', () => {
    service.constructNumber('1');
    service.constructNumber('+/-');

    expect(service.resultText()).toBe('-1');
    service.constructNumber('+/-');
    expect(service.resultText()).toBe('1');
  });

  it('should handle backspace correctly', () => {
    service.resultText.set('123');
    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('12');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('1');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('0');
  });

  it('should handle max length correctly (max 10 chacarters)', () => {
    for(let i=0;i<10; i++) {
      service.constructNumber('1');
    }
    expect(service.resultText().length).toBe(10);

    service.constructNumber('1');
    expect(service.resultText().length).toBe(10);
  });

  it('should return if press diferent key about numbers, operators or special operators', () => {
    const result = service.constructNumber('a');

    expect(result).toBeUndefined();
  });

  it('should return if press "Backspace" and resultText is "0"', () => {
    service.resultText.set('0');
    const result = service.constructNumber('Backspace');

    expect(result).toBeUndefined();
  });

  it('should resultText value "-" plus value and return if resultText is "-0" previously', () => {
    service.resultText.set('-0');
    service.constructNumber('1');

    expect(service.resultText()).toBe('-1');
  });

});

