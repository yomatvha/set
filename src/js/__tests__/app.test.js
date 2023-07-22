import Team from '../app';

test('addCheck', () => {
  const team = new Team();
  const character = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  team.add(character);
  const result = team.members.size;
  const size = 1;
  expect(result).toBe(size);
});

test('addThrowErrorCheck', () => {
  const team = new Team();
  const character = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  team.add(character);
  expect(() => team.add(character)).toThrow('Такой персонаж уже существует');
});

test('addAllCheck', () => {
  const team = new Team();
  const bowman = {
    name: 'hero_1',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const daemon = {
    name: 'hero_2',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  team.addAll(bowman, daemon);
  const result = team.members.size;
  const size = 2;
  expect(result).toBe(size);
});

test('toArrayCheck', () => {
  const team = new Team();
  const bowman = {
    name: 'hero_1',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const daemon = {
    name: 'hero_2',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  team.addAll(bowman, daemon);
  const array = team.toArray();
  const result = [
    {
      name: 'hero_1',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'hero_2',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];
  expect(result).toEqual(array);
});
