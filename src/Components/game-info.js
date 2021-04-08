const GameInfo = (props) => {
    const {game} = props

    return (
        <div className="game-info-frame">
            <img src={game.image}></img>
            {game.name}
        </div>
    )
}; export default GameInfo