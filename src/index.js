import React from 'react';
import ReactDOM from 'react-dom';
import sound0 from "./assets/00.wav"; 
import sound1 from "./assets/01.wav";
import sound2 from "./assets/02.wav";
import sound3 from "./assets/03.wav";
import sound4 from "./assets/04.wav";
import sound5 from "./assets/05.wav";
import sound6 from "./assets/06.wav";
import sound7 from "./assets/07.wav";
import sound8 from "./assets/08.wav";
import sound9 from "./assets/09.wav";
import sound10 from "./assets/10.wav";
import sound11 from "./assets/11.wav";
import './index.css';
function mod(n) {
    return ((n % 12) + 12) % 12;
}

function num_to_tone(i){
    switch(mod(i)){
        case 0:
            return 'C';
        case 1:
            return 'C#';
        case 2:
            return 'D';
        case 3:
            return 'D#';
        case 4:
            return 'E';
        case 5:
            return 'F';
        case 6:
            return 'F#';
        case 7:
            return 'G';
        case 8:
            return 'G#';
        case 9:
            return 'A';
        case 10:
            return 'A#';
        case 11:
            return 'B';
        default:
            console.log('?');
            return undefined;
    }
}
  
class Grids extends React.Component {
    handle_Click(i){
        console.log("H")
        const audio = new Audio(this.tone_to_url(mod(i)));
        audio.play();
    }

    tone_to_url(i){
        switch (mod(i)) {
            case 0:
                return sound0;
            case 1:
                return sound1;
            case 2:
                return sound2;
            case 3:
                return sound3;
            case 4:
                return sound4;
            case 5:
                return sound5;
            case 6:
                return sound6;
            case 7:
                return sound7;
            case 8:
                return sound8; 
            case 9:
                return sound9;
            case 10:
                return sound10;
            case 11:
                return sound11;
            default:
                console.log('?');
                return undefined;
        }
    }

    renderHexagon(i){
        return (
            <div 
            className="hex" 
            onClick={() => this.handle_Click(i)}
            >
                <div className='textbox'>
                {num_to_tone(i)}
                </div>
            </div>
        )
    }
    renderHexagonRow(i){
        var hexes = [];
        for (var j = 0 ; j< 6; j++){
            hexes.push(this.renderHexagon(mod(i+j)));
        }
        return (
            <div className="container">
                {hexes}
            </div>
        )
    }
    renderHexagonRow_margin(i){
        var hexes = [];
        for (var j = 0 ; j< 6; j++){
            hexes.push(this.renderHexagon(mod(i+j)));
        }
        return (
            <div className="container-margin">
                {hexes}
            </div>
        )
    }
    renderTwoRows(i){
        return(
        <div>
            {this.renderHexagonRow(mod(i))}
            {this.renderHexagonRow_margin(mod(i+9))}
        </div>
        )
    }

    render() {
        var rows = [];
        for (var i = 0 ; i< 24; i++){
            rows.push(this.renderTwoRows(mod(5*i)));
        }
        return (
        <div className="main">
            {rows}
        </div>

      );
    }
}

class Harmonizer extends React.Component {
    render() {
        return (
        <div>
            <div className="Grids">
                <Grids />
            </div>
        </div>
        );
    }
}
  
ReactDOM.render(
<Harmonizer />,
document.getElementById('root')
);
  
  