<script>
  let flightOptions = ['one-way', 'return-flight'];
  let flightType = $state(flightOptions[0]);
  let startDate = $state();
  let endDate = $state();

  const handleSubmit = () => {
    // Validate that the start date or end date is selected
    if (!startDate && !endDate) {
      alert('Please select a start date and end date (if applicable).');
      return;
    }

    if (flightType !== 'one-way') {
      alert(`You have booked a ${flightType} flight from ${startDate} to ${endDate}.`);
    } else {
      alert(`You have booked a ${flightType} flight on ${startDate}.`);
    }
  }
</script>

<main>
  <p class="app-title">Flight Booker App</p>
  <form class="card">
    <p class="card-title">Book your flight now!</p>
    <div class="card-content">
      <select name="flight-type" id="flight-type" bind:value={flightType}>
        <option value="one-way">One-Way Flight</option>
        <option value="round-trip">Return Flight</option>
      </select>
      <div class="input-group">
        <label for="start-date">Start Date:</label>
        <input
          type="date"
          name="start-date"
          id="start-date"
          bind:value={startDate}
        />
        <label for="end-date">End Date:</label>
        <input 
          type="date"
          name="end-date"
          id="end-date"
          bind:value={endDate}
          disabled={flightType === 'one-way'}
        />
      </div>
      <button
        onclick={handleSubmit}
        disabled={
          !startDate ||
          (flightType === 'round-trip' && !endDate) ||
          (startDate > endDate)
        }
      >Book Now</button>
    </div>
  </form>
</main>