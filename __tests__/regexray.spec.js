const regexray = require('../index');

const testObj = {
  firstName: 'John',
  lastName: false,
  arr: ['a', 'b'],
  undef: undefined,
  id: 23423,
  big: 1123312n,
  sym: Symbol(),
  nu: null,
  blahblah: {
    a: {
      b: 'hello billy'
    },
    c: false,
    d: {
      a: {
        b: 'bye billy'
      }
    }
  },
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

describe('Scan', () => {
  test('Should find all results properly', async () => {
    const data = await regexray(testObj, [/hell/, /bill/, /el/, /johncena/, /42/]);
    expect(data.map(d => d.path)).toEqual([
      'blahblah.d.a.b',
      'blahblah.a.b',
      'blahblah.a.b',
      'blahblah.a.b'
    ]);
  });

  test('Should return empty array if fed wrong type', async () => {
    const data1 = await regexray([1, 2, 3], [/hell/, /bill/, /el/, /johncena/]);
    const data2 = await regexray(null, [/hell/, /bill/, /el/, /johncena/]);
    const data3 = await regexray('hello johncena and billy', [/hell/, /bill/, /el/, /johncena/]);
    expect(data1.map(d => d.path)).toEqual([]);
    expect(data2.map(d => d.path)).toEqual([]);
    expect(data3.map(d => d.path)).toEqual([]);
  });
});
