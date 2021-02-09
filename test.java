public String reverseWordInMyString(String str) {
  StringBuilder output = new StringBuilder(str.length()); // initialize full capacity
  int curWordStart = 0;
  // scan the input string
  for (int i = 0; i < str.length(); i++) {
      char curLetter = str.charAt(i);
      if (!Character.isLetter(char)) {
          // the current word has ended--output it in reverse
          for (int j = i-1; j >= curWordStart; j--) {
              output.append(str.charAt(j));
          }
          // output the current letter
          output.append(curLetter);
          // the next current word starts just after the current letter
          curWordStart = i + 1;
      }
  }
  // The last current word (if any) ends with the end of string,
  // not a special character, so add it (reversed) as well to output
  for (int j = str.length() - 1; j >= curWordStart; j--) {
      output.append(str.charAt(j));
  }

  return output.toString();
}