/*
 * grunt-contrib-sonar
 * http://blog.rajatpandit.com
 *
 * Copyright (c) 2014 Rajat Pandit
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs'), semver = require('semver');
module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('sonar', 'Bumps up the version using semver', function(file, bump_type) {
  grunt.log.writeln('Updating version in "%s" for type "%s"', file, bump_type);
    var done = this.async(), // this is an async process
        current_version = '',
        flag = false, // set to true if a pattern is found
        new_version = '';
    fs.readFile(file, function(err, data) {
        if (err) { throw err; } // TODO do this properly
        data = data.toString().split("\n");
        // loop though the array of lines
        data.forEach(function(line,index) {
            var pattern = /sonar\.projectVersion/;
            if (line.match(pattern)) {
                var holder = line.split('=');
                if (2 === holder.length) {
                    current_version = holder[1];
                    new_version = semver.inc(current_version, bump_type); // update the new version
                    data[index] =  holder[0] + '=' + new_version; // update the line back in the array
                    flag = true;
                } else {
                    grunt.log.writeln('Unable to find pattern "projectVersion" in %s, no changes were made', file);
                    done();
                }
            }
        });
        // update the write if the file worked
        if (true === flag) {
            data = data.join("\n"); // split that again by new lines before writing it back
            fs.writeFile(file, data, function(err) {
                if (err) {throw err;} // TODO do this properly
                grunt.log.writeln('version updated to %s', new_version);
                done();
            });
        }
    });
  });
};
