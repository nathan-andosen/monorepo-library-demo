# monorepo-library-demo 

__Work in progress...__

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

assessment
delivery
acer


```