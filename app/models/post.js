import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  content: DS.attr(),
  comments: DS.hasMany('comment', { async:true })
});
