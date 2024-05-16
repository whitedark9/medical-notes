import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import readingTime from "reading-time";
import useSpeech from "~/hooks/useSpeech";
import Button from "./Button";

const BTN_ID = "text-to-speak-button";

export default function SpeakButton() {
  const [text, setText] = useState("");
  const speech = useSpeech();

  useEffect(() => {
    const mains = document.getElementsByTagName("main");
    const main = mains[0];
    const children = main.querySelectorAll(".nextra-breadcrumb");
    children.forEach((child) => {
      child?.parentNode?.removeChild(child);
    });
    // Remove button
    const button = document.getElementById(BTN_ID);
    button ? button?.parentNode?.removeChild(button) : null;
    setText(main.innerText);
  }, []);

  const handleSpeak = useCallback(() => {
    if (!speech) return null;
    // Speak
    if (speech.isPlaying === null) return speech.speak(text, 2, 0.8);
    // Pause
    if (speech.isPlaying === true) return speech.pause();
    // Resume
    if (speech.isPlaying === false) return speech.resume();
  }, [speech, text]);

  const timeToRead = useMemo(
    () => Math.ceil(readingTime(text).minutes * 2.5),
    [text],
  );

  // No speak, return null
  if (!speech) return null;

  return (
    <div className="flex-rows my-3 flex items-center gap-3" id={BTN_ID}>
      <Button onClick={handleSpeak}>
        {speech.isPlaying === true
          ? "Pause"
          : speech.isPlaying === false
            ? "Resume"
            : "Listen"}
      </Button>
      {speech.isPlaying !== null && <Button onClick={speech.stop}>Stop</Button>}
      <span className="font-medium">{timeToRead} min read</span>
    </div>
  );
}

export function AddSpeakButton() {
  useEffect(() => {
    // If button is already existed, skip
    const btn = document.getElementById(BTN_ID);
    if (btn) return console.log("Already created");

    const mains = document.getElementsByTagName("main");
    const main = mains[0];
    const h1s = main.querySelectorAll("h1");
    const h1 = h1s[0];
    const buttonContainer = document.createElement("div");
    h1.insertAdjacentElement("afterend", buttonContainer);

    const buttonRoot = createRoot(buttonContainer);
    buttonRoot.render(createPortal(<SpeakButton />, buttonContainer));
  }, []);

  return null;
}
