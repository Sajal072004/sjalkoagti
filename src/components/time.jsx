import { useEffect , useState } from "react";

let Time = () => {

  const [time , setTime] = useState(new Date());

  useEffect( () => {
    const Interval = setInterval( () => {
      setTime( new Date() );
    } , 1000);

    return () => {
      clearInterval(Interval);
    };
  } , []);
 
  return <h4>This is the current time : {time.toLocaleDateString()} - { time.toLocaleTimeString()}</h4>
}

export default Time;