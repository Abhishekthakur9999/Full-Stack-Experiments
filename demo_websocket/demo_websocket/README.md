# 🚀 EXP-10: WebSocket Chat Application  

A **real-time chat application** built using WebSockets that enables instant communication between users with a clean and modern UI.

---

## 📌 Features  

- 💬 Real-time messaging using WebSockets  
- ⚡ Fast and responsive user interface  
- 🎨 Clean and modern chat design  
- 🔄 Live updates without page refresh  
- 📡 Efficient client-server communication  

---

## 🛠️ Tech Stack  

- **Frontend:** React (Vite)  
- **Backend:** WebSocket (SockJS + STOMP)  
- **Styling:** CSS  
- **Tools:** VS Code, Git, GitHub  

---


---

# 📘 THEORY: WebSocket Chat Application  

## 🔹 1. Introduction to WebSockets  
WebSocket is a communication protocol that provides full-duplex (two-way) communication between client and server over a single TCP connection.  

Unlike traditional HTTP:
- HTTP is request-response based  
- WebSocket allows continuous, real-time data exchange  

It is widely used in applications like chat systems, live notifications, and online gaming.

---

## 🔹 2. Working of WebSocket Protocol  

### Step-by-step process:
1. Client sends a WebSocket handshake request (HTTP-based)  
2. Server accepts and upgrades the connection  
3. A persistent connection is established  
4. Data flows in both directions simultaneously  
5. Connection remains open until closed manually  

---

## 🔹 3. Architecture of Chat Application  

### Components:
- Client (Frontend – React)  
  - Provides user interface  
  - Sends and receives messages  

- Server (Backend – WebSocket)  
  - Manages connections  
  - Broadcasts messages  

- Protocol Layer (SockJS + STOMP)  
  - SockJS provides fallback support  
  - STOMP structures the messaging  

---

## 🔹 4. STOMP Protocol  

STOMP (Simple Text Oriented Messaging Protocol) is used to define message structure.

### Key operations:
- CONNECT → Establish connection  
- SUBSCRIBE → Listen to messages  
- SEND → Send messages  
- MESSAGE → Receive messages  

Example:
- /app/chat → sending messages  
- /topic/messages → receiving messages  

---

## 🔹 5. SockJS  

SockJS ensures:
- Compatibility with older browsers  
- Fallback mechanisms if WebSocket fails  
- Stable communication channel  

---

## 🔹 6. Real-Time Communication Flow  

1. User enters message in UI  
2. Message is sent to server via WebSocket  
3. Server processes and broadcasts message  
4. All clients receive the message instantly  
5. UI updates without page reload  

---

## 🔹 7. Advantages  

- Real-time communication  
- Low latency  
- Reduced server load  
- Persistent connection  
- Efficient data transfer  

---

## 🔹 8. Limitations  

- Not supported in very old browsers  
- Requires connection management  
- Slightly complex compared to HTTP  

---

## 🔹 9. Applications  

- Chat applications  
- Live notifications  
- Online gaming  
- Stock market updates  
- Real-time dashboards  

---

## 🔹 10. Conclusion  

WebSocket enables efficient real-time communication between client and server. By combining React with WebSocket (SockJS + STOMP), we can build fast, scalable, and interactive chat applications.

<img width="1904" height="561" alt="image" src="https://github.com/user-attachments/assets/ad7df2a7-6523-4c44-bb6c-03a0c7120652" />

<img width="1044" height="608" alt="Screenshot 2026-04-22 125426" src="https://github.com/user-attachments/assets/9e19d72a-27dc-4783-9397-2bcd7ddb6764" />

<img width="1384" height="792" alt="Screenshot 2026-04-22 130125" src="https://github.com/user-attachments/assets/aa94608a-dd99-4d97-8484-733642177c22" />

