<script>
  let rosterNames = $state([
    { id: 1, firstName: 'John', surName: 'Smith' },
    { id: 2, firstName: 'Jane', surName: 'Doe' },
    { id: 3, firstName: 'Alice', surName: 'Johnson' },
    { id: 4, firstName: 'Bob', surName: 'Brown' },
  ]);
  let person = $state({
    firstName: '',
    surName: '',
  });
  let prefix = $state('');
  let selectedPerson = $state({
    id: undefined,
    firstName: '',
    surName: '',
  });
  let filteredRoster = $state([]);

  const clearForm = () => {
    return {
      firstName: '',
      surName: '',
    }
  }

  const createPerson = () => {
    rosterNames.push({
      id: rosterNames.length + 1,
      firstName: person.firstName,
      surName: person.surName,
    });
    person = clearForm();
  }

  const updatePerson = () => {
    // Find the index of the selected person in the roster
    const index = rosterNames.findIndex(p => p.id === selectedPerson.id);
    if (index !== -1) {
      // Update the person's details in the roster
      rosterNames[index] = {
        id: selectedPerson.id,
        firstName: person.firstName,
        surName: person.surName,
      };
      person = clearForm();
    }
  }

  const deletePerson = () => {
    if (selectedPerson.id !== undefined) {
      rosterNames = rosterNames.filter(p => p.id !== selectedPerson.id);
      person = clearForm();
    }
  }
</script>

<main>
  <p class="app-title">crud app</p>
  <form>
    <div class="col">
      <label for="filter-prefix">Filter by prefix:</label>
      <input type="text" name="filter-prefix" id="filter-prefix" bind:value={prefix} />
      <select name="roster" id="roster" size=5 bind:value={selectedPerson}>
      {#each rosterNames as {id, firstName, surName}}
        <option value={id}>{firstName} {surName}</option>
      {/each}
      </select>
    </div>
    <div class="col">
      <label for="first-name">First Name:</label>
      <input type="text" name="first-name" id="first-name" bind:value={person.firstName} />
      <label for="surname">Surname:</label>
      <input type="text" name="surname" id="surname" bind:value={person.surName} />
    </div>
    <div class="button-group">
      <button type="button" class="create-btn" onclick={createPerson}>Create</button>
      <button type="button" class="update-btn" onclick={updatePerson}>Update</button>
      <button type="button" class="delete-btn" onclick={deletePerson}>Delete</button>
    </div>
  </form>
</main>
