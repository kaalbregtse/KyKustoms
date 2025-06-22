import './section-header.css';

export default function SectionHeader(props) {
    return (
        <div className="section-header-container" style={{padding: props.padding}} id={props.id}>
            <p>{props.super}</p>
            <h2>{props.headline}</h2>
        </div>
    )
}