const generatePosition = () => {
    return {
        x: Math.random() * (window.innerWidth - 100) + 10,
        y: Math.random() * (window.innerHeight - (200)) + 58,
    }
}

export default generatePosition