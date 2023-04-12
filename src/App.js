import { useEffect, useState } from 'react';
import './index.css';
import Inputs from './components/Inputs';
import Temperature from './components/Temperature';
import Time from './components/Time';
import getFormattedWeatherData from './services/weather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const [query, setQuery] = useState({q: 'berlin'})
    const [units, setUnits] = useState('metric')
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        const fetchWeather = async() => {
            const message = query.q ? query.q : 'current location';
            toast.info('Fetching weather for ' + message);
            await getFormattedWeatherData({...query, units}).then((data) => {
                toast.success(
                    `Successfully fetched weather for ` + (data.name) + ' ' + (data.country)
                );
                

                setWeather(data);
            });
          }
          fetchWeather();
    }, [query, units])

  return (
<div className='container mt-2'>
    <div className='row justify-content-center align-center'>
        <div className='col-md-4 '>
            <div className={`card mx-auto my-auto max-w-screen-ms mt-4 pb-5 py-5 px-10  bg-no-repeat w-fit bg-cover h-fit shadow-xl shadow-gray-300 bg-[url(https://source.unsplash.com/600x900/?clouds)]`}>
             <div className='card-img-overlay'>
                
                <Inputs setQuery={setQuery} units setUnits={setUnits}/>

                {weather && (
                 <div className='bg-slate-800 bg-opacity-40 py-2 rounded'>
                  <Time weather={weather}/>
                  <hr/>
                  <Temperature weather={weather}/>
                 </div>
                )}
                <br/>
                <ToastContainer autoclose={500} theme='colored' newestOnTop={true}/>

             </div>
            </div>

        </div>
          
    </div>
</div>
    
  );
}

export default App;
