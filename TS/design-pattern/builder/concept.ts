class Product {
	parts: string[] = [];
}

interface IBuilder {
	buildPartA(): this;
	buildPartB(): this;
	buildPartC(): this;
	getResult(): Product;
}

class Builder implements IBuilder {
	product: Product;

	constructor() {
		this.product = new Product();
	}

	buildPartA(): this {
		this.product.parts.push("a");
		return this;
	}
	buildPartB(): this {
		this.product.parts.push("b");
		return this;
	}
	buildPartC(): this {
		this.product.parts.push("c");
		return this;
	}
	getResult(): Product {
		return this.product;
	}
}

class Director {
	static construct() {
		"Constructs and returns the final product";
		return new Builder().buildPartA().buildPartB().buildPartC().getResult();
	}
}

const PRODUCT1 = Director.construct();
console.log(PRODUCT1.parts);
