
function isArray(item)
{
	return ( Object.prototype.toString.call(item) === '[object Array]' );
}

function flattenArray(theArray)
{
	// sanity check
	if ( !isArray(theArray) )
	{
		console.log('ERROR [flattenArray]: parameter *MUST* be an array');
		return mutableArray; 
	}
	
	// NOTE: it is important to check the length of theArray
	//		on each iteration 
	//		because the size may change.
	//		so do *NOT* cache the length in a variable
	var i = 0; // iterator
	while ( i < theArray.length )
	{
		if ( isArray(theArray[i]) )
		{
			// in the case of the first array element put an empty array as the head
			var head = (i==0 ? [] : theArray.slice(0, i));
			
			
			// in the case of the last array element put an empty array as the tail
			var tail = ((i+1)==theArray.length ? [] : theArray.slice(i+1));
			
			// concatenate the arrays
			theArray = head.concat(theArray[i], tail);
			
			// avoid incrementing the iterator because 
			// we must check the current index position again 
			// since the contents have changed.
			continue; 
			
		}   // if end 
		
		i++;
	} // while end
	
	return theArray;
}


// Test the code
 
var a1 = [[1,2,[[[3]]]],4];
var a2 = [1,2,3,4];
var a3 = [1,2,3,[[4]]];
var a4 = [[[1]],2,3,4];


var flatened = flattenArray(a1);

// console.log(a1);
console.log(flatened);
alert(flatened);