module.exports = {
  name: 'basket',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/basket',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
