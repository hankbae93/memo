const cache: { [ticker: string]: number } = {};

function getQuote(ticker: string): Promise<number> {
	if (ticker in cache) {
		return cache[ticker]; // ~~ 'number' 형식은 'Promise<number>' 형식에 할당할 수 없습니다.ts(2322)
	}
	return fetch(`https://quotes.example.com/?q=${ticker}`)
		.then((response) => response.json())
		.then((quote) => {
			cache[ticker] = quote;
			return quote;
		});
}

getQuote("MSFT").then(() => {});
/**
 any
'number | Promise<any>' 형식에 'then' 속성이 없습니다.
  'number' 형식에 'then' 속성이 없습니다.ts(2339)
 */
