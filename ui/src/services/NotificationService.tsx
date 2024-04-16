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

const notify = (message: string, type: ToastType = ToastType.INFO) => {
    switch (type) {
        case ToastType.SUCCESS:
            toast.success(message);
            break;
        case ToastType.ERROR:
            toast.error(message);
            break;
        default:
            toast(message);
    }
};

export default notify;