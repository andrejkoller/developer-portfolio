export function playThemeSound(isDark: boolean) {
  const ctx = new AudioContext();
  const now = ctx.currentTime;

  const makeTone = (freq: number, start: number, dur: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(0.06, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
    osc.start(start);
    osc.stop(start + dur);
  };

  if (isDark) {
    makeTone(560, now, 0.1);
    makeTone(380, now + 0.05, 0.12);
  } else {
    makeTone(380, now, 0.1);
    makeTone(560, now + 0.05, 0.12);
  }

  setTimeout(() => ctx.close(), 400);
}
