function compareArrays(arr1, arr2) {
	let isSame;
	if (arr1.length !== arr2.length) {
		isSame = false;
	} else {
	 isSame = arr1.every((elem, index) => elem === arr2[index])
	}
  
  return isSame
}

function getUsersNamesInAgeRange(users, gender) {
 const filterUsers = users.filter((item) => item.gender === gender).map((item) => item.age);

	if (filterUsers.length === 0) {
		return 0;
	}

const totalAge = filterUsers.reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);
const averageAge = totalAge / filterUsers.length;

return averageAge;

}