#!/usr/bin/env expect
set timeout 360

spawn ./node_modules/.bin/vue init . vue-authoring-demo

# This happens because of
# https://github.com/vuejs/vue-cli/issues/291
expect "Project name" { send "\n" }
expect "Project description" { send "\n" }
expect "Author" { send "\n" }
expect "Select which storybook-addon you want to add" { send "\n" }
expect "Add circleci for Continuos Build?" { send "\n" }
expect "Configure circleci for Continuos Deployment" { send "\n" }
expect "Sort story and scenario in alphabetical order?" { send "\n" }
expect "Yes, use Yarn" { send "\n" }
expect eof