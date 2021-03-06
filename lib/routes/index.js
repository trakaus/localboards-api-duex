/***************************************************************************
The MIT License (MIT)

Copyright (c) 2014 LocalBoards.org

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
****************************************************************************/
// node_modules/routes/lib/index.js
// @author: Ryan Walker [w.ryan.walker@gmail.com]

// do not remove or modify this value.
const api_version_0_9_0 = '0.9.0';
// if you significantly change the feature set of a given resource method,
// add a new constant value and apply it to the resource handler.
// be sure to update the documentation so the user knows to pass the 
// [accpet-version] header to request the new handler associated with
// the new version.

var lbns = require('../namespace');
require('./handlers/states');
require('./handlers/cities');
require('./handlers/counties');
require('./handlers/boards');
console.log(lbns);
module.exports = lbns;
