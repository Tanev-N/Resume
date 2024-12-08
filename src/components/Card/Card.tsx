import "./Card.css";

export default function Card({path, title, name}: { path: string; title: string; name: string; }) {
    return (
    <div className={"content__card " + name}>
        <img className="content__card__image" src={path}></img>
        <div className="content__card__title">{title}</div>
    </div>)
}