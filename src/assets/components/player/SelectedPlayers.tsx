import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../types/playersType";

import SelectedPlayersCard from "./SelectedPlayersCard";

interface IselectedPlayersProps{
    selectedPlayers:Iplayer[],
    setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
       coin:number,
    setCoin:Dispatch<SetStateAction<number>>
}

const SelectedPlayers = ({  coin,setCoin, selectedPlayers, setSelectedPlayers}:IselectedPlayersProps) => {
    console.log(selectedPlayers,"from Slected Players");

if(selectedPlayers.length===0){
    return        <h2 className="font-bold text-3xl my-7 py-5 text-pink-300 text-center">No Players Here</h2>
}
    return (
        <div className="text-black grid grid-cols-1 my-4 py-3 px-4">
         
             {
                       selectedPlayers.map((player:Iplayer)=><SelectedPlayersCard player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} 
                       setSelectedPlayers={setSelectedPlayers} key={player.playerId} ></SelectedPlayersCard>)
             }
            
        </div>
    );
};

export default SelectedPlayers;