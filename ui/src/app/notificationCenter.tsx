import React from "react";
import { useNotificationCenter } from "react-toastify/addons/use-notification-center";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export enum ToastType {
    SUCCESS = 1,
    ERROR = 2,
    INFO = 3
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
//     id: string;
//     title: string;
//     text: string;
// }
export interface Toast {
    type: ToastType;
    message: string;
    position: string;
}

export const showToast = () => {
    toast("Hello World", {
      data: {
        title: "Hello World Again",
        text: "We are here again with another article",
      },
    });
};

export const showSuccessToast = () => {
    toast.success("Hello World", {
        data: {
        title: "Success toast",
        text: "This is a success message",
        },
    });
};

export const showErrorToast = () => {
    toast.error("Hello World", {
        data: {
            title: "Error toast",
            text: "This is an error message",
        },
    });
};

const NotificationCenter = () => {
  const { notifications, clear, markAllAsRead, markAsRead } = useNotificationCenter();



  return (
    <div>
      <p>{notifications.length}</p>
      <button onClick={showToast}>Default</button>
      <button onClick={showSuccessToast}>Success</button>
      <button onClick={showErrorToast}>Error</button>
      <br />
      <br />
      <button onClick={clear}>Clear Notifications</button>
      <button onClick={() => markAllAsRead()}>Mark all as read</button>
      {/* <ul>
        {notifications.map((notification) => (
          <li
            onClick={() => markAsRead(notification.id)}
            key={notification.id}
            style={
              notification.read
                ? { background: "green", color: "silver", padding: "0 20px" }
                : {
                    border: "1px solid black",
                    background: "navy",
                    color: "#fff",
                    marginBottom: 20,
                    cursor: "pointer",
                    padding: "0 20px",
                  }
            }
          >
            <span>id: {notification.id}</span>
            <p>title: {(notification.data as ToastNotification)?.title}</p>
            <p>text: {(notification.data as ToastNotification)?.text}</p>
          </li>
        ))}
      </ul> */}
      <ToastContainer />
    </div>
  );
};

export default NotificationCenter;