import { useEffect, useState } from 'react';
import './Home.css';
import { commonGet } from '../../methods';
import { Autocomplete, TextField, Button, Paper, Typography } from '@mui/material';
import { debounce } from 'lodash';
import { toast } from 'react-toastify';
import FlightTable from '../../components/Table/FlightTable';

const Home = () => {
  const [originCities, setOriginCities] = useState([]);
  const [destinationCities, setDestinationCities] = useState([]);
  const [origin, setOrigin] = useState<any>();
  const [destination, setDestination] = useState<any>();
  const [originInput, setOriginInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');
  const [date,setDate]=useState<string|undefined>();
  const [flightData,setFlightData]=useState([]);
  useEffect(() => {
    const fetchOriginCities = debounce(async (searchStr) => {
      try {
        const response = await commonGet('/cities', { searchStr } )as {status:number,data:any};;
        if (response.status===200) {
          setOriginCities(response.data); // Assuming the API response is an array of city objects
        }
      } catch (error) {
        console.error('Error fetching origin cities:', error);
      }
    }, 500);

    fetchOriginCities(originInput);

    return () => {
      fetchOriginCities.cancel();
    };
  }, [originInput]);

  useEffect(() => {
    const fetchDestinationCities = debounce(async (searchStr) => {
      try {
        const response = await commonGet('/cities', { searchStr }) as {status:number,data:any};
        if (response.status===200) {
          setDestinationCities(response.data); // Assuming the API response is an array of city objects
        }
      } catch (error) {
        console.error('Error fetching destination cities:', error);
      }
    }, 500);

    fetchDestinationCities(destinationInput);

    return () => {
      fetchDestinationCities.cancel();
    };
  }, [destinationInput]);

  const handleSubmit = async () => {
    if(origin && destination && date){
      const response = await commonGet('/flight', { from:origin.iataCode,to:destination.iataCode,date }) as {status:number,data:any};
      if (response.status===200) {
       setFlightData(response.data)
      }
    }else{
      toast("Please fill all the mandatory fields",{type:"error"});
      return
    }
  };

  return (
    <div className="homepage-container">
      <Paper elevation={3} className="form-container">
      <Typography variant="h4" align="center" className="signup-title">
            Enter Flight Details
          </Typography>
        <Autocomplete
          options={originCities}
          getOptionLabel={(city) => city?.name}
          inputValue={originInput}
          value={origin}
          freeSolo
          onInputChange={(event:React.SyntheticEvent<Element|Event>, newValue) =>{event; return  setOriginInput(newValue)}}
          onChange={(event:React.SyntheticEvent<Element|Event>, newValue) =>{event; return  setOrigin(newValue)}}
          renderInput={(params) => (
            <TextField {...params} label="Select origin city" variant="outlined" />
          )}
        />
        <Autocomplete
          options={destinationCities}
          getOptionLabel={(city) => city?.name}
          inputValue={destinationInput}
          freeSolo
          value={destination}
          onChange={(event:React.SyntheticEvent<Element|Event>, newValue) => {event; return setDestination(newValue)}}
          onInputChange={(event:React.SyntheticEvent<Element|Event>, newValue) => {event; return setDestinationInput(newValue)}}
          renderInput={(params) => (
            <TextField {...params} label="Select destination city" variant="outlined" />
          )}
        />
        <TextField
          variant="outlined"
          type="date"
          className="date-input"
          fullWidth
          onChange={(e)=>setDate(e.target.value)}
        />
       
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          className="submit-button"
        >
          Submit
        </Button>
      </Paper>
     { flightData.length ? <FlightTable  flights={flightData}/>:null}
    </div>
  );
};

export default Home;
