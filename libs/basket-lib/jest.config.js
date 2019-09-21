module.exports = {
  name: 'basket-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/basket-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
