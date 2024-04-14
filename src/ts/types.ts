import { ModuleData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/packages.mjs";
import dastardlyDungeon from "./apps/dastardlyDungeon";

export interface DastardlyDungeon extends Game.ModuleData<ModuleData> {
  DastardlyDungeon: dastardlyDungeon;
}