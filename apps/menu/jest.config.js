module.exports = {
  name: 'menu',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/menu',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
