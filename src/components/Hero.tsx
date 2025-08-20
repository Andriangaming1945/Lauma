import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Halo! Selamat datang di EcoTrack AI Chatbot. Ada yang bisa saya bantu?" },
    { from: "user", text: "Apa yang bisa saya lakukan dengan aplikasi ini?" },
    { from: "ai", text: "Kamu bisa memantau kondisi lingkungan, melapor masalah, dan ikut aksi komunitas!" },
  ]);
  const [input, setInput] = useState("");

  const openChat = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const closeChat = () => {
    setIsClosing(true);
    // tunggu animasi selesai baru setIsOpen(false)
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // durasi fade-out harus sama dengan css
  };

  const toggleChat = () => {
    if (isOpen) {
      closeChat();
    } else {
      openChat();
    }
  };

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <>
      <style jsx>{`

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-0 {
          animation-delay: 0.2s;
        }
        .delay-1 {
          animation-delay: 0.8s;
        }
        .delay-2 {
          animation-delay: 1.4s;
        }
        .delay-3 {
          animation-delay: 2s;
        }
        .delay-4 {
          animation-delay: 2.6s;
        }

        .typewriter-container {
          overflow: hidden;
          border-right: 3px solid #22c55e;
          white-space: nowrap;
          animation: typewriter 2s steps(40, end) forwards,
            blink 0.75s step-end infinite;
          animation-delay: 0.5s;
          width: 0;
        }

        .chatbot-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

     
        .chatbox {
          position: fixed;
          bottom: 80px;
          right: 20px;
          width: 320px;
          max-height: 480px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 1000;
          opacity: 1;
          animation-fill-mode: forwards;
        }

        .chatbox.fade-in {
          animation: fadeIn 0.3s ease forwards;
        }

        .chatbox.fade-out {
          animation: fadeOut 0.3s ease forwards;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .chatbox-header {
          background-color: #16a34a;
          color: white;
          padding: 12px 16px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: sans-serif;
        }

        .chatbox-messages {
          flex-grow: 1;
          padding: 12px;
          overflow-y: auto;
          font-family: sans-serif;
          font-size: 14px;
          background-color: #f7fafc;
        }

        .hero-bg {
  background-image: url('/gambar.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* efek parallax */
  background-repeat: no-repeat;
  position: relative;
}

.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5); /* brightness-50 */
  z-index: 1;
}


        .chatbox-message {
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
        }

        .chatbox-message.ai {
          align-items: flex-start;
        }

        .chatbox-message.user {
          align-items: flex-end;
        }

        .chatbox-message .bubble {
          max-width: 80%;
          padding: 8px 12px;
          border-radius: 16px;
          white-space: pre-wrap;
        }

        .chatbox-message.ai .bubble {
          background-color: #e6f4ea;
          color: #065f46;
          border-bottom-left-radius: 0;
        }

        .chatbox-message.user .bubble {
          background-color: #16a34a;
          color: white;
          border-bottom-right-radius: 0;
        }

        .chatbox-input-container {
          display: flex;
          padding: 8px 12px;
          border-top: 1px solid #ddd;
          background: white;
        }

        .chatbox-input {
          flex-grow: 1;
          border: 1px solid #ccc;
          border-radius: 9999px;
          padding: 8px 16px;
          font-size: 14px;
          outline: none;
          font-family: sans-serif;
        }

        .chatbox-send-button {
          background-color: #16a34a;
          color: white;
          border: none;
          margin-left: 8px;
          border-radius: 9999px;
          padding: 8px 16px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .chatbox-send-button:hover {
          background-color: #15803d;
        }

       .hero-bg {
    background-image: url('/gambar.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: brightness(0.5);
  transition: filter 0.5s ease;
}
.group:hover .hero-bg {
  filter: brightness(0.4);
}
      `}</style>

     <div className="relative flex items-center h-screen px-8 md:px-20 overflow-hidden group">

    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition duration-500"
         style={{
             backgroundImage: `url('/gambar.jpg')`,
             filter: 'brightness(0.5)', 
         }}
         aria-hidden="true"
    />


  <div className="relative max-w-4xl text-left text-white space-y-8 z-10">
    <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg font-sans leading-tight">
      <div className="block fade-in delay-1">
        <span className="block" style={{ marginBlock: '0.3em' }}>
          Pantau <span className="text-green-400">Lingkunganmu.</span>
        </span>
      </div>
      <span className="block fade-in delay-1" style={{ marginBlock: '0.3em' }}>
        Lapor <span className="text-green-400">Masalah.</span>
      </span>
      <span className="block fade-in delay-2" style={{ marginBlock: '0.3em' }}>
        Aksi <span className="text-green-400">Nyata</span> untuk Bumi.
      </span>
    </h1>

    <p className="text-lg md:text-xl drop-shadow-md font-sans max-w-xl slide-up delay-3">
      <span>Data lingkungan </span>
      <span className="font-semibold text-green-300">real-time</span>
      <span> dan ikut serta dalam </span>
      <span className="font-semibold text-green-300">perubahan positif</span>
      <span> di komunitasmu.</span>
    </p>

    <div className="flex space-x-4 slide-up delay-4">
      <Link 
        to="/report"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-7 rounded-lg shadow-lg transition duration-300 hover:scale-105">
          Lapor Masalah
      </Link>
      <Link 
      to="/guidebook"
      
      className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white font-semibold py-3 px-7 rounded-lg shadow-lg transition duration-300 hover:scale-105">
        Guide Book
      </Link>
    </div>
  </div>

        {/* AI Chatbot Button - Bottom Right */}
        <div className="fixed bottom-8 right-4 z-50 flex flex-col items-end space-y-4 block fade-in delay-1">
          <button
            className="bg-white hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition duration-300 flex items-center space-x-3 chatbot-bounce border-2 border-green-400"
            onClick={toggleChat}
            aria-label="Toggle AI Chatbot"
          >
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04.97 4.43L1 23l6.57-1.97C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10zm-1 15h-2v-2h2v2zm0-4h-2V9h2v4zm4 4h-2v-2h2v2zm0-4h-2V9h2v4z" />
            </svg>
            <span className="text-sm font-bold text-black">AI CHATBOT</span>
          </button>

          {/* Chatbox */}
          {(isOpen || isClosing) && (
            <div
              className={`chatbox ${isClosing ? "fade-out" : "fade-in"}`}
              role="dialog"
              aria-modal="true"
              aria-label="Chatbot AI"
            >
              <div className="chatbox-header">
                Lauma AI Chatbot
                <button
                  aria-label="Close Chatbot"
                  onClick={closeChat}
                  className="font-bold hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
              <div className="chatbox-messages">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`chatbox-message ${msg.from === "ai" ? "ai" : "user"}`}
                    role="article"
                    aria-live="polite"
                  >
                    <div className="bubble">{msg.text}</div>
                  </div>
                ))}
              </div>
              <div className="chatbox-input-container">
                <input
                  type="text"
                  className="chatbox-input"
                  placeholder="Ketik pesan..."
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  className="chatbox-send-button"
                  onClick={handleSend}
                  aria-label="Kirim pesan"
                >
                  Kirim
                </button>
              </div>
            </div>
          )}
          </div>
        </div>
      
    </>
  );
};

export default Hero;
