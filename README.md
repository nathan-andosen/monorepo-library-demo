# monorepo-library-demo 

__Work in progress...__

## Current implementation

* Using SolidJs to create custom elements
* We use a playgroud app to develop on all the different components
	* When developing, we do have HMR working
* We can run a build that will output all the components to the directory /custom-elements/*. This will be used by other applications to import these components
	* Currently we are not generating declartion files, this needs to be implemented.
* I think we can still use slots in our Solid components
* If we built things this way, we could build an item editor that could with be used as a custom element or a SolidJs app runing in an iFrame


## Possible approach

* Build everything in SolidJs components, only expose the external components using custom elements so other applications can use them, for example:
  * The response-components / response-elements would not be exposed as custom elements
  * The item type components, which use response-elements, would be exposed as custom elements so applications like Delivery can use it
  * We would still create css classes that are prefixed with names to avoid classes, we could use a naming convention like bem. So for example, single choice items would have a block element name of "item-sci". Then out element css names could look like "item-sci__input"
* Also, instead of exposing 5 custom element js files for 5 items types, we could expose the 1 js file which contains all 5 custom elements and only the 1 version of solid js

  

## Notes

* Right now, you can build each component into a custom element, but when you reuse a component inside another component, you just import the Solid component directly
  * If we wanted, you could import the custom element and use that directly in the component, this is probably better due to style scope

```
import {AcerItemEditor} from '@acer/items/editor';

import {} from '@acer/items/build/editor';

import {} from '@acer/items/components/single-choice-item';

import {} from '@acer/items/scoring';
import {AcerItemEditor} from '@acer/items/components/item-editor';
import {AcerItemEditor} from '@acer/items/ui/item-editor';
import {AcerItemEditor} from '@acer/items/ui/single-choice-item';
import {AcerItemEditor} from '@acer/items/types/single-choice';

import {AcerSingleChoiceItem} from '@acer/items/custom-elements/single-choice-item';

import {AcerSingleChoiceItem} from '@acer/items/components/items/single-choice-item';

// importing the custom elements
import '@acer/items/custom-elements/items';
import '@acer/items/custom-elements/item-editor';
import '@acer/items/custom-elements/single-response-item';

assessment
delivery
acer


```

## Maintaining the repo

* Use the below commands to maintain and update the dependencies
    * `pnpm outdated --recursive` - View all the outdate dependencies, including the sub packages and other apps
    * `pnpm update --recursive` - Update all dependencies to the latest version in respect to the package configuration
        * Because we use the caret character `^` in our versios, this command will only update the minor & patch versions, never the major
        * If you think updating minor is too risky, use the tilde character `~` instead, this will only update the patch version
    * `pnpm update --recursive --latest` - Update all dependencies (including major version) to latest
    * __Important!__ After you update all your deps, make sure the app still works by doing the following:
        * `npm run api:build`
        * `npm run api:deploy:e2e`
        * `npm run api:test:e2e`
        * `npm run dev:app` - quickly test the app