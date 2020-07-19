function solve(band, album, song){
    let songDuration = (album.length * band.length * song.length)/2;
    let rounds = Math.ceil(songDuration/2.5);
    console.log(`The plate was rotated ${rounds} times.`)
}

solve("Black Sabbath", 'Paranoid', 'War Pigs')