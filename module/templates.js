/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [

    // Actor Sheet Partials
    "systems/fanhunter3e/templates/actors/parts/actor-traits.html",
    "systems/fanhunter3e/templates/actors/parts/actor-inventory.html",
    "systems/fanhunter3e/templates/actors/parts/actor-features.html",
    "systems/fanhunter3e/templates/actors/parts/actor-spellbook.html",

    // Item Sheet Partials
    "systems/fanhunter3e/templates/items/parts/item-action.html",
    "systems/fanhunter3e/templates/items/parts/item-activation.html",
    "systems/fanhunter3e/templates/items/parts/item-description.html",
    "systems/fanhunter3e/templates/items/parts/item-mountable.html"
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
