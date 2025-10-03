The function first removes duplicate scores from the leaderboard to 
create a list of unique ranks, then for each player's score, it compares 
against the leaderboard from the bottom up to find the correct position, 
and appends the resulting rank to a list, which is returned at the end.