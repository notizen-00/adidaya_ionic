// webSocketStore.js
import { defineStore } from 'pinia';

export const useWebSocketStore = defineStore('webSocketStore', {
  state: () => ({
    url: 'ws://localhost:8080',
    socket: null,
    reconnectInterval: 5000,
  }),

  actions: {
    connect() {
      this.socket = new WebSocket(this.url);

      this.socket.onopen = () => {
        console.log('WebSocket connection opened.');
      };

      this.socket.onmessage = (event) => {
        console.log('Received message:', event.data);
        // Handle incoming messages as needed
      };

      this.socket.onclose = (event) => {
        console.log(`WebSocket connection closed with code ${event.code}. Reconnecting...`);
        setTimeout(() => this.connect(), this.reconnectInterval);
      };
    },

    sendMessage(message) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(message);
      } else {
        console.error('WebSocket is not open.');
      }
    },
  },
});
