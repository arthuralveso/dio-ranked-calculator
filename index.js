function rankedCalculate(wins, loses) {
    const balance = wins - loses
    let rank;

    if (balance <= 10) {
        rank =  'Ferro'
    } else if (balance > 10 && balance <= 20) {
        rank =  'Bronze'
    } else if (balance > 20 && balance <= 50) {
        rank =  'Prata'
    } else if (balance > 50 && balance <= 80) {
        rank =  'Ouro'
    } else if (balance > 80 && balance <= 90) {
        rank =  'Diamante'
    } else if (balance > 90 && balance <= 100) {
        rank =  'Lendário'
    } else if (balance > 100) {
        rank =  'Imortal'
    }

    return `O Herói tem saldo de ${balance} está no nivel de ${rank}`
}