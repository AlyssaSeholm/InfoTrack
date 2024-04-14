import '@testing-library/jest-dom';
import "@material-tailwind/react/tailwind.css";

declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGElement>>
    export default content
}
declare module '*.png' {
    const content: any;
    export default content
}

//#region onPointerEnterCapture and onPointerLeaveCapture work around
/* --------------------------------------------------------------------------
   Needed to fix the onPointerEnterCapture unexpected errors in @types/react
   ref: https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/69006
  --------------------------------------------------------------------------*/
import 'react'
declare module 'react' {
  interface HTMLAttributes<T> {
    onPointerEnterCapture?: (e: React.PointerEvent<T>) => void
    onPointerLeaveCapture?: (e: React.PointerEvent<T>) => void
    placeholder?: (e: any) => {undefined} 
  }
  interface RefAttributes<T> {
    onPointerEnterCapture?: (e: React.PointerEvent<T>) => void
    onPointerLeaveCapture?: (e: React.PointerEvent<T>) => void
    // placeholder?: (e: any) => {undefined} 
  }
}
//#endregion onPointerEnterCapture and onPointerLeaveCapture work around