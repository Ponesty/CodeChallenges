const dnaStrand = dna => {
    let comp = [];
    for(let i=0;i<dna.length;i++){
        switch (dna[i]) {
            case 'A':
                comp.push('T');
                break;
            case 'T':
                comp.push('A');
                break;
            case 'G':
                comp.push('C');
                break;
            case 'C':
                comp.push('G');
                break;
        }
    }
    comp = comp.join('');
    return comp;
}

console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));