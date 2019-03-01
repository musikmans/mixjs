export function changeLevel(xfaderlevel) {
    return { type: "CHANGE_FADER_LEVEL", xfaderlevel }
};

export function changeLeftPitchLevel(leftPitchLevel) {
    return { type: "CHANGE_LEFT_PITCH_LEVEL", leftPitchLevel }
};

export function changeRightPitchLevel(rightPitchLevel) {
    return { type: "CHANGE_RIGHT_PITCH_LEVEL", rightPitchLevel }
};

export function change_delay_left(delay_left) {
    return { type: "CHANGE_DELAY_LEFT", delay_left }
};

export function change_reverb_left(reverb_left) {
    return { type: "CHANGE_REVERB_LEFT", reverb_left }
};

export function change_lpf_left(lpf_left) {
    return { type: "CHANGE_LPF_LEFT", lpf_left }
};

export function change_hpf_left(hpf_left) {
    return { type: "CHANGE_HPF_LEFT", hpf_left }
};

export function change_volume_left(volume_left) {
    return { type: "CHANGE_VOLUME_LEFT", volume_left }
};

export function change_delay_right(delay_right) {
    return { type: "CHANGE_DELAY_RIGHT", delay_right }
};

export function change_reverb_right(reverb_right) {
    return { type: "CHANGE_REVERB_RIGHT", reverb_right }
};

export function change_lpf_right(lpf_right) {
    return { type: "CHANGE_LPF_RIGHT", lpf_right }
};

export function change_hpf_right(hpf_right) {
    return { type: "CHANGE_HPF_RIGHT", hpf_right }
};

export function change_volume_right(volume_right) {
    return { type: "CHANGE_VOLUME_RIGHT", volume_right }
};

export function change_pan_left(pan_left) {
    return { type: "CHANGE_PAN_LEFT", pan_left }
};

export function change_pan_right(pan_right) {
    return { type: "CHANGE_PAN_RIGHT", pan_right }
};

export function change_vinyl_left(vinyl_left) {
    return { type: "CHANGE_VINYL_POSITION_LEFT", vinyl_left }
};

export function change_vinyl_right(vinyl_right) {
    return { type: "CHANGE_VINYL_POSITION_RIGHT", vinyl_right }
};

export function change_vinyl_art_left(vinyl_art_left) {
    return { type: "CHANGE_VINYL_ARTWORK_LEFT", vinyl_art_left }
};

export function change_vinyl_art_right(vinyl_art_right) {
    return { type: "CHANGE_VINYL_ARTWORK_RIGHT", vinyl_art_right }
};

export function change_loop_left(loop_left) {
    return { type: "CHANGE_LOOP_LEFT", loop_left }
};

export function change_loop_right(loop_right) {
    return { type: "CHANGE_LOOP_RIGHT", loop_right }
};

export function change_controls_left(controls_left) {
    return { type: "CHANGE_CONTROLS_LEFT", controls_left }
};

export function change_controls_right(controls_right) {
    return { type: "CHANGE_CONTROLS_RIGHT", controls_right }
};

export function load_music_left(isLoadedLeft) {
    return { type: "MUSIC_LOADED_LEFT", isLoadedLeft }
};

export function load_music_right(isLoadedRight) {
    return { type: "MUSIC_LOADED_RIGHT", isLoadedRight }
};

export function store_music_data_left(id3Left) {
    return { type: "GET_ID3_LEFT", id3Left }
};

export function store_music_data_right(id3Right) {
    return { type: "GET_ID3_RIGHT", id3Right }
};

export function wave_music_left(musicOnTheLeft) {
    return { type: "SET_MUSIC_LEFT", musicOnTheLeft }
};

export function wave_music_right(musicOnTheRight) {
    return { type: "SET_MUSIC_RIGHT", musicOnTheRight }
};

export function set_bpm_left(bpmLeft) {
    return { type: "SET_LEFT_BPM", bpmLeft }
};

export function set_bpm_right(bpmRight) {
    return { type: "SET_RIGHT_BPM", bpmRight }
};

export function the_left_interval(intervalLeft) {
    return { type: "SET_INTERVAL_LEFT", intervalLeft }
};
