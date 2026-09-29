import  { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../types/playersType";
import { toast } from "react-toastify";
interface IPlayerCardProps{
  player:Iplayer,
      coin:number,
      setCoin:Dispatch<SetStateAction<number>>,
      selectedPlayers:Iplayer[],
      setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
}
const PlayerCard = ({ player,coin,setCoin,selectedPlayers, setSelectedPlayers }:IPlayerCardProps) => {
  console.log(selectedPlayers, "from PlayerCard");
  const {
    playerName,
    playerImage,
    origin,
    price,
    battingStyle,
    bowlingStyle,
  } = player;

  const [isSelected, setIsSelected] = useState(false);
  const handleOfCoin = ()=>{
    
       const newCoin= coin-price;
       if(newCoin>0){
           setCoin(newCoin);
              setIsSelected(!isSelected)
        toast.success(`You have purchased ${playerName} succesfully`)
        
       }
       else{
        toast.error("You have not sufficient balance")
       }

      //  selected logic
      setSelectedPlayers([...selectedPlayers,player])
  }

  return (
    <div className="w-[350px] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden font-sans">
      {/* Player Image */}
      <div className="p-3 pb-0">
        <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-gray-800">
          <img
            src={playerImage}
            alt={playerName}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Player Information */}
      <div className="p-4 pt-4">
        {/* Player Name */}
        <div className="flex items-center gap-2 mb-3">
          <svg
            className="w-5 h-5 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>

          <h2 className="text-lg font-semibold text-gray-800 tracking-wide">
            {playerName}
          </h2>
        </div>

        {/* Origin & Role */}
        <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
            </svg>

            <span>{origin}</span>
          </div>

          <span>All-Rounder</span>
        </div>

        {/* Batting & Bowling */}
        <div className="text-gray-500 text-sm mb-4 space-y-2">
          <p className="font-medium text-gray-700">Playing Style</p>

          <div className="flex justify-between items-center">
            <span>{battingStyle}</span>
            <span>{bowlingStyle}</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="text-gray-700 flex justify-between items-center font-medium text-sm mt-2">
          <span>{price}</span>

          <button
            onClick={() => handleOfCoin() }
            className="text-black btn btn-active btn-success"
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;