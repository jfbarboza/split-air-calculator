import './App.css';
import { useState } from 'react';
import { 
  Container,
  Slider, 
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  Button,
} from '@mui/material';
import { calculateSplit } from './utils/split-calculator';


function App() {
  const [roomLength, setRoomLength] = useState(0);
  const [roomWidth, setRoomWidth] = useState(0);
  const [ceilingHeight, setCeilingHeight] = useState(0);
  const [sunlight, setsunlight] = useState('shaded');
  const [splitSize, setSplitSize] = useState(0);
  // const [insulation, setInsulation] = useState(false);
  // const [people, setPeople] = useState(0);
  return (
    <div className="App">
      <Container maxWidth="sm">
      <h1><strong>What Size Air Conditioner</strong> Do I Need?</h1>
      <p>If you&apos;re looking to work out the correct size of your ducted or split system air conditioner, you can use our room sizing calculator below as a guide:</p>
      <div className="calculator">
        <div className="room-size">
          <p><strong>Room length: </strong> <span className='highlight'>{roomLength} m</span></p>
          <Slider value={roomLength} onChange={ (e, value) => setRoomLength(value) } min={0} max={50} step={0.1} />
          <p><strong>Room width: </strong> <span className='highlight'>{roomWidth} m</span></p>
          <Slider value={roomWidth} onChange={ (e, value) => setRoomWidth(value) } min={0} max={50} step={0.1} />
        </div>
        <div className="ceiling-height">
          <p><strong>Ceiling height: </strong> <span className='highlight'>{ceilingHeight} m</span></p>
          <Slider value={ceilingHeight} onChange={ (e, value) => setCeilingHeight(value) } min={0} max={10} step={0.1} />
        </div> 
        <div className="sunlight">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sunlight Exposure</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={sunlight}
            name="radio-buttons-group"
            onChange={ (e) => setsunlight(e.target.value) }
          >
            <FormControlLabel value="shaded" control={<Radio />} label="Shaded" />
            <FormControlLabel value="sunny" control={<Radio />} label="Sunny" />
          </RadioGroup>
        </FormControl>
        </div>
        <Button 
          variant="contained"
          onClick={ ()=>setSplitSize(calculateSplit(roomLength, roomWidth, ceilingHeight, sunlight)) }>Calculate</Button>
        <div className="split-size">
          <p><strong>Split size: </strong> <span className='highlight'>{splitSize} kW</span></p>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default App;
