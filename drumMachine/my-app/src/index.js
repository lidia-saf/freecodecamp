import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { reducer } from './reducer'
import './index.css'

export const initialState = {
  bank1: [
    {"id": "Heater 1",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {"id": "Heater 2",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {"id": "Dsc Oh",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {"id": "Heater 3",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {"id": "Heater 4",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {"id": "Heater 6",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {"id": "Kick and Hat",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {"id": "Rp4 Kick 1",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {"id": "Cev H2",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ],
  bank2: [
    {"id": "Chord 1",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {"id": "Chord 2",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {"id": "Chord 3",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {"id": "Give us a light",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {"id": "Dry Oh",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {"id": "Bld H1",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {"id": "Punchy Kick",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {"id": "Side Stick 1",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {"id": "Brk Snr",
     "link": "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
  ]
};

const store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
