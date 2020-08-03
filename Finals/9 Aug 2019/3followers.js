function solve(arr){
    let followers = {};

    while ((line = arr.shift()) !== 'Log out'){
        let [command, username, count] = line.split(': ');

        switch (command) {
            case 'New follower':
                if (followers[username] === undefined){
                    followers[username] = {likes: 0, comments: 0};
                }
                break;
        
            case 'Like':
                
                if (followers[username] === undefined){
                    followers[username] = {likes: Number(count), comments: 0}
                } else {
                    followers[username].likes += Number(count);
                }
                break;

            case 'Comment':
                if (followers[username] === undefined){
                    followers[username] = {likes: 0, comments: 1}
                } else {
                    followers[username].comments += 1;
                }
                break;
            
            case 'Blocked':
                if (followers[username] === undefined){
                    console.log(`${username} doesn't exist.`)
                } else {
                    delete followers[username];
                }
                break;
        }
    }
    let sortedKeys = Object.keys(followers);
    sortedKeys.sort((a, b) => followers[b].likes - followers[a].likes || a.localeCompare(b));
    console.log(`${sortedKeys.length} followers`);
    for (const username of sortedKeys) {
        console.log(`${username}: ${followers[username].likes + followers[username].comments}`);
    }
}

solve([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
  ]
  )