import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";
import React from 'react';
import { api } from "../lib/axios";


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


interface props {
  idade?: number,
  subtipo?: number,
  receptorDeEstrogenio?: number,
  receptorDeProgesterona?: number,
  ki67?: number,
  estadio?: number,
  tnmT?: number,
  tnmN?: number,
}

export function Forms(props: props){

  const [idade, setIdade] = useState<number>()
  const [subtipo, setSubtipo] = useState<number>()
  const [receptorDeEstrogenio, setReceptorDeEstrogenio] = useState<number>()
  const [receptorDeProgesterona, setReceptorDeProgesterona] = useState<number>()
  const [ki67, setKi67] = useState<number>()
  const [estadio, setEstadio] = useState<number>()
  const [tnmT, setTnmT] = useState<number>()
  const [tnmN, setTnmN] = useState<number>()

  const dados =  {
    idade_no_primeiro_diagnostico: idade,
    subtipo_tumoral: subtipo,
    receptor_de_estrogenio: receptorDeEstrogenio,
    receptor_de_progesterona: receptorDeProgesterona,
    ki67_percentage: ki67,
    estadio_clinico: estadio,
    classificacao_tnm_clinico_t: tnmT,
    classificacao_tnm_clinico_n: tnmN,
  }


  function handleSetIdade(event: Event, value: number | number[], activeThumb: number) {
    const changeEvent = event as unknown as ChangeEvent<HTMLInputElement>
    const idade = changeEvent.target.value ?? 0;

    const novaIdade = isNaN(Number(idade)) ? undefined : Number(idade);

    setIdade(novaIdade as number);
  }

  function handleSetSubtipo(event: SelectChangeEvent<number>) {
    const subtipo = event.target.value;

    const novoSubtipo = isNaN(Number(subtipo)) ? undefined : Number(subtipo);

    setSubtipo(novoSubtipo);
  }

  function handleSetReceptorDeEstrogenio(event: SelectChangeEvent<number>) {
    const receptorDeEstrogenio = event.target.value;

    const novoReceptorDeEstrogenio = isNaN(Number(receptorDeEstrogenio)) ? undefined : Number(receptorDeEstrogenio);

    setReceptorDeEstrogenio(novoReceptorDeEstrogenio);
  }

  function handleSetReceptorDeProgesterona(event: SelectChangeEvent<number>) {
    const receptorDeProgesterona = event.target.value;

    const novoReceptorDeProgesterona = isNaN(Number(receptorDeProgesterona)) ? undefined : Number(receptorDeProgesterona);

    setReceptorDeProgesterona(novoReceptorDeProgesterona);
  }

  function handleSetKi67(event: ChangeEvent<HTMLInputElement>) {
    const ki67 = event.target.value;

    const novoKi67 = isNaN(Number(ki67)) ? undefined : Number(ki67);

    setKi67(novoKi67);
  }

  function handleSetEstadio(event: SelectChangeEvent<number>) {
    const estadio = event.target.value;

    const novoEstadio = isNaN(Number(estadio)) ? undefined : Number(estadio);

    setEstadio(novoEstadio);
  }

  function handleSetTnmT(event: SelectChangeEvent<number>) {
    const tnmT = event.target.value;

    const novoTnmT = isNaN(Number(tnmT)) ? undefined : Number(tnmT);

    setTnmT(novoTnmT);
  }

  function handleSetTnmN(event: SelectChangeEvent<number>) {
    const tnmN = event.target.value;

    const novoTnmN = isNaN(Number(tnmN)) ? undefined : Number(tnmN);

    setTnmN(novoTnmN);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const json = JSON.stringify(dados);
    api.post('/predict', json, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        const resposta = response.data
        console.log(resposta);
        alert(`O regime de tratamento mais indicado é o ${resposta.resultado}`)
      })
      .catch(error => {
        console.error(error);
      });
  }
  return(
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full flex flex-col mt-6">
            <Box className="max-w-240" sx={{ width: 300 }}>
                <label className="font-semibold text-lg text-zinc-600" id="demo-simple-select-label">Idade do paciente</label>
                <Stack className="mt-2" spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                  <label>0</label>
                  <Slider color="secondary" valueLabelDisplay="auto" aria-label="Volume" value={idade} onChange={handleSetIdade} />
                  <label>100</label>
                </Stack>
            </Box>

            <Box className="mb-4" sx={{ minWidth: 120 }}>
              <FormControl className="mt-4" fullWidth>
                <InputLabel id="demo-simple-select-label">Subtipo Tumoral</InputLabel>
                <Select className="font-Inter text-white"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subtipo}
                  label="Subtipo"
                  onChange={handleSetSubtipo}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className="mb-4" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Receptor de estrogenio</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={receptorDeEstrogenio}
                  label="receptorDeEstrogenio"
                  onChange={handleSetReceptorDeEstrogenio}
                >
                  <MenuItem value={0}>Negativo</MenuItem>
                  <MenuItem value={1}>Positivo</MenuItem>
                  <MenuItem value={2}>Inconclusivo</MenuItem>
                  <MenuItem value={3}>Não realizado</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className="mb-4" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Receptor de progesterona</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={receptorDeProgesterona}
                  label="receptorDeProgesterona"
                  onChange={handleSetReceptorDeProgesterona}
                >
                  <MenuItem value={0}>Negativo</MenuItem>
                  <MenuItem value={1}>Positivo</MenuItem>
                  <MenuItem value={2}>Inconclusivo</MenuItem>
                  <MenuItem value={3}>Não Realizado</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <label htmlFor="title" className="font-semibold leading-tight text-zinc-600">
              Valor do KI67 do paciente
            </label>
            <input 
              type="number"
              min="0"
              max="100"
              id="title"
              placeholder="KI67%"
              className="p-4 mt-3 outline-1 ring-1 ring-outline bg-transparent rounded-sm text-zinc-600 placeholder:text-cinza hover:ring-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-600"
              autoFocus
              value={ki67}
              onChange={handleSetKi67}
            />

            <Box className="mb-4 mt-6" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Estadio clínico do paciente</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={estadio}
                  label="estadio"
                  onChange={handleSetEstadio}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>I</MenuItem>
                  <MenuItem value={2}>II</MenuItem>
                  <MenuItem value={3}>III</MenuItem>
                  <MenuItem value={4}>IV</MenuItem>
                  <MenuItem value={5}>Y: NA</MenuItem>
                  <MenuItem value={6}>X: não foi possível determinar</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className="mb-4" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tnm-T do paciente</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tnmT}
                  label="tnmT"
                  onChange={handleSetTnmT}
                >
                  <MenuItem value={0}>CDIS</MenuItem>
                  <MenuItem value={0}>IS</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className="mb-4" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tnm-N do paciente</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tnmN}
                  label="tnmN"
                  onChange={handleSetTnmN}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <button 
              type="submit"
              className="w-56 ml-custom h-16 mt-6 rounded-lg p-4 flex items-center gap-3 justify-center text-white font-bold bg-pink-500 hover:bg-pink-400 transition-colors"
            >
              Fazer predição
            </button>
      
      </form>
    </div>
  )
}