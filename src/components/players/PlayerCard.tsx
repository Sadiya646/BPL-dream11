
import { useState, type Dispatch, type SetStateAction } from 'react';
import type { playerType } from '../../types/PlayersType';
import { FaUserAlt } from 'react-icons/fa';
interface IplayerCardProps{
    player: playerType;
       coin:number;
         setcoin:Dispatch<SetStateAction<number>>;
}
const PlayerCard = ({player,coin,setcoin}:IplayerCardProps) => {

    const[isSelected,setisSelected]=useState(false)

const handleSelectPlayer = () => {
        
        const cleanPrice = Number(player.price.replace(/[\$,]/g, ""));

        if (coin < cleanPrice) {
            alert("Not enough coins!");
            return;
        }

        setisSelected(true);
        const newPrice = coin - cleanPrice;
        setcoin(newPrice);
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
              <figure className="h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={player.playerImage}
                  alt={player.playerName}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </figure>

              <div className="card-body p-6">
                {/* Name and Icon Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <FaUserAlt className="text-xl" />
                  </div>
                  <h2 className="card-title text-2xl font-bold text-gray-800">
                    {player.playerName}
                  </h2>
                </div>

                {/* Origin & Styles Info Box */}
                <div className="bg-gray-50 rounded-xl p-4 my-2 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between items-center bg-gray-50 rounded-xl p-4 my-2 text-sm text-gray-600">
                    {/* Origin */}
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-gray-800">{player.origin}</span>
                    </div>

                    {/* Player Type as a Button format */}
                    <div>
                      <button className="px-3 py-1 bg-indigo-50 text-indigo-600 font-medium text-xs rounded-lg border border-indigo-100 shadow-sm cursor-default">
                        {player.playerType}
                      </button>
                    </div>
                  </div>
                  <div className="divider"></div>

                  <h2 className="font-semibold">Rating</h2>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-500">Batting:</span>
                    <span className="font-semibold text-gray-800">{player.battingStyle}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-500">Bowling:</span>
                    <span className="font-semibold text-gray-800">{player.bowlingStyle}</span>
                  </div>
                </div>

                {/* Price Tag & Action Button */}
                <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 block">Price</span>
                    <span className="text-xl font-bold text-primary">{player.price}</span>
                  </div>
                  <button 
                  onClick={()=>handleSelectPlayer()}
                  className={`btn btn-primary px-6 rounded-xl shadow-md hover:shadow-lg`}
                  disabled={isSelected===true? true:false}
                  >
                   {isSelected===true? "Selected":"Choose Player"}
                  </button>
                </div>
              </div>
            </div>
    );
};

export default PlayerCard;