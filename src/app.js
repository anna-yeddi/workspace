const characters = [
	{ name: 'swordbearer', health: 10 },
	{ name: 'wizard', health: 100 },
	{ name: 'wizard', health: 0 },
	{ name: 'archer', health: 0 },
]

const alive = characters.filter((item) => item.health > 0)
