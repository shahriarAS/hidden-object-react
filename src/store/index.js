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
        level1: ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6"],
        level2: ["2_1", "2_2", "2_3", "2_4", "2_5", "2_6"],
    },
    removeTargetItem: (level, toRemove) => set(state => ({
        targetItems: {
            ...state.targetItems,
            [`level${level}`]: state.targetItems[`level${level}`].filter(item => item != toRemove)
        }

    }))
    // addStudent: student =>
    //     set(state => ({
    //         students: [
    //             {
    //                 name: student.name,
    //                 id: Math.random() * 100 + '',
    //                 section: student.section
    //             },
    //             ...state.students
    //         ]
    //     })),
    // removeStudent: id =>
    //     set(state => ({
    //         currentStudent: state.students.filter(student => student.id !== id)
    //     })),
    // updateStudent: student =>
    //     set(state => ({
    //         students: state.students.map(item => {
    //             if (item.id === student.id) {
    //                 return {
    //                     ...item,
    //                     name: student.name,
    //                     section: student.section
    //                 };
    //             } else {
    //                 return item;
    //             }
    //         })
    //     }))
}));

mountStoreDevtool('Store', useStore);

export default useStore;
