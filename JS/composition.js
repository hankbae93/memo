const fullName = (user) => ({
	...user,
	fullName: `${user.firstName} ${user.lastName}`,
});

const appendAddr = (user) => ({
	...user,
	addr: "Seoul",
});

const removeNames = (user) => {
	delete user.firstName;
	delete user.lastName;

	return user;
};

const compose =
	(...fns) =>
	(obj) =>
		fns.reduce((c, fn) => fn(c), obj);

// const userInfo = compose(fullName, removeNames)(user);

function composeES2015ByHank() {
	var fns = arguments;

	return function (obj) {
		var result = obj;

		for (let i = 0; i < fns.length; i++) {
			result = fns[i](result);
		}

		return result;
	};
}

const user = {
	firstName: "기",
	lastName: "모찌",
};

const result = composeES2015ByHank(fullName, appendAddr, removeNames)(user);

console.log(result);

function composeES2015() {
	var fns = arguments;

	return function rfn(obj, i) {
		i = i || 0;

		if (i < fns.length) {
			return rfn(fns[i](obj), i + 1);
		}
		return obj;
	};
}

const b = composeES2015(fullName, appendAddr, removeNames)(user);
console.log(b);
