"use client";

import { useEffect, useState } from "react";
import Chatbot from "@/app/components/chatbot";
import InterestsSection from "@/app/components/interests-section";
import ArticlesSection from "@/app/components/articles-section";
import ContactSection from "@/app/components/contact-section";

const phrases = [
  "Avid Learner",
  "AI Enthusiast",
  "Transformation Lead",
  "Engineering Manager",
  "Product Owner",
  "Agile Expert",
];

const introAnimationDurationMs = 900;
const introAnimationDelayMs = 220;
const typingSpeedMs = 85;
const deletingSpeedMs = 45;
const phrasePauseMs = 1300;
const betweenPhraseMs = 280;

export default function HomePage() {
  const [hasStartedSkillTyping, setHasStartedSkillTyping] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const startSkillsDelay = setTimeout(() => {
      setHasStartedSkillTyping(true);
    }, introAnimationDelayMs + introAnimationDurationMs);

    return () => clearTimeout(startSkillsDelay);
  }, []);

  useEffect(() => {
    if (!hasStartedSkillTyping) {
      return;
    }

    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && typedText.length < currentPhrase.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, typingSpeedMs);

      return () => clearTimeout(typingTimeout);
    }

    if (!isDeleting && typedText.length === currentPhrase.length) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, phrasePauseMs);

      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && typedText.length > 0) {
      const deletingTimeout = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length - 1));
      }, deletingSpeedMs);

      return () => clearTimeout(deletingTimeout);
    }

    const nextPhraseTimeout = setTimeout(() => {
      setIsDeleting(false);
      setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length);
    }, betweenPhraseMs);

    return () => clearTimeout(nextPhraseTimeout);
  }, [hasStartedSkillTyping, isDeleting, phraseIndex, typedText]);

  return (
    <>
      <section id="home" className="section-shell">
        <div className="container-shell py-20">
          <div className="editorial">
            <div className="space-y-6">
              <h1>
                Hello
                <br />
                <span className="intro-line" aria-label="I'm Amal Makwana">
                  I&apos;m Amal Makwana
                </span>
              </h1>
              <div className="phrase-cloud" aria-label="Professional roles and interests">
                <span className="phrase-chip phrase-typing" aria-live="polite">
                  {typedText || "\u00A0"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Chatbot />
      <InterestsSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}
