import "./Card.css";

export default function Card({ path, title, name, ...props }: { path: string; title: string; name: string } & React.HTMLProps<HTMLDivElement>) {
    return (
        <div {...props} className={"content__card " + name}>
            <img className="content__card__image" src={path} alt={title}></img>
            <div className="content__card__title">{title}</div>
        </div>
    );
}