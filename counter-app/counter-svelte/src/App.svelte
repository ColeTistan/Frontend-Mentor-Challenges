<script>
  let count = $state(0)
  const increment = () => count++
  const decrement = () => count--
  const multiply = () => count *= 2
  const divide = () => count /= 2
  const reset = () => count = 0
</script>

<main>
  <label for="counter">{count}</label>
  <div class="button-group">
    <button id="add" onclick={increment}>Add</button>
    <button id="subtract" onclick={decrement}>Subtract</button>
    <button id="multiply" onclick={multiply}>Multiply</button>
    <button id="divide" onclick={divide}>Divide</button>
    <button id="reset" onclick={reset}>Reset</button>
  </div>
</main>