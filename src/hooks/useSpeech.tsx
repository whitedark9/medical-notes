import React, { useEffect, useState } from "react";

type SpeechStateProps = {
  isPlaying: null | boolean;
  availableVoices: any[];
  currentVoiceIndex: number;
};

export default function useSpeech() {
  const [isLoading, setLoading] = useState(true);

  // Loaded
  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  // Load voices
  useEffect(() => {
    const getVoices = () => {
      const voices = window.speechSynthesis.getVoices();

      if (voices.length) {
        setState((prev) => ({ ...prev, availableVoices: voices }));
      }
    };

    getVoices();
  }, [isLoading]);

  // Speech
  const [state, setState] = useState<SpeechStateProps>({
    isPlaying: null,
    availableVoices: [],
    currentVoiceIndex: 0,
  });

  // Speak
  const speak = React.useCallback(
    (text: string, voiceIndex = 0, rate = 0.88) => {
      const voices = window.speechSynthesis.getVoices();

      if (voices.length > 0) {
        const utterance = new window.SpeechSynthesisUtterance(text);

        // Must be valid index
        if (voiceIndex >= 0 && voiceIndex < voices.length) {
          utterance.voice = voices[voiceIndex];
          utterance.rate = rate;
          utterance.onend = () =>
            setState((prev) => ({ ...prev, isPlaying: null }));
          utterance.onpause = () =>
            setState((prev) => ({ ...prev, isPlaying: false }));
          utterance.onresume = () =>
            setState((prev) => ({ ...prev, isPlaying: true }));
          utterance.onerror = () =>
            setState((prev) => ({ ...prev, isPlaying: null }));

          window.speechSynthesis.speak(utterance);

          return setState((prev) => ({
            ...prev,
            currentVoiceIndex: voiceIndex,
            isPlaying: true,
          }));
        } else {
          console.log("Your browser does not support this voice.");
        }
      } else {
        console.log("No voices");
      }
    },
    [],
  );

  // Pause
  const pause = React.useCallback(() => window.speechSynthesis.pause(), []);

  // Resume
  const resume = React.useCallback(() => window.speechSynthesis.resume(), []);

  // Stop
  const stop = React.useCallback(() => window.speechSynthesis.cancel(), []);

  if (isLoading) return null;

  return { ...state, speak, pause, resume, stop };
}
