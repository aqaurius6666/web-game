
export const TabGame = (props) => {
    const {game} = props
    console.log(game)
    return (
        <div>
            <div>
                {game.name}
            </div>
            <div>
                Tags: 
                {game.tags.map((tag, i) => {
                    if (i != 0) {
                        return <span>, {tag}</span>
                    }
                    return <span> {tag}</span>})}
            </div>
        </div>
    )
}