const initialState = {
  xfaderlevel: 0,
  leftPitchLevel: 0,
  rightPitchLevel: 0,
  volume_left: 0,
  delay_left: 0,
  reverb_left: 0,
  lpf_left: 0,
  hpf_left: 0,
  volume_right: 0,
  delay_right: 0,
  reverb_right: 0,
  lpf_right: 0,
  hpf_right: 0,
  pan_left: 0,
  pan_right: 0,
  vinyl_art_left: "https://www.hrrshop.de/bilder/produkte/normal/IRON-MAIDEN-The-Book-of-Souls-Live-Chapter-3LP.jpg",
  vinyl_art_right: "https://i.ebayimg.com/images/g/0NUAAOSwVZ5bzGp6/s-l640.png"
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

    default:
      return state;
  }
};

export default reducer;