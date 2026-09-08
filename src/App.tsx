import { Suspense } from "react";
import Navbar from "./components/Navbar"
import Players from "./components/players/Players";
import type { playerType } from "./types/PlayersType";



const playersFetch=async ():Promise<playerType[]> => {
  const response=await fetch("/data.json")
  const data=await response.json()
  return data;
}


function App() {
  const playersPromise=playersFetch();
  

  return (
    <>
      <Navbar />
    <Suspense fallback={<h2 className="text-xl font-semibold text-gray-600 tracking-wide animate-pulse">Loading Players, Please Wait..</h2>}>
        <Players playersPromise={playersPromise}/>
    </Suspense>
    
    </>
  )
}

export default App
