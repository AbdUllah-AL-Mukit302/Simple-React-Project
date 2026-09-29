import React, { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../types/playersType';
import { TbTrash } from 'react-icons/tb';
interface ISelectedPlayersCardProps{
player:Iplayer,
   selectedPlayers:Iplayer[],
    setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
        coin:number,
    setCoin:Dispatch<SetStateAction<number>>
}

const SelectedPlayersCard = ({player,coin,setCoin,selectedPlayers, setSelectedPlayers}:ISelectedPlayersCardProps) => {
   
    const handleOfRemove = (player: Iplayer) => {
        const restPlayers = selectedPlayers.filter(selectedPlayer=> selectedPlayer.playerId !==player.playerId);
        setSelectedPlayers(restPlayers);
        
        const newCoinPrice= player.price+ coin;
        setCoin(newCoinPrice);
    }

    return (
        <div className="flex justify-between gap-3 p-4 border-2 border-amber-100 rounded-3xl">
    <div className="flex justify-between items-center text-center gap-3.5 ">         
        <div>
            <img src={player.playerImage} alt="PlayerImage" className="h-[40px] w-[40px]" />
            </div>
            <div><h2 className="font-bold text-2xl">{player.playerName}</h2>
                  <p>{player.playerType}</p>                              
            </div>
            </div>
            <div>
                <span
                onClick={()=>handleOfRemove(player)}
                className="text-red-400 font-bold cursor-pointer">
                    <TbTrash></TbTrash>
                </span>
                 </div>
        </div>
    );
};

export default SelectedPlayersCard;