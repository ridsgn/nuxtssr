export const state = () => ({
  cities: [],
  selected: {
    category: null,
    city: null,
    rating: null,
  },
})

export const mutations = {
  setCity(state, city) {
    state.selected.city = city
  },
  setCategory(state, category) {
    state.selected.category = category
  },
  setRating(state, rating) {
    state.selected.rating = rating
  },
  setCities(state, cities) {
    state.cities.push(cities)
  },
}
