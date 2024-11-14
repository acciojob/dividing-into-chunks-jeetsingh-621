const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 const result = [];
  let currentSubarray = [];
  let currentSum = 0;

	for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
		 if (currentSum + num > n) {
      result.push(currentSubarray);
      currentSubarray = [];
      currentSum = 0;
    }
		  currentSubarray.push(num);
    currentSum += num;
  }
	 if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
