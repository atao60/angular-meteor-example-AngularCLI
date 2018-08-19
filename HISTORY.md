

```bash
npm -v
# 5.6.0

node -v
# v8.11.3

npm list -g --depth=0
# /usr/local/lib
# ├── @angular-devkit/core@0.6.8
# ├── @angular/cli@6.0.8
# ├── @ng-toolkit/init@1.1.31
# ├── ajv-cli@3.0.0
# ├── cordova@8.0.0
# ├── express-generator@4.16.0
# ├── http-server@0.11.1
# ├── ionic@3.20.0
# ├── json@9.0.6
# ├── meteor-client-bundler@0.5.7
# ├── meteor-now@0.6.1
# ├── now@11.1.7
# ├── npm@5.6.0
# └── npm-check-updates@2.14.2
#
# [...]


svn export https://github.com/Urigo/angular-meteor/trunk/examples/AngularCLI demo6B

cd demo6B

git init
git add --all
git commit -m 'initial code'

json -I -f package.json -e "delete(this.scripts.postinstall)" 
# json: updated "package.json" in-place

npm install
#
# > node-sass@4.9.3 install [...]/demo6B/node_modules/node-sass
# > node scripts/install.js
#
# Cached binary found at [...]/.npm/node-sass/4.9.3/linux-x64-57_binding.node
#
# > node-sass@4.9.3 postinstall [...]/demo6B/node_modules/node-sass
# > node scripts/build.js
#
# Binary found at [...]/demo6B/node_modules/node-sass/vendor/linux-x64-57/binding.node
# Testing binary
# Binary is fine
# npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
# npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
#
# added 1231 packages in 40.129s

# npm

##### Force version of @babel/runtime:

npm i --save-exact @babel/runtime@7.0.0-beta.55
# npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
# npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
#
# + @babel/runtime@7.0.0-beta.55
# updated 1 package in 21.378s

#### Upgrade Meteor to version 1.7.0.4:

(cd api && meteor update --patch)
You are at the latest patch version. 

cat api/.meteor/release
# METEOR@1.7.0.3

(cd api && meteor update)
#                                              
# Changes to your project's package version selections from updating the release:
#                                              
# babel-runtime  upgraded from 1.2.2 to 1.2.4   
# modules        upgraded from 0.12.1 to 0.12.2
#
# api: updated to Meteor 1.7.0.4.               
#                                                                       #            
# Changes to your project's package version selections from updating package versions:
#                                              
# babel-runtime              upgraded from 1.2.4 to 1.2.4_1
# dynamic-import             upgraded from 0.4.1 to 0.4.2
# ecmascript-runtime-client  upgraded from 0.7.1 to 0.7.2
# ecmascript-runtime-server  upgraded from 0.7.0 to 0.7.1
# meteor                     upgraded from 1.9.0 to 1.9.2
# modern-browsers            upgraded from 0.1.1 to 0.1.2
# npm-mongo                  upgraded from 3.0.7 to 3.0.11

##### Force a minimal version for core-js:

npm i -S core-js@^2.5.7
# npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
# npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
#
# + core-js@2.5.7
# updated 1 package in 10.086s

##### Prevent from upgrading typescrypt to version 3:

npm i -S typescript@~2.9.2
# npm WARN @ngtools/webpack@6.0.8 requires a peer of typescript@~2.4.0 || ~2.5.0 || ~2.6.0 || ~2.7.0 but none is installed. You must install peer dependencies yourself.
# npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
# npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
#
# + typescript@2.9.2
# added 1 package and updated 1 package in 10.349s

json -f package-lock.json dependencies.typescript.version
# 2.9.2

ncu
# Using [...]/demo6B/package.json
# [..................] \ :
#  @babel/runtime                 7.0.0-beta.55  →  7.0.0-rc.1 
#  @angular-devkit/build-angular         ~0.6.8  →      ~0.7.4 
#  @angular/cli                          ~6.0.8  →      ~6.1.4 
#  @types/meteor                         1.4.14  →      1.4.16 
#  @types/node                           ~8.9.4  →     ~10.7.1 
#  codelyzer                             ~4.2.1  →      ~4.4.4 
#  jasmine-core                         ~2.99.1  →      ~3.2.1 
#  karma                                 ~1.7.1  →      ~3.0.0 
#  karma-jasmine-html-reporter           ^0.2.2  →      ^1.3.0 
#  protractor                            ~5.3.0  →      ~5.4.0 
#  ts-node                               ~5.0.1  →      ~7.0.1 
#  tslint                                ~5.9.1  →     ~5.11.0 
#  typescript                            ^2.9.2  →      ^3.0.1 
#
# Run ncu with -u to upgrade package.json


ncu -a @angular-devkit/build-angular @angular/cli @types/meteor @types/node tsnode tslint
# Using [...]/demo6B/package.json
# [..................] | :
#  @angular-devkit/build-angular  ~0.6.8  →   ~0.7.4 
#  @angular/cli                   ~6.0.8  →   ~6.1.4 
#  @types/meteor                  1.4.14  →   1.4.16 
#  @types/node                    ~8.9.4  →  ~10.7.1 
#  tslint                         ~5.9.1  →  ~5.11.0 
# Upgraded [...]/demo6B/package.json

npm update

##### Force rebuilding the file as Meteor version has been changed
rm -f node_modules/meteor-client.js

##### Add scripts to launch the app at once:

# npm i -D rimraf mkdirp cross-env npm-run-all wait-on path-exists-cli
npm i -D npm-run-all wait-on path-exists-cli
# npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
# npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
#
# + path-exists-cli@1.0.0
# + npm-run-all@4.1.3
# + wait-on@2.1.0
# added 33 packages and updated 1 package in 17.277s

##### Meteor api server can't be running during building meteor-client
json -I -f package.json -e "this.scripts['start:api']='wait-on -d 500 node_modules/meteor-client.js && npm run api'"
# json: updated "package.json" in-place

##### Rebuild meteor-client if necessary
json -I -f package.json -e "this.scripts['prestart:api']='path-exists node_modules/meteor-client.js || npm run client-bundle'"
# json: updated "package.json" in-place

##### Don't start ui server until meteor-client.js is available
json -I -f package.json -e "this.scripts['start:client']='wait-on node_modules/meteor-client.js && npm run start'"
# json: updated "package.json" in-place

##### The launching command itself:
json -I -f package.json -e "this.scripts['start:dev']='run-p start:api start:client'"
# json: updated "package.json" in-place

##### To avoid alert about typescript casting in libraries eg meteor-rxjs):
json -I -f tsconfig.json -e "this.compilerOptions.skipLibCheck=true"
# json: updated "tsconfig.json" in-place


npm run start:dev
#
# > angular-cli-meteor@0.0.0 start:dev [...]/demo6B
# > run-p start:api start:client
#
#
# > angular-cli-meteor@0.0.0 start:client [...]/demo6B
# > wait-on node_modules/meteor-client.js && npm run start
#
#
# > angular-cli-meteor@0.0.0 prestart:api [...]/demo6B
# > path-exists node_modules/meteor-client.js || npm run client-bundle
#
#
# > angular-cli-meteor@0.0.0 client-bundle [...]/demo6B
# > meteor-client bundle -s api
#
# Created a new Meteor app in '/tmp/tmp-1437t7VU9Sh3l6mI'.
#
# To run your new app:                          
#   cd /tmp/tmp-1437t7VU9Sh3l6mI                
#   meteor                                      
#                                            
# If you are new to Meteor, try some of the learning resources here:
#   https://www.meteor.com/tutorials            
#                                              
# To start with a different app template, try one of the following:
#
#   meteor create --bare    # to create an empty app
#   meteor create --minimal # to create an app with as few Meteor packages as possible
#   meteor create --full    # to create a more complete scaffolded app
#                                              
# audited 602 packages in 1.915s
# found 0 vulnerabilities
#
#                                              
# Changes to your project's package version selections:
#                                              
# autopublish                   removed from your project
# barbatus:typescript           added, version 0.7.0
# barbatus:typescript-compiler  added, version 0.10.0
# barbatus:typescript-runtime   added, version 1.1.0
# blaze                         removed from your project
# blaze-html-templates          removed from your project
# blaze-tools                   removed from your project
# caching-compiler              removed from your project
# caching-html-compiler         removed from your project
# deps                          removed from your project
# html-tools                    removed from your project
# htmljs                        removed from your project
# insecure                      removed from your project
# jquery                        removed from your project
# observe-sequence              removed from your project
# spacebars                     removed from your project
# spacebars-compiler            removed from your project
# templating                    removed from your project
# templating-compiler           removed from your project
# templating-runtime            removed from your project
# templating-tools              removed from your project
# ui                            removed from your project
#
#                                              
# WARNING: The output directory is under your source tree.
#          Your generated files may get interpreted as source code!
#          Consider building into a different directory instead
#          meteor build ../output
#                                              
#                                              
# > angular-cli-meteor@0.0.0 start:api [...]/demo6B
# > wait-on -d 500 node_modules/meteor-client.js && npm run api
#
#
# > angular-cli-meteor@0.0.0 start [...]/demo6B
# > ng serve
#
#
# > angular-cli-meteor@0.0.0 api [...]/demo6B
# > cd api && meteor run
#
# ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
# [[[[[ [...]/demo6B/api ]]]]]
#
# => Started proxy.                             
#  92% after chunk asset optimization SourceMapDevToolPlugin scripts.js generate SourceMap                                                                            #                                                         
# Date: 2018-08-17T07:19:42.635Z
# Hash: 1d0afbfec600c1788e81
# Time: 13499ms
# chunk {main} main.js, main.js.map (main) 12.7 kB [initial] [rendered]
# chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 227 kB [initial] [rendered]
# chunk {runtime} runtime.js, runtime.js.map (runtime) 5.22 kB [entry] [rendered]
# chunk {scripts} scripts.js, scripts.js.map (scripts) 1.08 MB  [rendered]
# chunk {styles} styles.js, styles.js.map (styles) 15.6 kB [initial] [rendered]
# chunk {vendor} vendor.js, vendor.js.map (vendor) 3.54 MB [initial] [rendered]
# ℹ ｢wdm｣: Compiled successfully.
# => Started MongoDB.                           
# => Started your app.                          
#
# => App running at: http://localhost:3000/
# I20180817-09:20:28.479(2)? Exception while invoking method 'addTodo' { Error: Match error: Expected string, got null
# I20180817-09:20:28.882(2)?     at Object.check (packages/check/match.js:36:17)
# I20180817-09:20:28.883(2)?     at MethodInvocation.addTodo (server/methods.ts:7:5)
# I20180817-09:20:28.883(2)?     at maybeAuditArgumentChecks (packages/ddp-server/livedata_server.js:1767:12)
# I20180817-09:20:28.883(2)?     at DDP._CurrentMethodInvocation.withValue (packages/ddp-server/livedata_server.js:719:19)
# I20180817-09:20:28.883(2)?     at Meteor.EnvironmentVariable.EVp.withValue (packages/meteor.js:1304:12)
# I20180817-09:20:28.883(2)?     at DDPServer._CurrentWriteFence.withValue (packages/ddp-server/livedata_server.js:717:46)
# I20180817-09:20:28.884(2)?     at Meteor.EnvironmentVariable.EVp.withValue (packages/meteor.js:1304:12)
# I20180817-09:20:28.884(2)?     at Promise (packages/ddp-server/livedata_server.js:715:46)
# I20180817-09:20:28.884(2)?     at new Promise (<anonymous>)
# I20180817-09:20:28.884(2)?     at Session.method (packages/ddp-server/livedata_server.js:689:23)
# I20180817-09:20:28.884(2)?     at packages/ddp-server/livedata_server.js:559:43
# I20180817-09:20:28.884(2)?   message: 'Match error: Expected string, got null',
# I20180817-09:20:28.884(2)?   path: '',
# I20180817-09:20:28.885(2)?   sanitizedError: 
# I20180817-09:20:28.885(2)?    { Error: Match failed [400]
# I20180817-09:20:28.885(2)?     at errorClass.<anonymous> (packages/check/match.js:91:27)
# I20180817-09:20:28.885(2)?     at new errorClass (packages/meteor.js:725:17)
# I20180817-09:20:28.885(2)?     at Object.check (packages/check/match.js:36:17)
# I20180817-09:20:28.885(2)?     at MethodInvocation.addTodo (server/methods.ts:7:5)
# I20180817-09:20:28.885(2)?     at maybeAuditArgumentChecks (packages/ddp-server/livedata_server.js:1767:12)
# I20180817-09:20:28.886(2)?     at DDP._CurrentMethodInvocation.withValue (packages/ddp-server/livedata_server.js:719:19)
# I20180817-09:20:28.886(2)?     at Meteor.EnvironmentVariable.EVp.withValue (packages/meteor.js:1304:12)
# I20180817-09:20:28.886(2)?     at DDPServer._CurrentWriteFence.withValue (packages/ddp-server/livedata_server.js:717:46)
# I20180817-09:20:28.886(2)?     at Meteor.EnvironmentVariable.EVp.withValue (packages/meteor.js:1304:12)
# I20180817-09:20:28.886(2)?     at Promise (packages/ddp-server/livedata_server.js:715:46)
# I20180817-09:20:28.886(2)?     at new Promise (<anonymous>)
# I20180817-09:20:28.886(2)?     at Session.method (packages/ddp-server/livedata_server.js:689:23)
# I20180817-09:20:28.887(2)?     at packages/ddp-server/livedata_server.js:559:43
# I20180817-09:20:28.887(2)?      isClientSafe: true,
# I20180817-09:20:28.887(2)?      error: 400,
# I20180817-09:20:28.887(2)?      reason: 'Match failed',
# I20180817-09:20:28.887(2)?      details: undefined,
# I20180817-09:20:28.887(2)?      message: 'Match failed [400]',
# I20180817-09:20:28.887(2)?      errorType: 'Meteor.Error' },
# I20180817-09:20:28.888(2)?   errorType: 'Match.Error' }
# I20180817-09:20:28.894(2)? Sanitized and reported to the client as: { Error: Match failed [400]
# I20180817-09:20:28.894(2)?     at errorClass.<anonymous> (packages/check/match.js:91:27)
# I20180817-09:20:28.894(2)?     at new errorClass (packages/meteor.js:725:17)
# I20180817-09:20:28.895(2)?     at Object.check (packages/check/match.js:36:17)
# I20180817-09:20:28.895(2)?     at MethodInvocation.addTodo (server/methods.ts:7:5)
# I20180817-09:20:28.895(2)?     at maybeAuditArgumentChecks (packages/ddp-server/livedata_server.js:1767:12)
# I20180817-09:20:28.895(2)?     at DDP._CurrentMethodInvocation.withValue (packages/ddp-server/livedata_server.js:719:19)
# I20180817-09:20:28.895(2)?     at Meteor.EnvironmentVariable.EVp.withValue (packages/meteor.js:1304:12)
# I20180817-09:20:28.895(2)?     at DDPServer._CurrentWriteFence.withValue (packages/ddp-server/livedata_server.js:717:46)
# I20180817-09:20:28.895(2)?     at Meteor.EnvironmentVariable.EVp.withValue (packages/meteor.js:1304:12)
# I20180817-09:20:28.896(2)?     at Promise (packages/ddp-server/livedata_server.js:715:46)
# I20180817-09:20:28.896(2)?     at new Promise (<anonymous>)
# I20180817-09:20:28.896(2)?     at Session.method (packages/ddp-server/livedata_server.js:689:23)
# I20180817-09:20:28.896(2)?     at packages/ddp-server/livedata_server.js:559:43
# I20180817-09:20:28.896(2)?   isClientSafe: true,
# I20180817-09:20:28.896(2)?   error: 400,
# I20180817-09:20:28.897(2)?   reason: 'Match failed',
# I20180817-09:20:28.897(2)?   details: undefined,
# I20180817-09:20:28.897(2)?   message: 'Match failed [400]',
# I20180817-09:20:28.897(2)?   errorType: 'Meteor.Error' }
# I20180817-09:20:28.897(2)? 
#^C

git add --all
git commit -m "Working AngularCLI example"

```

