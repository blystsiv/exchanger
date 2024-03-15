import { useEffect } from 'react';

export interface WebSocketData {
  A: string;
  B: string;
  a: string;
  b: string;
  s: string;
  u: number;
}

type OnDataCallback = (data: WebSocketData) => void;

export const useWebSocketConnection = (symbol: string, onData: OnDataCallback) => {
  useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}`);

    ws.onmessage = (event) => {
      const data: WebSocketData = JSON.parse(event.data);
      onData(data);
    };

    return () => {
      ws.close();
    };
  }, [symbol, onData]);
};
