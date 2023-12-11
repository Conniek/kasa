import './Banner.scss';

function Banner(props) {
    return(
        <div className="Banner" style={{backgroundImage: `url(${props.image})`}}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Banner;