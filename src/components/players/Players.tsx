import { use, useState } from "react";
import type { playerType } from "../../types/PlayersType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
interface PlayersProps {
    playersPromise: Promise<playerType[]>
}

const Players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise)
    const [buttonType, setbuttonType] = useState('selected')


    const handleUpdateButton = (type: 'available' | 'selected') => {
        setbuttonType(type);
    }
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            <div className="flex justify-between gap-4 ">
                <h2 className="font-bold text-3xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
                <div className="flex gap-2">

                    <button

                        onClick={() => handleUpdateButton('available')}
                        className={`btn font-bold transition-all ${buttonType === 'available' ? 'btn-success text-white' : 'btn-outline btn-success'
                            }`}>Available</button>
                    <button
                        onClick={() => handleUpdateButton('selected')}
                        className={`btn font-bold transition-all ${buttonType === 'selected' ? 'btn-success text-white' : 'btn-outline btn-success'
                            }`}>Selected</button>
                </div>
            </div>
            {buttonType === "available" ? (
    <AvailablePlayers players={players} />
  ) : (
    <SelectedPlayers />
  )}
        </div>
    );
};

export default Players;