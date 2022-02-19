import App from './App.js';
import Profile from './Profile.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MiniGame from './MiniGame.js';
import VoiceChat from './VoiceChat.js';

function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/minigame" element={<MiniGame />} />
            <Route path="/voicechat" element={<VoiceChat />} />
        </Routes>
        </BrowserRouter>
        
    )
}

export default Router;