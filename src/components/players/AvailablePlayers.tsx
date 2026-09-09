import type { Dispatch, SetStateAction } from "react";
import type { playerType } from "../../types/PlayersType";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: playerType[];
   coin:number;
     setcoin:Dispatch<SetStateAction<number>>;
}

const AvailablePlayers = ({ players,coin,setcoin }: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 pt-8">
      {players.map((player, index) => (
        <PlayerCard key={player.playerName || index} player={player} coin={coin} setcoin={setcoin} />
      ))}
    </div>
  );
};

export default AvailablePlayers;