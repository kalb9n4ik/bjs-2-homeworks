function parseCount(value) {
	let result = Number.parseFloat(value)
	if (!isNaN(result)) {
		return result;
	} else {
		throw new Error("Невалидное значение")
	}
	
}

function validateCount(value) {
	try {
		let result = parseCount(value)
		return result
	} catch (error) {
		return error
	}
}

class Triangle {
	constructor(a, b, c) {

		this.a = a
		this.b = b
		this.c = c

		if (a + b < c ||  b + c < a || a + c < b) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	}

	get perimeter() {
		return this.a + this.b + this.c
	}

	get area() {
		const p = 0.5 * this.perimeter
		return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
	}
}

function getTriangle(a, b, c) {
	let result = {}
	try {
		result = new Triangle(a, b, c);
		return result
	} catch (error) {
		error = "Ошибка! Треугольник не существует"
		let result = {
			a: a,
			b: b,
			c: c,
			get perimeter() {
				return error
			},
			get area() {
				return error
			}
		}
	   return result
	}
}