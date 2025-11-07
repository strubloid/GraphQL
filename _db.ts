let games = [
    { id: '1', title: 'The Legend of Zelda: Breath of the Wild', platform: ['Nintendo Switch', 'Wii U'] },
    { id: '2', title: 'God of War', platform: ['PlayStation 4'] },
    { id: '3', title: 'Halo Infinite', platform: ['Xbox Series X', 'PC'] },
    { id: '4', title: 'Super Mario Odyssey', platform: ['Nintendo Switch'] },
    { id: '5', title: 'The Witcher 3: Wild Hunt', platform: ['PlayStation 4', 'Xbox One', 'PC'] },
]

let authors = [
    { id: '1', name: 'Mario', verified: true },
    { id: '2', name: 'Yoshi', verified: false },
    { id: '3', name: 'Peach', verified: true },]

let reviews = [
    { id: '1', rating: 10, content: 'An amazing open-world experience!', gameId: '1', authorId: '1' },
    { id: '2', rating: 9, content: 'A masterpiece of storytelling.', gameId: '2', authorId: '2' },
    { id: '3', rating: 8, content: 'Great graphics, but the story is lacking.', gameId: '3', authorId: '3' },
    { id: '4', rating: 9, content: 'A fun platformer with creative level design.', gameId: '4', authorId: '2' },
    { id: '5', rating: 10, content: 'An epic RPG with a rich world to explore.', gameId: '5', authorId: '3' },
    { id: '6', rating: 9, content: 'Innovative gameplay and stunning visuals.', gameId: '1', authorId: '1' },
    { id: '7', rating: 8, content: 'Intense combat and a compelling narrative.', gameId: '2', authorId: '2' },
    { id: '8', rating: 7, content: 'Solid gameplay but feels repetitive at times.', gameId: '3', authorId: '3' },
    { id: '9', rating: 10, content: 'A joyous adventure full of surprises.', gameId: '4', authorId: '2' },
    { id: '10', rating: 9, content: 'Deep story and memorable characters.', gameId: '5', authorId: '3' },
]

export default { games, authors, reviews };