# template-typescript-react-with-babel

create React &amp; Typescript project with babel

- `react` : 컴포넌트 기반으로 UI를 그리는 자바스크립트 라이브러리
- `react-dom` : 리액트를 웹 브라우저 환경에서 쓰기 위한 관련(ex. DOM) 메소드가 포함된 패키지
- `@babel/core` : 바벨의 코어 라이브러리
  - 바벨: 아직 구형 브라우저에서 지원하지 않는 최신 문법 코드를 구형 브라우저에서 사용가능한 코드로 변환시켜주는 트랜스파일러
- `babel-loader` : 웹팩이 파일을 번들링하는 과정에서 특정 파일에 대해 바벨을 적용하기 위해 필요한 로더
- 번들러
  - `webpack` : 의존성 그래프를 이용하여 소스 코드를 n개의 파일로 묶어내는 정적 모듈 번들러
  - `webpack-cli`
    - CLI(Command Line Interface)에서 유용하게 쓸 수 있는 웹팩 관련 커맨드 묶음
    - `webpack serve`, `webpack build`, `webpack --mode=production` 등을 사용할 수 있음
  - `webpack-dev-server` : 라이브 리로딩을 지원하는 개발용 웹서버
    - 내부적으로 `webpack-dev-middleware`를 사용하는데, 이 미들웨어는 파일을 디스크를 직접 쓰지 않고 메모리 상에서 다룬다. HMR (Hot Module Reload)를 지원한다.
