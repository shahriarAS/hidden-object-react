const generateRandom = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export default generateRandom