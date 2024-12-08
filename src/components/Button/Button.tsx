import "./Button.css";

export default function Button({onClick, text, mark, isSecondary} : { onClick?: () => void; text: string; mark: string; isSecondary?: boolean }) {
    return (
        <a
        href={mark}
        className={`AppHeader__navigator__element ${isSecondary ? 'secondary' : ''}`}
        onClick={onClick}
      >
        {text}
      </a> 
    );
}
