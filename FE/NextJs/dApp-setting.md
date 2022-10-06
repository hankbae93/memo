# 1. `Library`

```bash
yarn add ethers wagmi next-auth
```

[GitHub - wagmi-dev/wagmi: React Hooks for Ethereum](https://github.com/wagmi-dev/wagmi)

- wagmi: `ethers` 모듈 기반 이더리움 리액트 라이브러리로 dApp개발에 유용한 훅스들을 가지고 있습니다.
- next-auth: 서버리스 어플리케이션의 인증/인가 구현을 위해 탄생했지만 프론트단에서 세션 관리를 편하게 해주는 hook 또한 제공합니다.

# 2. `Case`

## Wagmi로 지갑 및 블록체인 네트워크 연결하기

```ts
import { SessionProvider } from "next-auth/react";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { Session } from "next-auth";

const { chains, provider } = configureChains(
	[chain.polygonMumbai],
	[publicProvider()]
);
// 사용자의 지갑이 도메인에서 지원하지 않는 체인에 연결된 경우
// 프로바이더가 체인 배열에 나열된 첫 번째 체인을 사용합니다.

const client = createClient({
	autoConnect: true,
	provider,
	connectors: [
		new MetaMaskConnector({
			chains,
		}),
	],
});
// React.context를 활용해 ethers.provider / ethers.signer 등
// global state로 관리할 수 있게 도와줍니다.

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
	return (
		<WagmiConfig client={client}>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
			</SessionProvider>
		</WagmiConfig>
	);
}
```

## 지갑 연결 / 해제

```jsx
const LoginForm = () => {
  const { address, isConnected } = useAccount() // 계정 데이터 및 연결 상태 체크하는 훅스
  const { connectAsync } = useConnect({ // 계정 연결 메소드를 관리하는 훅스
    connector: new InjectedConnector(),
		// injectedConnector는 메타마스크를 의미합니다.
		// 여기서는 새로운 객체를 생성해서 연결하지만 처음 config를 설정할 떄
		// 사용될 커넥터들을 설정해도 됩니다.
  });
  const { disconnect } = useDisconnect();

  const handleLogin = async () => {
   if (address) {
      signIn(..., { address, ... })
    } else {
      const userInfo = await connectAsync()
      signIn(..., { address: userInfo.account, ... })
    }
  };

  const handleLogout = async () => {
    await disconnectAsync()
    await signOut(...)
  };

  if (isLoading) return <div>메타마스크 인증 로딩...</div>;

  return (
    <div>
      {session.status === "authenticated" ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleLogin}>로그인</button>
      )}
    </div>
  );
};
```

## 컨트랙트 생성 및 호출

```jsx
// EthereumProvider.ts
const updateEthers = () => {
  const tempProvider = new ethers.providers.Web3Provider(
    window.ethereum as any
  )
  const signer = tempProvider.getSigner()
  const tempContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer
  )

  setEthereumState(cloneDeep(tempContract))
}
```

```jsx
// test.ts
const contract = useRecoilValue(ethereumState);

const contractCall = async () => {
	const response = await contract.test1();
	console.log(response);
};
const contractSend = async () => {
	const response = await contract.setA(1);
	console.log(response);
};

return (
	<div>
		<button onClick={contractCall}>call</button>
		<button onClick={contractSend}>send</button>
	</div>
);
```

## 지갑 잔고 체크

```jsx
import { useAccount, useBalance } from "wagmi";

const { address } = useAccount();
const { data, refetch } = useBalance({
	addressOrName: address,
	watch: true, // 실시간으로 갱신될 때에 맞춰 refetch해줌
});
```

```jsx
// return value
{
    "decimals": 18,
    "formatted": "0.398742119141117775",
    "symbol": "MATIC",
    "value": {
        "type": "BigNumber",
        "hex": "0x05889dd840648f4f"
    }
}
```

## utils 변경

```ts
const price = caver.utils.convertToPeb(peb, "KLAY")
==>
const price = ethers.utils.formatEther(ether)
```
