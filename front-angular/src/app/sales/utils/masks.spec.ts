import { Masks } from './masks';

describe('Masks', () => {
  let masks: Masks;

  beforeEach(() => {
    masks = new Masks();
  });

  it('should create phone mask', () => {
    expect(masks.phoneMask).toEqual([
      /\d/,
      /\d/,
      ' ',
      /\d/,
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]);
  });

  it('should create cpf mask', () => {
    expect(masks.cpfMask).toEqual([
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ]);
  });

  it('should create rg mask', () => {
    expect(masks.rgMask).toEqual([
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]);
  });
});
