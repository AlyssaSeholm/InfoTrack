function ErrorText({styleClass, children}: {styleClass: string, children: string | JSX.Element | JSX.Element[]}) {
    return (
        <p className={`text-center  text-error ${styleClass}`}>{children}</p>
    );
}

export default ErrorText;
