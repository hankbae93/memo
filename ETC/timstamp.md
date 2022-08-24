# Timestamp

    타임스탬프(영어: timestamp) 또는 시간 표기(時間標記)는 특정한 시각을 나타내거나 기록하는 문자열이다.
    둘 이상의 시각을 비교하거나 기간을 계산할 때 편리하게 사용하기 위해 고안되었으며, 일관성 있는 형식으로 표현된다.

## `유닉스 타임스탬프`

유닉스 시간(영어: Unix time)은 시각을 나타내는 방식이다.

POSIX 시간이나 Epoch 시간이라고 부르기도 한다.

`1970년 1월 1일 00:00:00 협정 세계시(UTC) 부터의 경과 시간을 초로 환산하여 정수로 나타낸 것이다`

그러나 `Javascript`에서는 내부적으로 밀리초를 사용합니다.

그래서 서버단이나 외부 API에서 보내준 타임스탬프를 Date 객체로 변환할 때 1970년이 나오는 일이 생겨도 당황하지 않아도 됩니다.

## 자바스크립트로 타임스탬프를 구할 때

```ts
const timestamp = +new Date();
const timestamp2 = new Date().getTime();
```

## 초 단위 타임스탬프를 자바스크립트 Date 객체로 변환할 때

```ts
const jsTimestamp = timestamp * 1000;
const date = new Date(jsTimestamp);
```
