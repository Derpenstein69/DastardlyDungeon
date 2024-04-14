import { ModuleData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/packages.mjs";
import DastardlyDungeon from "./apps/dastardlyDungeon";

export interface DastardlyDungeon extends Game.ModuleData<ModuleData> {
  dastardlyDungeon: DastardlyDungeon;
}