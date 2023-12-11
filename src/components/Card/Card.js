import '../Card/Card.scss';

export default function Card(props) {
    return(
        <div className="Card" style={{backgroundImage: `url(${props.image})`}}>
            
            <h3>{props.title}</h3>
        </div>
    )
}