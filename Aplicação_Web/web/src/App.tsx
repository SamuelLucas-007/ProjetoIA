import './styles/global.css';
import { Forms } from './components/Forms';
import api from 'axios';

// import { Navbar } from './components/Navbar';

// import { Habit } from "./components/Habit"


export function App() {
  return (
    <div className="w-screen bg-background h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        {/* <Navbar /> */}
        <div className="">
          <Forms/>
        </div>  
      </div>
    </div>
  )
}

