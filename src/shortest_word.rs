// Simple, given a string of words, return the length of the shortest word(s).

// Assuming that String will never be empty and I do not need to account for different data types.

fn find_short(s: &str) -> usize {
  let words: Vec<&str> = s.rsplit(' ').collect();
  let mut shortest_word: usize = s.len();

  for word in words.iter() {
    let word_length: usize = word.len();

    if word_length < shortest_word {
      shortest_word = word_length;
    }
  }

  return shortest_word;
}

