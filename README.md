# monorepo-library-demo 

__Work in progress...__

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

assessment
delivery
acer


```