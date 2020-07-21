
const apis = {
    fetchCounter: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: { step: 2 } })
            }, 1000)
        }) 
    }
}

export default apis