
import type { Dispatch, SetStateAction } from 'react';
import type { Iplayer } from '../types/playersType';
import PlayerCard from './PlayerCard';
interface AvailablePlayersProps{
    players:Iplayer[],
        coin:number,
        setCoin:Dispatch<SetStateAction<number>>
        selectedPlayers:Iplayer[],
        setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>
}
const AvailablePlayers = ({players,coin,setCoin,selectedPlayers,setSelectedPlayers}:AvailablePlayersProps) => {
   
   
    return (
        <div className="grid grid-cols-3 gap-7">
            {
        players.map((player:Iplayer,ind:number)=> <PlayerCard player={player} key={ind} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></PlayerCard>)
            }
        </div>
    );
};



export default AvailablePlayers;