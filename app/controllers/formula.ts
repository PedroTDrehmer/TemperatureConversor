export function Formula(type: string, temperature: number) {

    if (type === 'celsius') {
        return (((temperature - 32) / 9) * 5);

    } else {
        return ((temperature / 5) * 9) + 32;
    }
}