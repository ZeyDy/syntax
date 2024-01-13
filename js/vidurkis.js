function vidurkis(list) {
    const skaiciuKiekis = list.length;
    let skaiciuSuma = 0;
    for (let i=0; i<skaiciuKiekis; i++) {
        const skaicius = list[i];
        skaiciuSuma += skaicius;
    }
    return skaiciuSuma / skaiciuKiekis;
}
export {vidurkis}