Go to http://localhost:4200: the page is displayed as expected.

> An empty string is rejected only if it's the first 'addTodo'. After that any todo string, even empty, will be accepted.

For the demo, add a simple Meteor.Assets:

```bash
mkdir -pv api/private \
&& cat << ___EOF > api/private/dummy.txt
Some dummy content.
___EOF
# mkdir: création du répertoire 'api/private'

mkdir -pv api/server/fixtures \
&& cat << ___EOF > api/server/fixtures/data.fixture.ts
import fs from 'fs';
const p = Assets.absoluteFilePath('dummy.txt');
console.log("Assets.absoluteFilePath('dummy.txt'): ", p);
const content = fs.readFileSync(p, 'UTF8');
console.log("private/dummy.txt content: ", content)
___EOF
# mkdir: création du répertoire 'api/server/fixtures'

npm run start:dev
#
# > angular-cli-meteor@0.0.0 start:dev /home/pierre/Développements/pwa/cornflourblue-ng6-bs4-login/demo6B
# > run-p start:api start:client
#
#
# > angular-cli-meteor@0.0.0 prestart:api /home/pierre/Développements/pwa/cornflourblue-ng6-bs4-login/demo6B
# > path-exists node_modules/meteor-client.js || npm run client-bundle
#
#
# > angular-cli-meteor@0.0.0 start:client /home/pierre/Développements/pwa/cornflourblue-ng6-bs4-login/demo6B
# > wait-on node_modules/meteor-client.js && npm run start
#
#
# > angular-cli-meteor@0.0.0 start:api /home/pierre/Développements/pwa/cornflourblue-ng6-bs4-login/demo6B
# > wait-on -d 500 node_modules/meteor-client.js && npm run api
#
#
# > angular-cli-meteor@0.0.0 start /home/pierre/Développements/pwa/cornflourblue-ng6-bs4-login/demo6B
# > ng serve
#
#
# > angular-cli-meteor@0.0.0 api /home/pierre/Développements/pwa/cornflourblue-ng6-bs4-login/demo6B
# > cd api && meteor run
#
# [[[[[ ~/Développements/pwa/cornflourblue-ng6-bs4-login/demo6B/api ]]]]]
#
# => Started proxy.                             
# ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
#  92% after chunk asset optimization SourceMapDevToolPlugin polyfills.js generate SourceMap                                            
#  92% after chunk asset optimization SourceMapDevToolPlugin scripts.js generate SourceMap
# server/fixtures/data.fixture.ts (1, 16): Cannot find module 'fs'.
# server/fixtures/data.fixture.ts (2, 11): Cannot find name 'Assets'.
#                                                                                    #    
# Date: 2018-08-17T08:19:46.435Z
# Hash: 1d0afbfec600c1788e81
# Time: 11797ms
# chunk {main} main.js, main.js.map (main) 12.7 kB [initial] [rendered]
# chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 227 kB [initial] [rendered]
# chunk {runtime} runtime.js, runtime.js.map (runtime) 5.22 kB [entry] [rendered]
# chunk {scripts} scripts.js, scripts.js.map (scripts) 1.08 MB  [rendered]
# chunk {styles} styles.js, styles.js.map (styles) 15.6 kB [initial] [rendered]
# chunk {vendor} vendor.js, vendor.js.map (vendor) 3.54 MB [initial] [rendered]
# ℹ ｢wdm｣: Compiled successfully.
# => Started MongoDB.                           
# I20180817-10:19:58.765(2)? Assets.absoluteFilePath('dummy.txt'):  /home/pierre/Développements/pwa/cornflourblue-ng6-bs4-login/demo6B/api/.meteor/local/build/programs/server/assets/app/dummy.txt
# I20180817-10:19:58.801(2)? private/dummy.txt content:  Some dummy content.
# I20180817-10:19:58.801(2)? 
# => Started your app.
#
# => App running at: http://localhost:3000/
^C

git add --all
git commit -m "Add code throwing error messages during api server build"

git remote add origin git@github.com:atao60/angular-meteor-example-AngularCLI.git
git push -u origin master

```


The api server runs fine despite the messages:
```
server/fixtures/data.fixture.ts (1, 16): Cannot find module 'fs'.
server/fixtures/data.fixture.ts (2, 11): Cannot find name 'Assets'.
```