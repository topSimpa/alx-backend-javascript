function calculateNumber(type, a, b) {
    if (type === 'SUM') {
        return (Math.round(a) + Math.round(b))
    } else if (type === 'SUBTRACT') {
        return (Math.round(a) - Math.round(b))
    } else if (type === 'DIVIDE') {
        const res = (Math.round(a) / Math.round(b))
        if (res === Infinity)
            return ('Error')
        return (res)
    }
}

module.exports = calculateNumber
