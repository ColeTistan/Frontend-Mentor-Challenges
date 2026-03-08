<script>
  let elapsedTime = $state(0);
  let duration = $state(5);
  let interval;

  const startTimer = () => {
    // prevent multiple intervals from being created
    if (interval) return;
    interval = setInterval(() => {
      elapsedTime += 0.01;
      if (elapsedTime >= duration) {
        clearInterval(interval);
        elapsedTime = duration;
        interval = null;
      }
    }, 10);
  };
  const resetTimer = () => {
    elapsedTime = 0;
    startTimer();
  };

  $effect(() => {
    if (!duration) return;
    startTimer();
    return () => {
      clearInterval(interval);
      interval = null;
    };
  });
</script>

<main>
  <p class="app-title">timer app</p>
  <div class="card">
    <label for="elapsed-time" class="elapsed-time">Elapsed Time: </label>
    <progress id="timer" value={elapsedTime <= 0.05 ? 0 : elapsedTime} max={duration}></progress>
    <label for="numeric-time" class="numeric-time"
      >{elapsedTime.toFixed(1)}s</label
    >
    <label for="duration" class="duration">Duration: </label>
    <input
      type="range"
      name="duration"
      id="duration"
      min="0"
      max="60"
      bind:value={duration}
      oninput={startTimer}
    />
    <button onclick={resetTimer}>Reset Timer</button>
  </div>
</main>
