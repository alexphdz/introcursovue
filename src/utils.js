import heroes from './data/heroes'

export const getHeroById = id => heroes.find(h => h.id === id);

export const getHeroByName = name => heroes.find(h => h.name === name);
export const getHeroesByOwner = owner => heroes.filter(h => h.owner === owner);
