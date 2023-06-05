export function typeColor(type){

    type = type.toLowerCase();
    
    switch(type){
    
      case 'bug':
        return 'bg-lime-600 border-lime-900';
    
      case 'dark':
        return 'bg-red-800 border-red-900';
    
      case 'dragon':
        return 'bg-indigo-600 border-indigo-900';
    
      case 'electric':
        return 'bg-yellow-400 border-yellow-900';
    
      case 'fairy':
        return 'bg-pink-600 border-pink-900';
    
      case 'fighting':
        return 'bg-rose-600 border-rose-900';
    
      case 'fire':
        return 'bg-orange-600 border-orange-900';
    
      case 'flying':
        return 'bg-sky-600 border-sky-900';
    
      case 'ghost':
        return 'bg-violet-600 border-violet-900';
    
      case 'grass':
        return 'bg-green-600 border-green-900';
    
      case 'ground':
        return 'bg-yellow-800 border-yellow-900';
    
      case 'ice':
        return 'bg-cyan-600 border-cyan-900';
    
      case 'normal':
        return 'bg-neutral-600 border-neutral-900';
    
      case 'poison':
        return 'bg-purple-600 border-purple-900';
    
      case 'psychic':
        return 'bg-fuchsia-600 border-fuchsia-900';
    
      case 'rock':
        return 'bg-yellow-800 border-yellow-900';
    
      case 'steel':
        return 'bg-zinc-600 border-zinc-900';
    
      case 'water':
        return 'bg-blue-600 border-blue-900';
    
    }
    
    
    
    }