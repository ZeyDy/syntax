function vidurineRaide(text) {
    if (text === '') {
        return '';
    }
    const index = Math.ceil(text.lenght / 2 - 1);
    return text[index];
}
export {vidurineRaide}