import esLocale from "date-fns/locale/es";
import './App.css';
import 'date-fns';
import {format} from "date-fns"
import React, {useEffect, useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,

} from '@material-ui/pickers';
import { TextField, Button} from '@material-ui/core' 
import Info from "./components/Info";

function App() {
    const [selectedDate, handleDateChange] = useState(new Date());
 
    const [valueName, setValueName] = useState("")
    const [valueNum, setValueNum] = useState("")
    const [turnos, setTurnos] = useState(JSON.parse(localStorage.getItem("datosTurnos")) || [])

    const putAllData = () => {
      setTurnos([...turnos, {
        name: valueName, 
        phone: valueNum,
        date: format(selectedDate,'dd/MM/yyyy HH:mm' ),
      }])
     
    }
    
    useEffect(() => {
      localStorage.setItem("datosTurnos", JSON.stringify(turnos));
    }, [turnos])

  return (
    <div className="form-container">
      <MuiPickersUtilsProvider  utils={DateFnsUtils} locale={esLocale}>
        <h1 className="text mb-3">Solicitar turno</h1>
        <form>
          <div className="form-group">
            <TextField
              label="Nombre y Apellido"
              type="text"
              autoComplete="none"
              className="form-control"
              onChange={(e) => setValueName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <TextField
              label="Número de teléfono o celular"
              type="text"
              autoComplete="none"
              className="form-control"
              onChange={(e) => setValueNum(e.target.value)}
            />
          </div>
    
        </form>
        <DateTimePicker
          value={selectedDate}
          disablePast
          onChange={handleDateChange}
          label="Fecha y Hora"
          showTodayButton
          className="d-block"
          format="dd/MM/yyyy HH:mm"
        />
        {/* <Grid container justify="space-between">
          <KeyboardDatePicker
            className="datepickers"
            margin="normal"
            id="date-picker-dialog"
            label="Fecha"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={() => handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            className="datepickers"
            margin="normal"
            id="time-picker"
            label="Hora"
            format="HH:mm"
            value={selectedDate}
            onChange={() => handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          /
      </Grid> */}
      <Button
        variant="contained"
        color="secondary"
        className="mt-4"
        onClick={putAllData}
      >
          Solicitar
      </Button>

      <Info/>
    </MuiPickersUtilsProvider>

    </div>
  
  );
}

export default App;
