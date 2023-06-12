function compareArrays(arr1, arr2) {

  let check = arr1.every(function(elem, index, arr) {
  	if (arr1.length === arr2.length) {
		if (elem === arr2[index]) {
		return true;
		} else {
		return false;
		}
  	} else {
  		return false;
  	}
		
	});
  return check;
  	
}

function getUsersNamesInAgeRange(users, gender) {
	
  let arrayUsers = users.filter(user => user.gender === gender);
  let arrayAge = arrayUsers.map(user => user.age);
  let sumAge = arrayAge.reduce(function(a, b) {
	  return a + b;
	});

  return sumAge / arrayAge.length;
}