interface MyUser {
	name: string;
	id: number;
	email?: string;
	phone?: string;
}

type MyUserOptionals = Partial<MyUser>;
/*
{
    name?: string | undefined;
    id?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
}
*/

// interface MyUserOptionals {
// 	name?: string;
// 	id?: string;
// 	email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
	return {
		...user,
		...overrides,
	};
};

console.log(
	merge(
		{ name: "Hankkk", id: 1, email: "asda2@naver.com" },
		{ email: "ranja@gmail.com" }
	)
);

type RequiredMyUser = Required<MyUser>;
/*
{
    name: string;
    id: string;
    email: string;
    phone: string;
}
 
 */

type JustEmailAndName = Pick<MyUser, "email" | "name">;
/*
{
  name: string;
  email?: string | undefined;
}
 */

type UserWithoutId = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
	return users.reduce((a, v) => {
		const { id, ...rest } = v;
		return {
			...a,
			[v.id]: rest,
		};
	}, {});
};

console.log(
	mapById([
		{ id: 2, name: "Mr.Foo" },
		{ id: 3, name: "Mrs. Baz" },
	])
);
