interface Name {
	first: string;
	last: string;
}

type Pick2<T, K extends keyof T> = {
	[k in K]: T[k];
};

type FirstLast = Pick2<Name, "first" | "last">;
