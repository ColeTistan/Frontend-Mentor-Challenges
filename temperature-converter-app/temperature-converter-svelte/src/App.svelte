<script>
  let temperatureUnits = [
    { name: "Fahrenheit", key: "fahrenheit", symbol: "°F" },
    { name: "Celsius", key: "celsius", symbol: "°C" },
    { name: "Kelvin", key: "kelvin", symbol: "K" },
    { name: "Rankine", key: "rankine", symbol: "°R" },
    { name: "Delisle", key: "delisle", symbol: "°De" },
    { name: "Newton", key: "newton", symbol: "°N" },
    { name: "Réaumur", key: "reaumur", symbol: "°Ré" },
    { name: "Rømer", key: "romer", symbol: "°Rø" },
  ];

  // use a plain variable for the temperature
  let temperature = 0;

  // input number will be Celsius by default.
  const convertTemperature = (temp) => {
    const t = Number(temp);
    return {
      // round to nearest hundredth place
      fahrenheit: Math.round(((t * 9) / 5 + 32) * 100) / 100,
      celsius: Math.round(t * 100) / 100,
      kelvin: Math.round((t + 273.15) * 100) / 100,
      // correct Rankine from Kelvin
      rankine: Math.round((((t + 273.15) * 9) / 5) * 100) / 100,
      // fix naming to "delisle"
      delisle: Math.round((((100 - t) * 3) / 2) * 100) / 100,
      newton: Math.round(((t * 33) / 100) * 100) / 100,
      reaumur: Math.round(((t * 4) / 5) * 100) / 100,
      romer: Math.round(((t * 21) / 40 + 15 / 2) * 100) / 100,
    };
  };

  // make convertedTemperature reactive so it updates whenever temperature changes
  $: convertedTemperature = convertTemperature(temperature);
</script>

<main>
  <h1 class="app-title">
    <span>Temperature</span>&nbsp;<span>Converter</span>
  </h1>

  <input class="input-section" bind:value={temperature} type="number" placeholder="Temperature (°C)" />

  <div class="card-grid">
    {#each temperatureUnits as unit (unit.key)}
      <div class="card">
        <div class="card-content">
          <h2 class="card-title">{unit.name}</h2>
          <p class="temperature-value">
            {convertedTemperature[unit.key]}
            {unit.symbol}
          </p>
        </div>
      </div>
    {/each}
  </div>
</main>

