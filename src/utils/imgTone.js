import Hun from '../assets/Tones/magnetico_white.png';
import Ka from '../assets/Tones/lunar_white.png';
import Ox from '../assets/Tones/tono_cosmico_black.png';
import Kan from '../assets/Tones/autoexistente_white.png';
import Ho from '../assets/Tones/tono_cosmico_black.png';
import Uak from '../assets/Tones/tono_cosmico_black.png';
import Uuk from '../assets/Tones/tono_cosmico_black.png';
import Uaxak from '../assets/Tones/tono_cosmico_black.png';
import Bolon from '../assets/Tones/tono_cosmico_black.png';
import Lahun from '../assets/Tones/tono_cosmico_black.png';
import Buluk from '../assets/Tones/tono_cosmico_black.png';
import Lahak from '../assets/Tones/cristal_white.png';
import OxLahun from '../assets/Tones/cosmico_white.png';


export default function imgTone(tone){
    switch(tone){
        case 1:
            return Hun;
        case 2:
            return Ka;
        case 3:
            return Ox;
        case 4:
            return Kan;
        case 5:
            return Ho;
        case 6:
            return Uak;
        case 7:
            return Uuk;
        case 8:
            return Uaxak;
        case 9:
            return Bolon;
        case 10:
            return Lahun;
        case 11:
            return Buluk;
        case 12:
            return Lahak;
        case 13:
            return OxLahun;
        default:
            return 'nothing'    

    }

}