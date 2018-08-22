import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { reducer } from './reducer'
import MachineContainer from './MachineContainer';
import './index.css'

export const initialState = {
  bank1: [
    {id: "heater1",
     description: "Heater 1",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {id: "heater2",
     description: "Heater 2",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {id: "dscOh",
    description: "Dsc Oh",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {id: "heater3",
     description: "Heater 3",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {id: "heater4",
     description: "Heater 4",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {id: "heater6",
     description: "Heater 6",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {id: "kickAndHat",
     description: "Kick and Hat",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {id: "rp4Kick1",
     description: "Rp4 Kick 1",
     link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {id: "cevH2",
     description: "Cev H2",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ],
  bank2: [
    {id: "chord1",
     description: "Chord 1",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {id: "chord2",
     description: "Chord 2",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {id: "chord3",
     description: "Chord 3",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {id: "giveUsALight",
     description: "Give us a light",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {id: "dryOh",
     description: "Dry Oh",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {id: "bldH1",
     description: "Bld H1",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {id: "punchyKick",
     description: "Punchy Kick",
     link: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {id: "sideStick1",
     description: "Side Stick 1",
     link: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {id: "brkSnr",
     description: "Brk Snr",
     link: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
  ],
  letters: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
  playedAudio: "",
  bankChosen: "bank2",
  bank: false
};

const store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

ReactDOM.render(
  <Provider store={store}>
    <MachineContainer />
  </Provider>,
  document.getElementById("root")
);
