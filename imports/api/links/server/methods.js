// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './../links';

Meteor.methods({
  'links.insert'(link) {
    check(link.url, String);
    check(link.title, String);

    return Links.insert({
      url: link.url,
      title: link.title,
      createdAt: new Date(),
    });
  },
});
