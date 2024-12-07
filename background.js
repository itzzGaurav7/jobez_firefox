const searchEngines = {
  AmbitionBox: "https://www.ambitionbox.com/search?q=",
  GlassDoor: "https://www.glassdoor.co.in/Reviews/",
};

function createContextMenus(selectedEngines) {
  console.log("Creating context menus for: ", selectedEngines);

  // Remove all previous context menus
  browser.contextMenus.removeAll(() => {
    if (selectedEngines.length > 0) {
      selectedEngines.forEach((engine) => {
        console.log("Creating menu for: ", engine);
        browser.contextMenus.create({
          id: engine,
          title: `Find '%s' on ${engine}`,
          contexts: ["selection"],
        });
      });

      // Create "Search All" menu item
      browser.contextMenus.create({
        id: "searchAll",
        title: `Search '%s' in all selected engines`,
        contexts: ["selection"],
      });
    } else {
      // Create "No engines selected" menu item if none are selected
      browser.contextMenus.create({
        id: "noEngines",
        title: "No search engines selected",
        contexts: ["selection"],
      });
    }
  });
}

// Handle click events for context menus
browser.contextMenus.onClicked.addListener((info) => {
  console.log("Clicked on: ", info.menuItemId);

  if (info.selectionText) {
    const engine = info.menuItemId;
    const searchTerm = encodeURIComponent(
      info.selectionText.trim().replace(/\s+/g, "-").toLowerCase()
    );

    let baseURL = searchEngines[engine];
    if (engine === "GlassDoor") {
      baseURL = `${searchEngines.GlassDoor}${searchTerm}-reviews-SRCH_KE0,14.htm`;
    }

    // Open search results for individual selected engine
    if (engine === "searchAll") {
      const selectedEngines = Object.keys(searchEngines);
      selectedEngines.forEach((selectedEngine) => {
        let searchURL =
          searchEngines[selectedEngine] +
          encodeURIComponent(info.selectionText);
        if (selectedEngine === "GlassDoor") {
          searchURL = `${searchEngines.GlassDoor}${searchTerm}-reviews-SRCH_KE0,14.htm`;
        }
        browser.tabs.create({ url: searchURL });
      });
    } else if (baseURL) {
      let searchURL = baseURL + encodeURIComponent(info.selectionText);
      if (engine === "GlassDoor") {
        searchURL = `${searchEngines.GlassDoor}${searchTerm}-reviews-SRCH_KE0,14.htm`;
      }
      browser.tabs.create({ url: searchURL });
    }
  }
});

// Listen for changes in storage (i.e., when selected engines are updated)
browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "local" && changes.selectedEngines) {
    console.log("Selected engines changed: ", changes.selectedEngines.newValue);
    createContextMenus(changes.selectedEngines.newValue);
  }
});

// Initialize context menus when the extension is installed
browser.runtime.onInstalled.addListener(() => {
  browser.storage.local.get(["selectedEngines"]).then((result) => {
    const selectedEngines = result.selectedEngines || [];
    console.log("Initial selected engines: ", selectedEngines);
    createContextMenus(selectedEngines);
  });
});
