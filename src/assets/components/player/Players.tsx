import { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../types/playersType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';
interface Playersprops{
    playerPromise:Promise<Iplayer[]>
    coin:number,
    setCoin:Dispatch<SetStateAction<number>>
}

const Players = ({playerPromise,coin,setCoin}:Playersprops) => {
    const players = use(playerPromise);

    const [buttonType,setButtonType] =useState<"available"|"selected">("available");
    const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);
    console.log(selectedPlayers, " from Players");
    const handlerButtonType = (type: "available" | "selected")=> {
        setButtonType(type)
    }

    return (
        <div className="container mx-auto mt-12">

            <div className="text-black flex justify-between mb-2 gap-4">
            <h2 className="font-bold">{buttonType==="available" ?  "Availavle Prayers: 0" : "Selected Players: 0"
            }</h2>

             <div>
               <button
               onClick={()=>handlerButtonType("available")}
               className={`btn ${buttonType==="available"? "btn-success" : ""} rounded-2xl rounded-r-none`}>Availavle</button>

               <button
               onClick={()=>handlerButtonType("selected")}
               className={`btn${buttonType==="selected"? "btn-success" : ""} rounded-2xl rounded-l-none bg-amber-200`}>Selected</button>
             </div>
            </div>
   {buttonType === "available" ? (
       <AvailablePlayers
           players={players}
           coin={coin}
           setCoin={setCoin}
           selectedPlayers={selectedPlayers}
           setSelectedPlayers={setSelectedPlayers}
       />
   ) : (
       <SelectedPlayers 
          selectedPlayers={selectedPlayers}
           setSelectedPlayers={setSelectedPlayers}
           coin={coin}
           setCoin={setCoin}
       />
   )}
        </div>
    );
};

export default Players;