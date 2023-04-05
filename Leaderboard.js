const form = document.getElementById('add-player-form');
const leaderboardTable = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];

function addPlayerToLeaderboard(name, score) {
  const newRow = document.createElement('tr');
  const nameCell = document.createElement('td');
  const scoreCell = document.createElement('td');

  nameCell.textContent = name;
  scoreCell.textContent = score;

  newRow.appendChild(nameCell);
  newRow.appendChild(scoreCell);

  leaderboardTable.appendChild(newRow);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const playerNameInput = event.target.elements['player-name'];
  const playerScoreInput = event.target.elements['player-score'];

  const playerName = playerNameInput.value.trim();
  const playerScore = parseInt(playerScoreInput.value);

  if (!playerName || isNaN(playerScore)) {
    return;
  }

  addPlayerToLeaderboard(playerName, playerScore);

  playerNameInput
