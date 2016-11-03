describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it('handles an array with one item', function() {
    expect(split([1])).toEqual([1]);
  });
  it('handles an array with an odd number of things', function() {
    expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
  });
});
