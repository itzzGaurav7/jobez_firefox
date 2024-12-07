const searchEnginesForm = document.getElementById("searchEnginesForm");
const engineOptions = document.querySelectorAll(".engine-option");

function saveSelectedEngines() {
  const selectedEngines = Array.from(searchEnginesForm.elements)
    .filter((input) => input.checked)
    .map((input) => input.value);

  // Save the selected engines in Firefox storage
  browser.storage.local.set({ selectedEngines });

  // Enable/disable search button based on selection
  searchButton.disabled = selectedEngines.length === 0;
}

Array.from(searchEnginesForm.elements).forEach((input) => {
  input.addEventListener("change", () => {
    const parentLabel = input.closest(".engine-option");
    parentLabel.classList.toggle("selected", input.checked);
    saveSelectedEngines();
  });
});

// Load saved engines from Firefox storage
browser.storage.local.get(["selectedEngines"]).then((result) => {
  const selectedEngines = result.selectedEngines || [];
  console.log("Loaded selected engines: ", selectedEngines);

  Array.from(searchEnginesForm.elements).forEach((input) => {
    if (selectedEngines.includes(input.value)) {
      input.checked = true;
      input.closest(".engine-option").classList.add("selected");
    }
  });

  // Enable/disable search button based on loaded selection
  searchButton.disabled = selectedEngines.length === 0;
});

// Optional: Add event listener for search button
// searchButton.addEventListener("click", () => {
//     const selectedEngines = Array.from(searchEnginesForm.elements)
//         .filter((input) => input.checked)
//         .map((input) => input.value);
//     // Handle search functionality
//     console.log("Searching with engines:", selectedEngines);
// });
