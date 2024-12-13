export const longestPalindrome = (s: string): string => {
  let longest = '',
    size = s.length;

  for (let i = 0; i < size; i++) {
    // odd - palindromes with single character in the middle
    let l = i,
      r = i;

    while (l >= 0 && r < size && s[l] === s[r]) {
      l--;
      r++;
    }

    let cur = s.slice(l + 1, r);
    if (cur.length > longest.length) {
      longest = cur;
    }

    // even - palindromes with two characters in the middle
    l = i;
    r = i + 1;

    while (l >= 0 && r < size && s[l] === s[r]) {
      l--;
      r++;
    }

    cur = s.slice(l + 1, r);
    if (cur.length > longest.length) {
      longest = cur;
    }
  }

  return longest;
};
