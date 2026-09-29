import Players from "./assets/components/player/Players";
import Banner from "./assets/components/Banner"
import Nav from "./assets/components/Nav"
import { Suspense, useState } from "react";
import type { Iplayer } from "./assets/components/types/playersType";

const playerFetch = async ():Promise<Iplayer[]>=> {
  const res=await fetch("/public/data.json");
  const data = await res.json();
  return data;
}


function App() {
  const [coin,setCoin] =useState(700);
const [playerPromise] = useState(()=> playerFetch())


  return (
<main className="min-h-screen bg-white">
     <div>
    <Nav coin={coin}></Nav>
   <Banner></Banner>
  
  <Suspense fallback={<h2>Loading...</h2>}>  <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}></Players></Suspense>


   </div>
</main>
  )
}

export default App
