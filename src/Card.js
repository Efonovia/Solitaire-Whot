function Card(props) {
    return(
        <img 
            onClick={props.handleCardClick}
            src={props.visible ? `${process.env.PUBLIC_URL}/assets/images/${props.data.cardImage}` : `${process.env.PUBLIC_URL}/assets/images/red.png`} alt={props.data.cardName}
        ></img>
    )
}


export default Card