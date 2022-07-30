function isGreeting(pharse: String) {
	return ["hello", "good day"].includes(pharse);
	/*
	'String' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
  string'은(는) 기본 개체이지만 'String'은(는) 래퍼 개체입니다. 가능한 경우 'string'을(를) 사용하세요.ts(2345)
	*/
}
