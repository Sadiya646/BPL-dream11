import type { playerType } from "../../types/PlayersType";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: playerType[];
}

const AvailablePlayers = ({ players }: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 pt-8">
      {players.map((player, index) => (
        <PlayerCard key={player.playerName || index} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayers;