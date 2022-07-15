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
        // 330 807.5px
        // 1 807.5/330
        // 
        level1: [
            { file: "1_1", position: [10, 50] },
            { file: "1_2", position: [90, 280] },
            { file: "1_3", position: [312, 530] },
            { file: "1_4", position: [400, 100] },
            { file: "1_5", position: [328, 655] },
            { file: "1_6", position: [415, 245] },
        ],
        level2: [
            { file: "2_1", position: [100, 200] },
            { file: "2_2", position: [100, 200] },
            { file: "2_3", position: [100, 200] },
            { file: "2_4", position: [100, 200] },
            { file: "2_5", position: [100, 200] },
            { file: "2_6", position: [100, 200] },
        ],
    },
    removeTargetItem: (level, toRemove) => set(state => ({
        targetItems: {
            ...state.targetItems,
            [`level${level}`]: state.targetItems[`level${level}`].filter(item => item.file != toRemove)
        }

    }))
}));

mountStoreDevtool('Store', useStore);

export default useStore;
