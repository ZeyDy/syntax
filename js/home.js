// IMPORT
import { suma } from './components/algebra/suma.js';
import { dalyba } from './components/algebra/dalyba.js';
import { kvadratas } from './components/algebra/kvadratas.js';
import { skirtumas } from './components/algebra/skirtumas.js';
import { sandauga } from './components/algebra/sandauga.js';
import { vidurkis } from './vidurkis.js';
import { vientisasTekstas } from './components/tekstas/vientisasTekstas.js';
import { pirmaRaide } from './components/tekstas/pirmaRaide.js';
import { vidurineRaide } from './components/tekstas/vidurineRaide.js';
import { paskutineRaide } from './components/tekstas/paskutineRaide.js';
// EXECUTION
const x = suma(8, 5);
console.log(x);
const a = kvadratas(6);
console.log(a);
const b = skirtumas(9, 3);
console.log(b);
const c = vidurkis([10, 4, 6, 2]);
console.log(c);


const s1 = vientisasTekstas(['labas', 'rytas']);
console.log(s1, '->', 'lbsrts');