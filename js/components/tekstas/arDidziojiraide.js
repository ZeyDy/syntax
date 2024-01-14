/*
@param {string} taxt -> tekstas
@param {number} position -> simbolio pozicija, pradedant nuo 1 (zmoniu kalba)
@returns
*/


function arDidziojiraide(text, position) {
    const letter = text[position - 1];
    return letter === letter.toUpeerCase();
}
export {arDidziojiraide}