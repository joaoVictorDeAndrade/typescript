function arredondar(value: string): string;
function arredondar(value: number): number;
function arredondar(value: string | number) {
    if (typeof value === 'number') return Math.ceil(value)

    return String(Math.ceil(Number(value)))
}

console.log(typeof arredondar(2.32142))
console.log(typeof arredondar('10.23'))