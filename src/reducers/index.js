const initialState = {
  xfaderlevel: 0,
  leftPitchLevel: 0,
  rightPitchLevel: 0,
  volume_left: 0,
  delay_left: false,
  reverb_left: false,
  lpf_left: 0,
  hpf_left: 0,
  volume_right: 0,
  delay_right: false,
  reverb_right: false,
  lpf_right: 0,
  hpf_right: 0,
  pan_left: 0,
  pan_right: 0,
  vinyl_art_left: "./Assets/404.jpg",
  vinyl_art_right: "./Assets/404.jpg",
  loop_left: "inactive",
  loop_right: "inactive",
  controls_left: "stop",
  controls_right: "stop",
  isLoadedLeft: false,
  isLoadedRight: false,
  id3Left: [],
  id3Right: [],
  musicOnTheLeft: [],
  musicOnTheRight: [],
  bpmLeft: 0,
  bpmRight: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_FADER_LEVEL":
      return {
        ...state,
        xfaderlevel: action.xfaderlevel
      };

    case "CHANGE_LEFT_PITCH_LEVEL":
      return {
        ...state,
        leftPitchLevel: action.leftPitchLevel
      };

    case "CHANGE_RIGHT_PITCH_LEVEL":
      return {
        ...state,
        rightPitchLevel: action.rightPitchLevel
      };

    case "CHANGE_VOLUME_LEFT":
      return {
        ...state,
        volume_left: action.volume_left
      };

    case "CHANGE_DELAY_LEFT":
      return {
        ...state,
        delay_left: action.delay_left
      };

    case "CHANGE_REVERB_LEFT":
      return {
        ...state,
        reverb_left: action.reverb_left
      };

    case "CHANGE_LPF_LEFT":
      return {
        ...state,
        lpf_left: action.lpf_left
      };

    case "CHANGE_HPF_LEFT":
      return {
        ...state,
        hpf_left: action.hpf_left
      };

    case "CHANGE_VOLUME_RIGHT":
      return {
        ...state,
        volume_right: action.volume_right
      };

    case "CHANGE_DELAY_RIGHT":
      return {
        ...state,
        delay_right: action.delay_right
      };

    case "CHANGE_REVERB_RIGHT":
      return {
        ...state,
        reverb_right: action.reverb_right
      };

    case "CHANGE_LPF_RIGHT":
      return {
        ...state,
        lpf_right: action.lpf_right
      };

    case "CHANGE_HPF_RIGHT":
      return {
        ...state,
        hpf_right: action.hpf_right
      };

    case "CHANGE_PAN_LEFT":
      return {
        ...state,
        pan_left: action.pan_left
      };

    case "CHANGE_PAN_RIGHT":
      return {
        ...state,
        pan_right: action.pan_right
      };

    case "CHANGE_VINYL_POSITION_LEFT":
      return {
        ...state,
        vinyl_left: action.vinyl_left
      };
    
    case "CHANGE_VINYL_POSITION_RIGHT":
      return {
        ...state,
        vinyl_right: action.vinyl_right
    };

    case "CHANGE_VINYL_ARTWORK_LEFT":
      return {
        ...state,
        vinyl_art_left: action.vinyl_art_left
      };
    
    case "CHANGE_VINYL_ARTWORK_RIGHT":
      return {
        ...state,
        vinyl_art_right: action.vinyl_art_right
    };

    case "CHANGE_LOOP_LEFT":
      return {
        ...state,
        loop_left: action.loop_left
    };

    case "CHANGE_LOOP_RIGHT":
      return {
        ...state,
        loop_right: action.loop_right
    };

    case "CHANGE_CONTROLS_LEFT":
      return {
        ...state,
        controls_left: action.controls_left
    };

    case "CHANGE_CONTROLS_RIGHT":
      return {
        ...state,
       controls_right: action.controls_right
    };

    case "MUSIC_LOADED_LEFT":
      return {
        ...state,
        isLoadedLeft: action.isLoadedLeft
    };

    case "MUSIC_LOADED_RIGHT":
      return {
        ...state,
        isLoadedRight: action.isLoadedRight
    };

    case "GET_ID3_LEFT":
      return {
        ...state,
        id3Left: action.id3Left
    };

    case "GET_ID3_RIGHT":
      return {
        ...state,
        id3Right: action.id3Right
    };

    case "SET_MUSIC_LEFT":
      return {
        ...state,
        musicOnTheLeft: action.musicOnTheLeft
    };

    case "SET_MUSIC_RIGHT":
      return {
        ...state,
        musicOnTheRight: action.musicOnTheRight
    };

    case "SET_LEFT_BPM":
      return {
        ...state,
        bpmLeft: action.bpmLeft
    };

    case "SET_RIGHT_BPM":
      return {
        ...state,
        bpmRight: action.bpmRight
    };

    case "SET_INTERVAL_LEFT":
      return {
        ...state,
        intervalLeft: action.intervalLeft
    };

    default:
      return state;
  }
};

export default reducer;