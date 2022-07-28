// import hiddenItem from "../assets/images/Page/Gamescreen/1_7.png";
// import clockIcon from "../assets/images/Page/Gamescreen/clock.png";
// import gameArea from "../assets/images/Page/Gamescreen/gameArea.png";
// import scoreIcon from "../assets/images/Page/Gamescreen/score.png";
// import swithcOn from "../assets/images/Page/Gamescreen/switch-on.png";

// function NewGameScreen() {
//     return (
//         <div className="game-screen h-screen w-4/5 font-bubblegum">
//             <div className="game-area relative min-h-[70vh] bg-contain bg-center flex justify-end items-end" style={{ backgroundImage: `url(${gameArea})` }}>
//                 {/* <img src={gameArea} alt="Game Area" className="w-full h-full border"/> */}
//                 <img src={hiddenItem} alt="Hidden Item" className="w-16 absolute inset-0" />
//                 <div className="stat-pick w-full bg-transparent flex items-center justify-between text-white uppercase">
//                     <div className="w-44 p-2 bg-gradient-to-r from-[#f9241c] to-[#a603f7] text-center text-xl">Time Remaining</div>
//                     <div className="w-44 p-2 bg-gradient-to-r from-[#f9241c] to-[#a603f7] text-center text-xl">Score</div>
//                 </div>
//             </div>
//             <div className="game-panel">
//                 <div className="game-options h-[10vh] bg-gradient-to-r from-[#4d4d4d] to-[#0e0e0e] w-full flex items-center justify-between text-white px-4 py-2">
//                     <div className="stat-time flex items-center gap-2">
//                         <img src={clockIcon} alt="Time Remain" className="w-8" />
//                         <p className="text-4xl">3:10</p>
//                     </div>
//                     <div className="game-settings flex gap-6">
//                         <div className="music flex gap-2">
//                             <p>Music:</p>
//                             <img src={swithcOn} alt="Music" className="w-16" />
//                         </div>
//                         <div className="sound flex gap-2">
//                             <p>Sound:</p>
//                             <img src={swithcOn} alt="Sound" className="w-16" />
//                         </div>
//                         <div className="fullscreen flex gap-2">
//                             <p>Fullscreen:</p>
//                             <img src={swithcOn} alt="FullScreen" className="w-16" />
//                         </div>
//                     </div>
//                     <div className="stat-score flex items-center gap-2">
//                         <p className="text-4xl">600</p>
//                         <img src={scoreIcon} alt="Score" className="w-8" />
//                     </div>
//                 </div>
//                 <div className="game-target-items w-full h-[20vh] bg-cover" style={{backgroundImage: `url(${gameArea})`}}>
//                     <div className="item">
//                         <img src={hiddenItem} alt="Hidden Items" className="w-8"/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default NewGameScreen;