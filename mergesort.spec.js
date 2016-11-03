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
describe('Merge Function', function(){
  it('is able to merge two sorted arrays of different lengths into one sorted array', function(){
    expect(merge([1], [2, 3])).toEqual([1, 2, 3]);
  });
  it('is able to merge two sorted arrays of the same length into one sorted array', function(){
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
});
describe('mergeSort function', function(){
  beforeEach(function(){
   spyOn(window, 'mergeSort').and.callThrough();
  });
  it('sorts an array with an odd number of things', function(){
    expect(mergeSort([3, 1, 2])).toEqual([1, 2, 3]);
  });
  it('sorts an array with an even number of things', function(){
    expect(mergeSort([2, 4, 3, 1])).toEqual([1, 2, 3, 4]);
  });
  it('handles an array that is already sorted', function(){
    expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  it('handles an array with one thing', function(){
    expect(mergeSort([2])).toEqual([2]);
  });
  it('calls itself', function(){
    expect(mergeSort.calls.count()).toBeGreaterThan(1);
  });

});
