import React, { useState, useRef, useEffect } from 'react'
import { BsChatDotsFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { IoSend } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";

const Chatbot = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ text: 'Xin chào! Tôi có thể giúp gì cho bạn?', isUser: false }]);
    const [input, setInput] = useState('');
    const chatBodyRef = useRef(null);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, isUser: true }]);
            setTimeout(() => {
                setMessages(prev => [...prev, { text: 'Cảm ơn bạn! Tôi sẽ hỗ trợ ngay.', isUser: false }]);
            }, 500);
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            <div onClick={toggleChat} className={`w-[50px] h-[50px] rounded-full fixed bottom-5 right-5 z-15 bg-blue-600 text-white flex items-center justify-center cursor-pointer ${isOpen ? 'hidden' : ''}`}>
                <BsChatDotsFill className='text-[23px]' />
            </div>
            <div className={`w-[300px] h-[450px] rounded-[10px] fixed bottom-5 right-5 z-15 flex flex-col ${isOpen ? '' : 'hidden'}`}>
                <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
                    <div className='flex'>
                        <FaRobot className='text-[20px]' />
                        <span className="pl-1 font-bold">Chatbot</span>
                    </div>
                    <button onClick={toggleChat} className="text-white text-[20px] font-bold rounded-full w-6 h-6 flex items-center justify-center cursor-pointer">
                        <TiDelete className='text-[25px]' />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto bg-[#f9f9f9] p-3" ref={chatBodyRef}>
                    {
                        messages.map((msg, index) => (
                            <div key={index} className={`mb-[10px] px-[12px] py-[8px] rounded-[10px] max-w-[70%] break-words whitespace-pre-wrap ${msg.isUser ? 'bg-blue-600 text-white ml-auto text-right' : 'bg-gray-200 text-black mr-auto'}`}>
                                {msg.text}
                            </div>
                        ))
                    }
                </div>
                <div className="flex p-3 border-t border-gray-200 bg-white">
                    <textarea
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded outline-none resize-none"
                        placeholder="Nhập tin nhắn..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <IoSend onClick={sendMessage} className='text-[30px] text-blue-600 ml-2 mt-4 cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default Chatbot
