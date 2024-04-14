import { toast } from 'react-toastify';

export enum ToastType {
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'info'
}
export enum ToastPosition {
    TOP_LEFT = "top-left",
    TOP_CENTER = "top-center",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_CENTER = "bottom-center",
    BOTTOM_RIGHT = "bottom-right"
}

// export interface ToastNotification {
//     // id: string;
//     // title: string;
//     // text: string;
//     message: string;
//     type: ToastType;
// }

const notify = (message: string, type: ToastType = ToastType.INFO) => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        default:
            toast(message);
    }
};

export default notify;