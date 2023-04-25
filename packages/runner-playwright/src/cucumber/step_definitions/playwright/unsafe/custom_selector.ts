/**
 * Copyright UUV.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {When} from "@cucumber/cucumber";
import {World} from "playwright-bdd";

When('je suis une phrase custom qui vérifie l\'existence d\'un noeud par le sélecteur {string}', async function (this: World, selector: string) {
    await this.page.locator(selector);
});
