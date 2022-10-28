function songs(arr) {
    class Song {
      constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
      }
    }
    const typeList = arr.pop();
    const amountOfSongs = arr.shift();
    for (const el of arr) {
      let [typeOfListSong, name, time] = el.split("_");
      if (typeOfListSong == typeList) {
        const song = new Song(typeOfListSong, name, time);
        console.log(song.name);
      } else if (typeList === "all") {
        console.log(name);
      }
    }
  }
  songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);