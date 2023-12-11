import './Tag.scss';
function Tag(props) {
    return(
        <span className="Tag">
            {props.children}
        </span>
    )
}
export default Tag;