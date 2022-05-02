
// why does onClick not throw an error
// when props.something doesnt exist?

export default function TextPicture(props){
    return (
        <span className={props.containerClass}>
            <span className={props.textClass}> {props.text} </span>
            <img src={props.pic} className={props.picClass}/>
        </span>
    )
}