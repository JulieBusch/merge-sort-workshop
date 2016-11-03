describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a sorted array', function(){
    expect( bubbleSort([1, 2, 3, 4]) ).toEqual( [1, 2, 3, 4] );
  });
  it('handles an array with one item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles an unsorted array', function(){
    expect( bubbleSort([2, 4, 3, 1]) ).toEqual( [1, 2, 3, 4] );
  });
});
