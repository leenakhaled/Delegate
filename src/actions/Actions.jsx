
export function addToFavorite(id) {
  return {
    type: "ADD_TO_FAVORITES",
    id: id
  }
}

export function removeFromFavorite(id) {
  return {
    type: "REMOVE_FROM_FAVORITES",
    id: id
  }
}

export function fetchRandomTexts() {
  return {
    type: RANDOM_TEXT_FETCH_REQUESTED
  }
}