# template-typescript-react-with-babel

create React &amp; Typescript project with babel

- `react` : 컴포넌트 기반으로 UI를 그리는 자바스크립트 라이브러리
- `react-dom` : 리액트를 웹 브라우저 환경에서 쓰기 위한 관련(ex. DOM) 메소드가 포함된 패키지
- `@babel/core` : 바벨의 코어 라이브러리
  - 바벨: 아직 구형 브라우저에서 지원하지 않는 최신 문법 코드를 구형 브라우저에서 사용가능한 코드로 변환시켜주는 트랜스파일러
- `babel-loader` : 웹팩이 파일을 번들링하는 과정에서 특정 파일에 대해 바벨을 적용하기 위해 필요한 로더
- `@babel/preset-react` : 리액트와 바벨을 함께 사용하기 위한 프리셋. 다음 플러그인을 포함하고 있음 (development 환경에서는 두가지 플러그인이 추가로 포함되나 이 글에서는 다루지 않음)

  - `@babel/plugin-syntax-jsx` : 바벨이 jsx 문법을 파싱할지 말지 유무를 결정함. jsx 문법으로 코드를 변환하는 것은 `plugin-transform-react-jsx`의 몫
  - `@babel/plugin-transform-react-jsx` : 리액트 jsx 문법을 어떻게 변환할지 관여하는 플러그인
  - `@babel/plugin-transform-react-display-name` : React.createClass 호출시 `displayName` 속성을 추가함
    - ```js
      var bar = createReactClass({
        displayName: 'bar',
      });
      ```

- `@babel/preset-env` : 최신 자바스크립트 문법을 타겟 환경에서 구동가능한 문법으로 변환시켜주는 프리셋
  - Stage 3 이전의 문법은 지원하지 않음. 이 시점에서는 해당 문법을 구현한 브라우저가 없기 때문. `shippedProposals` 옵션을 켜두면 일부 브라우저가 구현한 Stage 3 Proposal 문법을 수동으로 포함시킬 수 있음.
  - `useBuiltIns` 옵션이 `usage`나 `entry`라면 `@babel/preset-env`는 `core-js` 모듈에 대한 직접적인 참조를 추가한다. 즉, `core-js` 모듈이 resolve되고 접근 가능한 상태가 된다.
  - `@babel/polyfill`은 7.4.0 이후로 deprecated 되었으므로 `corejs` 옵션을 통해 직접 `core-js` 모듈을 추가하는 것을 추천함
- `core-js` : 최신 ECMAScript 문법에 대한 폴리필을 포함하고 있으며 전역 네임스페이스 오염없이 사용할 수 있는 라이브러리
- `@babel/preset-typescript` : 타입스크립트와 바벨을 함께 사용하기 위한 프리셋. 이 과정에서 타입 선언이 제거됨. 다음 플러그인을 포함하고 있음
  - `@babel/plugin-transform-typescript`: 타입스크립트 문법 지원. 타입스크립트 only 문법(ex. 타입선언)만을 지원하므로, JS와 TS 양측에서 지원하는 문법(ex. optional chaining)은 `preset-env`의 몫으로 넘기는 것을 추천함
- 번들러
  - `webpack` : 의존성 그래프를 이용하여 소스 코드를 n개의 파일로 묶어내는 정적 모듈 번들러
  - `webpack-cli`
    - CLI(Command Line Interface)에서 유용하게 쓸 수 있는 웹팩 관련 커맨드 묶음
    - `webpack serve`, `webpack build`, `webpack --mode=production` 등을 사용할 수 있음
  - `webpack-dev-server` : 라이브 리로딩을 지원하는 개발용 웹서버
    - 내부적으로 `webpack-dev-middleware`를 사용하는데, 이 미들웨어는 파일을 디스크를 직접 쓰지 않고 메모리 상에서 다룬다. HMR (Hot Module Reload)를 지원한다.
- `eslint`: 문법 실수를 줄이기 위해 사용하는 린트 툴
- `eslint-config-react-app` : CRA(create react app)에서 쓰는 ESLint 설정. 원래는 airbnb style이 많이 쓰였으나 2022년 8월경 `@eslint/config`에서 제거됨
- `prettier` : 일관성있게 코드 스타일을 유지할 수 있게 해주는 툴
