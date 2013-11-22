# Cubisearch
Search for LEGO® set information and images.  This backbone.js app accesses the cubiculus.com API via a node.js proxy API.

Demo site: [http://cubisearch.herokuapp.com/](http://cubisearch.herokuapp.com/)


## Installation

### Install dependencies
The project requires node.js and bower. Run 
```
npm install
```
and
```
bower install
```
to retrieve the project dependencies.  If you have grunt installed, run ```grunt``` or ```grunt watch``` to build the project.

### Update API Key
You'll need to get your own cubiculus.com API key [http://www.cubiculus.com/api/](http://www.cubiculus.com/api/) and replace mine with yours in the controllers file: cubisearch/src/api/controllers.js 

### Start local server
Start a local instance by running 
```
npm start
``` 

## License

The MIT License (MIT)

Copyright (c) 2013 Ben Brewer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

LEGO® is a trademarks of the LEGO® Group, which does not sponsor, authorize or endorse this web site.


