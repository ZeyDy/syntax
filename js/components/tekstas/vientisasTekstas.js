import { paskutineRaide } from "./paskutineRaide";
import { pirmaRaide } from "./pirmaRaide";
import { vidurineRaide } from "./vidurineRaide";

function vientisasTekstas(textList) {
    let answer = '';
    for (let i=0; i<textList; i++){
        const text = textList[i];
        answer += pirmaRaide(text);
        answer += vidurineRaide(text);
        answer += paskutineRaide(text);
    }
    return answer;
}
export {vientisasTekstas}