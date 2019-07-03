export function randomCatName(): string {
  let names = ['Brad Kitt', 'Butch Catsidy', 'William Shakespaw', 'Fuzz Aldrin', 'Lucipurr', 'Fidel Catsro', 'Catrick Swayze', 'Chairman Meow', 'Mr. Meowgi', 'Luke Skywhisker'];
  return names[Math.floor(Math.random() * names.length)];
}
