import { getMessage } from '../handler';

describe('Handler', () => {
  describe('Get Message', () => {
    it('returns appropriate message', () => {
      const message = getMessage();
      expect(message).toBe(`Beep bop, I'm a bot`);
    });
  });
});
