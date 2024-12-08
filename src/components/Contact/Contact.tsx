import "./Contact.css";
import { useState } from "react"; 

export default function Contact({ Path, text }: { Path: string; text: string }) {
    const [copied, setCopied] = useState(false); 

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        setCopied(true); 
        setTimeout(() => setCopied(false), 1000); 
    };

    return (
      <div className="contact" onClick={handleCopy}> 
        <div className="contact__image">
          <img src={Path}></img>
        </div>
        <div className="contact__title">{text}</div>
        {copied && <div className="copy-notification">Скопировано!</div>} 
      </div>
    );
}