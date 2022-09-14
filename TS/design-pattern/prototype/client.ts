import Document from "./document";

const ORIGINAL_DOCUMENT = new Document("Original", [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
]);

console.log(ORIGINAL_DOCUMENT);
/*
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
}
*/

const copy1 = ORIGINAL_DOCUMENT.clone(1); // 얕은 복사
copy1.name = "Copy 1";
copy1.array[1][2] = 200;
console.log(copy1);
console.log(ORIGINAL_DOCUMENT);
/*
Document {
  name: 'Copy 1',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
*/

const copy2 = ORIGINAL_DOCUMENT.clone(1); // shallow copy
copy2.name = "Copy 2";
copy2.array[1] = [9, 10, 11, 12];
console.log(copy2);
console.log(ORIGINAL_DOCUMENT);
/*
array[1]의 원본 데이터를 아예 바꾸어버렸기 때문에 mode 1에서는 더이상 원본의 array[1]에 영향을 끼치지 않습니다.
Document {
  name: 'Copy 2',
  array: [ [ 1, 2, 3, 4 ], [ 9, 10, 11, 12 ] ]
}
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
*/

const DOCUMENT_COPY_3 = ORIGINAL_DOCUMENT.clone(2); // deep copy
DOCUMENT_COPY_3.name = "Copy 3";
// This does modify ORIGINAL_DOCUMENT because it changes the element of
// array[1][0] that was deep copied recursively when using mode 2
DOCUMENT_COPY_3.array[1][0] = 1234;
console.log(DOCUMENT_COPY_3);
console.log(ORIGINAL_DOCUMENT);
/*
Document {
  name: 'Copy 3',
  array: [ [ 1, 2, 3, 4 ], [ 1234, 6, 200, 8 ] ]
}
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
*/
