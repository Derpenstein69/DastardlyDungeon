// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import "../styles/dastardly-dungeon.scss";
import DastardlyDungeon from "./apps/dastardlyDungeon";
import { moduleId } from "./constants";
import { DastardlyDungeon } from "./types";

let module: DastardlyDungeon;

Hooks.once("init", () => {
  console.log(`Initializing ${moduleId}`);

  module = (game as Game).modules.get(moduleId) as DastardlyDungeon;
  module.dastardlyDungeon = new DastardlyDungeon();
});

Hooks.on("renderActorDirectory", (_: Application, html: JQuery) => {
  const button = $(
    `<button class="cc-sidebar-button" type="button">#insertmyiconhere</button>`
  );
  button.on("click", () => {
    module.dastardlyDungeon.render(true);
  });
  html.find(".directory-header .action-buttons").append(button);
});