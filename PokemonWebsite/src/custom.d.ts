// JS 기반의 라이브러리들은 TS환경에서 타입이 지정되지 않았기 때문에 타입체킹이 제대로 되지 않아 인식되지 못할 수 있음.
// 기존 JavaScript로 만들어진 서드파티 모듈들을 TypeScript 환경에서도 사용할 수 있도록 따로 타입을 정리해서 넣어둔 파일
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";