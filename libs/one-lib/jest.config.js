module.exports = {
  name: 'one-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/one-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
