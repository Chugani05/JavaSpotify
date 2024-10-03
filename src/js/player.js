import Song, { play_song } from './song.js';

export default class Player {
    constructor(map) {
        // Object.entries(map);
        let aux = 1;

        // Crea la instancia para Song
        // Invoca la función para reproducir la canción
        for (var [key, value] of Object.entries(map)) {
            const s_key = key;
            const s_value = value;
            const s_cover = `.cv${aux}`;
            const song = new Song(s_key, s_value);
            play_song(song);
            aux++;
        }
    }
}