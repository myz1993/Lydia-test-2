import classes from '../classes';
describe('button tests', () => {
  it('accept one classname', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('accept two classname', () => {
    const result = classes('a', 'b');
    expect(result).toEqual(`a b`);
  });
  it('xxx', () => {
    const result = classes('a', undefined);
    expect(result).toEqual(`a`);
  });
  it('xyy', () => {
    const result = classes();
    expect(result).toEqual(``);
  });
});
