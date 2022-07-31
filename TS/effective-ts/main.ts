interface Options {
	title: string;
	darkMode?: boolean;
}

const o1: Options = document;
const o2: Options = new HTMLAnchorElement();
const o: Options = { darkmode: false, title: "ski" };
/*
'{ darkmode: boolean; title: string; }' 형식은 'Options' 형식에 할당할 수 없습니다.
  개체 리터럴은 알려진 속성만 지정할 수 있지만 'Options' 형식에 'darkmode'이(가) 없습니다. 'darkMode'을(를) 쓰려고 했습니까?
*/
