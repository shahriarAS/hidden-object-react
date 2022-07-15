// store/index.js
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

const useStore = create(set => ({
    score: 0,
    addScore: () => set(state => ({
        score: state.score + 1
    })),
    level: 1,
    addLevel: () => set(state => ({
        level: state.level + 1
    })),
    time: [0, 0],
    setTime: (time) => set(state => ({
        time: time
    })),
    isSound: true,
    toggleSound: () => set(state => ({
        isSound: !state.isSound
    })),
    isMusic: true,
    toggleMusic: () => set(state => ({
        isMusic: !state.isMusic
    })),
    isFullScreen: true,
    toggleFullScreen: () => set(state => ({
        isFullScreen: !state.isFullScreen
    })),
    targetItems: {
        level1: [
            { file: "1_1", position: [54, 40] },
            { file: "1_2", position: [19.5, 18.5] },
            { file: "1_3", position: [50, 8] },
            { file: "1_4", position: [66, 8] },
            { file: "1_5", position: [54, 65] },
            { file: "1_6", position: [69, 30] },
        ],
        level2: [
            { file: "2_1", position: [10, 50] },
            { file: "2_2", position: [55, 4] },
            { file: "2_3", position: [50, 44] },
            { file: "2_4", position: [15, 34] },
            { file: "2_5", position: [77, 24] },
            { file: "2_6", position: [79, 42] },
        ],
    },
    removeTargetItem: (level, toRemove) => set(state => ({
        targetItems: {
            ...state.targetItems,
            [`level${level}`]: state.targetItems[`level${level}`].filter(item => item.file != toRemove)
        }

    })),
    gameOver: false,
    setGameOver: (val) => set(state => ({
        gameOver: val
    })),
    gamePause: false,
    setGamePause: (val) => set(state => ({
        gamePause: val
    })),
    gameWon: false,
    setGameWon: (val) => set(state => ({
        gameWon: val
    })),
    reduceTime: false,
    setReduceTime: (val) => set(state => ({
        reduceTime: val
    })),
    resetState: () => set(state => ({
        score: 0,
        level: 1,
        time: [0, 0], 
        targetItems: {
            level1: [
                { file: "1_1", position: [54, 40] },
                { file: "1_2", position: [19.5, 18.5] },
                { file: "1_3", position: [50, 8] },
                { file: "1_4", position: [66, 8] },
                { file: "1_5", position: [54, 65] },
                { file: "1_6", position: [69, 30] },
            ],
            level2: [
                { file: "2_1", position: [10, 50] },
                { file: "2_2", position: [55, 4] },
                { file: "2_3", position: [50, 44] },
                { file: "2_4", position: [15, 34] },
                { file: "2_5", position: [77, 24] },
                { file: "2_6", position: [79, 42] },
            ],
        },
        gameOver: false,
        gamePause: false,
        gameWon: false,
        reduceTime: false        
    }))
}));

mountStoreDevtool('Store', useStore);

export default useStore;
