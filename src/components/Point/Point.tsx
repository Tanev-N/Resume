import "./Point.css";

export default function Point({id, titleNode, children} : {id : string, titleNode: React.ReactNode, children: React.ReactNode}) {
    return (
        <div id={id} className={`AppMain__point ${id === 'about' ? 'mainPoint' : 'secondaryPoint'}`}>
          <div className="AppMain__point__title">{titleNode}</div>
          <div className="AppMain__point__content">
            {children}
          </div>
        </div>
    )
}
