const message = [
    'Oscar', 
    'Maria',
    'Roberto',
    'Jorge',
    'Carlos',
    'Juan',
    'Ana',
    'Laura',
    'Diego',
    'John',
    'Frederyk',
    'John Smith'
]

const randonMsg = () => {
    const valor = Math.floor(Math.random() * message.length)
    console.log(message[valor])
}

module.exports = { randonMsg };