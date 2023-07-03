//Задача № 1
function cachingDecoratorNew(func) {
let cache = [];

function wrapper(...args) {
    const hasingText = md5(args); // получаем правильный хеш c помощью функции md5

    let objectInCache = cache.find((item) => {
    	// console.log("сравниваем " + hasingText + " и " + Object.keys(item)[0])
    	// console.log(hasingText === Object.keys(item)[0])
    	return hasingText === Object.keys(item)[0]
    }); // ищем элемент, хеш которого равен нашему хешу
    //console.log("Найдено? " + objectInCache);
    if (objectInCache) { // если элемент найден
        console.log("Из кеша: " + objectInCache[hasingText]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + objectInCache[hasingText];
    }

    let result = func(...args); // в кеше результата нет — придётся считать
    cache.push({[hasingText]: result}); // добавляем элемент с правильной структурой
    console.log(cache);
    if (cache.length > 5) { 
      cache.shift() // если слишком много элементов в кеше, надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    //console.log("dscs" + cache[0]);
    return "Вычисляем: " + result;  
}
return wrapper;
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null

 function resultFunction(...args){
 	resultFunction.allCount++;
	if(timeoutId === null){
		console.log("первый вызов")
		resultFunction.count++;
		console.log(func(...args))
	}
	
  	if(timeoutId){
  		console.log("удалили текущий таймаут")
  		clearTimeout(timeoutId)
  	}

  	console.log("создали таймаут")
  	timeoutId = setTimeout(() => {
  		console.log(func(...args))
  		resultFunction.count++;
  		console.log("вызвали колбек")
  	}, delay)
  }

  resultFunction.count = 0;
  resultFunction.allCount = 0;

  return resultFunction;
}
