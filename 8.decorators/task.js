//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
	const hash = md5(JSON.stringify(args));
	let objectInCache = cache.find((item) => item.hash === hash);

	if (objectInCache) {
		console.log("Из кэша: " + objectInCache.value);
		return "Из кэша: " + objectInCache.value;
		}

	let result = func(...args);
		cache.push({
			hash: hash,
			value: result
		});

	if (cache.length > 5) {
			cache.shift();
		}

	console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}

	return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	let count = 0;
	let allCount = 0;

	function decoratFunction(...args) {
	if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}

	if (count === 0) {
		console.log(func(...args));
		count++;
		allCount++;
		} else {
		allCount++;
		}

	timeoutId = setTimeout(() => {
		timeoutId = null;
		console.log(func(...args));
		count++;
		}, delay);
	}

	Object.defineProperty(decoratFunction, "count", {
		get: function() {
		return count;
		},
	});

	Object.defineProperty(decoratFunction, "allCount", {
		get: function() {
		return allCount;
		},
	});

	decoratFunction.history = [];

	return decoratFunction;
}