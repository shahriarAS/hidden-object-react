import globeImg from "../assets/images/Page/Common/globe.png";
import settingsImg from "../assets/images/Page/Common/sideImage.png";
import switchOff from "../assets/images/Page/Settings/switch-off.png";
import switchOn from "../assets/images/Page/Settings/switch-on.png";

function Settings() {
    return (
        <div className="settings-page h-[90vh] max-h-[800px] flex font-bubblegum text-[#424242] uppercase">
            <div className="settings-form relative flex-1 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-gray-200">
                <img src={globeImg} alt="Globe" className="absolute w-64 bottom-0 -left-40" />
                <div className="settings-area w-1/2 h-full py-6 m-auto flex flex-col justify-center">
                    <h1 className="settings-title text-5xl self-start">Settings</h1>
                    <div className="settings-panel w-4/5 flex flex-col gap-4 mt-8 text-[#A900FD]">
                        <div className="settings-div flex items-center justify-between">
                            <div className="setting-label text-2xl">
                                Sound:
                            </div>
                            <div className="setting-btn">
                                <img src={switchOn} alt="Switch On" className="w-16" />
                            </div>
                        </div>
                        <div className="settings-div flex items-center justify-between">
                            <div className="setting-label text-2xl">
                                Music:
                            </div>
                            <div className="setting-btn">
                                <img src={switchOff} alt="Switch On" className="w-16" />
                            </div>
                        </div>
                        <div className="settings-div flex items-center justify-between">
                            <div className="setting-label text-2xl">
                                Difficulty:
                            </div>
                            <div className="setting-btn">
                                <select name="difficulty" id="difficulty" className="px-2 py-1 bg-[#272727] border-2 border-white text-white rounded-lg">
                                    <option value="easy">Easy</option>
                                    <option value="normal">Normal</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="settings-side flex-1 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${settingsImg})` }}>

            </div>
        </div>
    );
}

export default Settings;