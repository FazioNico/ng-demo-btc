import { FormatNumberPipe } from './format-number-pipe';

describe('FormatNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format number as currency', () => {
    const pipe = new FormatNumberPipe();
    expect(pipe.transform(1234.56)).toBe('$1,234.56');
  });
});
