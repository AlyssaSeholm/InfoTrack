import '@testing-library/jest-dom';
// declare module '*.jpg';
// declare module '*.png' {
//     const value: any;
//     export = value;
//   }

declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGElement>>
    export default content
}
declare module '*.png' {
    const content: any;
    export default content
}