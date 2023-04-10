# template-typescript-react-with-babel

create React &amp; Typescript project with babel

- `react` : 컴포넌트 기반으로 UI를 그리는 자바스크립트 라이브러리
- `react-dom` : 리액트를 웹 브라우저 환경에서 쓰기 위한 관련(ex. DOM) 메소드가 포함된 패키지
- `@babel/core` : 바벨의 코어 라이브러리
  - 바벨: 아직 구형 브라우저에서 지원하지 않는 최신 문법 코드를 구형 브라우저에서 사용가능한 코드로 변환시켜주는 트랜스파일러
- `babel-loader` : 웹팩이 파일을 번들링하는 과정에서 특정 파일에 대해 바벨을 적용하기 위해 필요한 로더
- `@babel/preset-react` :

  - 아래 3가지 플러그인을 포함하고 있음 (development 환경에서는 두가지 플러그인이 추가로 포함되나 이 글에서는 다루지 않음)
  - `@babel/plugin-syntax-jsx` : 바벨이 jsx 문법을 파싱할지 말지 유무를 결정함. jsx 문법으로 코드를 변환하는 것은 `plugin-transform-react-jsx`의 몫
  - `@babel/plugin-transform-react-jsx` : 리액트 jsx 문법을 어떻게 변환할지 관여하는 플러그인

  - `@babel/plugin-transform-react-display-name` : React.createClass 호출시 `displayName` 속성을 추가함
    - ```js
      var bar = createReactClass({
        displayName: "bar",
      });
      ```

- 번들러
  - `webpack` : 의존성 그래프를 이용하여 소스 코드를 n개의 파일로 묶어내는 정적 모듈 번들러
  - `webpack-cli`
    - CLI(Command Line Interface)에서 유용하게 쓸 수 있는 웹팩 관련 커맨드 묶음
    - `webpack serve`, `webpack build`, `webpack --mode=production` 등을 사용할 수 있음
  - `webpack-dev-server` : 라이브 리로딩을 지원하는 개발용 웹서버
    - 내부적으로 `webpack-dev-middleware`를 사용하는데, 이 미들웨어는 파일을 디스크를 직접 쓰지 않고 메모리 상에서 다룬다. HMR (Hot Module Reload)를 지원한다.
