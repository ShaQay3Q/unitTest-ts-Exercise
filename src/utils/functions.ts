type User = {
    firstName: string
    lastName: string
    permittedToDrink: boolean
    age: number
}


// input realtistic age (not under 0 or above 120) => throw an Error (you're to young or too old)
// No numbers in the name field => throw Error (put a bit more effort in)
export function createUser(name: string, age: number): User  {
    const nameArr = name.trim().split(" ")
    
    if(age < 0 || age > 120) throw new Error("Inacceptable age entry")
    
    if(nameArr.length !== 2) throw new Error("Incorrect name format")        

    return {
        firstName: nameArr[0],
        lastName: nameArr[1],
        permittedToDrink: age >= 18,
        age: age
    }
}