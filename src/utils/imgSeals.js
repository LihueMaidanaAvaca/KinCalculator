import NuEtznab from '../assets/NuEtznab.png' ;
import NuAhau from '../assets/NuAhau.png';


export default function imgSeals(seal){
    switch(seal){
        case 0:
            return NuAhau;
        case 18:
            return NuEtznab;
        default:
            return 'nothing'    

    }

}