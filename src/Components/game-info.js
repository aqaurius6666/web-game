import TagCategory from "./tag-category"

const GameInfo = (props) => {
    const { game } = props

    return (
        <span className="game-info-frame">
            <img width="100%" src={game.image}></img>
            <div>{game.name}</div>
            <TagCategory game_tags={game.tags} />
        </span>
    )
}; export default GameInfo