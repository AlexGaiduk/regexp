
import ErrorRepository from '../ErrorRepository';

const list = new ErrorRepository();

describe('ErrorRepository', () => {
  it('should return error`s description', () => {
    const result = list.translate(404);

    expect(result).toBe('Not Found');
  });

  it('should return "Unknown error"', () => {
    const result = list.translate(409);

    expect(result).toBe('Unknown error');
  });
});