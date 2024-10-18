/**
 * A playlist is considered a repeating playlist if any of the songs contain a reference to a previous song in the playlist. Otherwise, the playlist will end with the last song which points to undefined.
Implement the method isInRepeatingPlaylist that, efficiently with respect to time used, returns true if a playlist is repeating or false if it is not.
For example, the following code prints "true" as both songs point to each other.
let first = new Song ("Hello");
let second = new Song("Eye of the tiger");
first.nextSong = second;
second.nextSong = first;
console. log(first.isInRepeatingPlaylist());
 */

class Song {
    name;
    nextSong;
    
    constructor(name) {
      this.name = name;
    }
    
    /**
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isInRepeatingPlaylist() {
        // initialize pointers
        let tortoise = this
        let hare = this

        // while there is no end
        while(hare !== null && hare.nextSong !== null){
            // each movement hare will go a step ahead
            tortoise = tortoise.nextSong
            hare = hare.nextSong.nextSong

            // if hare meets tortoise it means it is on a loop (so it is repeating)
            if(tortoise === hare){
                return true
            }
        }
        // if it found the end is not repeating
        return false
    }
  }
  
  let first = new Song("Hello");
  let second = new Song("Eye of the tiger");
  
  first.nextSong = second;
  second.nextSong = first;
  
  console.log(first.isInRepeatingPlaylist());