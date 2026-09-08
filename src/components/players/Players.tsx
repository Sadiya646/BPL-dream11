import { use } from "react";
import type { playerType } from "../../types/PlayersType";
interface PlayersProps{
    playersPromise:Promise<playerType[]>
}

const Players = ({playersPromise}:PlayersProps) => {
    const players=use(playersPromise)
    console.log(players)
    return (
        <div>
            
        </div>
    );
};

export default Players;