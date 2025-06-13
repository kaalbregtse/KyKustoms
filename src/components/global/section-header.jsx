import './section-header.css';

export default function SectionHeader(props) {
    return (
        <div className="section-header-container">
            <p>{props.super}</p>
            <h2>{props.headline}</h2>
        </div>
    )
}