import { use } from "react";
import type { playerType } from "../../types/PlayersType";
import AvailablePlayers from "./AvailablePlayers";
interface PlayersProps {
    playersPromise: Promise<playerType[]>
}

const Players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise)
    console.log(players)
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            <div className="flex justify-between gap-4 ">
                <h2 className="font-bold text-3xl">Available Players</h2>
                <div className="flex gap-2">
                    
                    <button className="btn btn-outline btn-secondary font-bold">Secondary</button>
                    <button className=" font-bold btn btn-outline btn-accent">Accent</button>
                </div>
            </div>
            <AvailablePlayers players={players} />
        </div>
    );
};

export default Players;