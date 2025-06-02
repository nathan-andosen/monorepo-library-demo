#!/bin/bash


rimraf ./custom-elements/multi-response-item
cd components/items/multi-response-item
npm run build
cd ../../../

rimraf ./custom-elements/single-response-item
cd components/items/single-response-item
npm run build
cd ../../../